//src/app/AppComponent.ts
import { Component } from '@angular/core';
import { GitHubService } from './services/github.service';
import { Observable } from 'rxjs';
import { Repository } from './models/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Repository Viewer';
  username: string = ''; // Current GitHub username for search
  repositories$: Observable<Repository[]> | null = null; // Observable for the list of repositories

  constructor(private gitHubService: GitHubService) { }

  // Function to handle the search action
  onSearch(username: string): void {
    this.username = username;
    // Fetch repositories based on the username
    this.fetchRepositories();
  }

  // Function to fetch repositories based on current state
  fetchRepositories(): void {
    if (this.username) {
      this.repositories$ = this.gitHubService.getRepositories(this.username, 1, 10);
    } else {
      this.repositories$ = null; // Reset repositories if username is empty
    }
  }
  // Event handler for page change
  onPageChange(page: number): void {
    if (this.username) {
      this.repositories$ = this.gitHubService.getRepositories(this.username, page, 10);
    }
  }

  // Event handler for page size change
  onPageSizeChange(pageSize: number): void {
    if (this.username) {
      this.repositories$ = this.gitHubService.getRepositories(this.username, 1, pageSize);
    }
  }
  
}
