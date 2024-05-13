// src/app/components/repository-list/repository-list.component.ts

import { Component, Input, OnChanges } from '@angular/core';
import { GitHubService } from '../../services/github.service';
import { Repository } from '../../models/repository';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnChanges {
  @Input() username: string = ''; 
  repositories$: Observable<Repository[]> | null = null; //Observable to hold respositories data
  currentPage: number = 1; 
  pageSize: number = 10; 
  totalCount: number = 0; 

  constructor(private gitHubService: GitHubService) {}

  ngOnChanges(): void {
    // Fetch repositories when the username changes
    if (this.username) {
      this.fetchRepositories();
    }
  }

  // Fetch repositories using the service
  fetchRepositories(): void {
    this.repositories$ = this.gitHubService.getRepositories(this.username, this.currentPage, this.pageSize).pipe(
      switchMap(repositories => {
        // Fetch languages for each repository
        const observables = repositories.map(repo =>
          this.gitHubService.getLanguages(repo.full_name).pipe(
            map(languages => {
              repo.languages = Object.keys(languages);
              return repo;
            })
          )
        );
        // Wait for all language requests to complete
        return forkJoin(observables);
      })
    );

    // Fetch the total count of repositories for the given username
    this.gitHubService.getTotalCount(this.username).subscribe(
      count => this.totalCount = count,
      error => console.error('Error fetching total count:', error)
    );
  }

  // Handle page changes
  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchRepositories();
  }

  // Handle page size changes
  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1; // Reset current page when changing page size
    this.fetchRepositories();
  }

  // Calculate the total number of pages
  getTotalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  generatePageNumbers(): number[] {
    const visiblePages = 5; // Adjust this to show more or fewer pages
    let start = this.currentPage - Math.floor(visiblePages / 2);
    start = Math.max(start, 1);
    let end = start + visiblePages - 1;
    end = Math.min(end, this.getTotalPages());
    if (end === this.getTotalPages()) {
      start = Math.max(end - visiblePages + 1, 1);
    }
  
    return Array.from({ length: (end - start + 1) }, (_, index) => start + index);
  }
  
  // Function to open a repository in a new tab
  openRepository(repo: Repository): void {
    window.open(repo.html_url, '_blank');
  }
}
