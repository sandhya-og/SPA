//src/app/services/github.service

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private cache = new Map<string, Observable<Repository[]>>(); // Cache map

  private headers = new HttpHeaders({
    'Authorization': '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' // Github API token
  });

  constructor(private http: HttpClient) {}

  // Function to fetch repositories
  getRepositories(username: string, page: number, pageSize: number): Observable<Repository[]> {
    const cacheKey = `${username}:${page}:${pageSize}`; // Generate a cache key

    // Check the cache for the given key
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as Observable<Repository[]>;
    }

    // GitHub API URL
    const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${pageSize}&sort=created&direction=asc`;


    // Fetch the repositories
    const observable = this.http.get<Repository[]>(apiUrl, { headers: this.headers }).pipe(
      map(repositories => repositories || []),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('User not found:', error);
          return throwError('User not found');
        } else {
          console.error('Error fetching repositories:', error);
          return throwError('Error fetching repositories');
        }
      }),
      shareReplay(1) // Cache the observable to avoid duplicate requests
    );

    // Store the observable in the cache
    this.cache.set(cacheKey, observable);
    return observable;
  }
  getTotalCount(username: string): Observable<number> {
    // GitHub API URL to fetch the total count of repositories
    const apiUrl = `https://api.github.com/users/${username}`;

    return this.http.get<any>(apiUrl).pipe(
      map(data => data.public_repos || 0), // Extract the total count of repositories
      catchError(error => {
        console.error('Error fetching total count:', error);
        return of(0); // Return 0 in case of an error
      })
    );
  }
  getLanguages(repoName: string): Observable<any> {
    const apiUrl = `https://api.github.com/repos/${repoName}/languages`;
    
    return this.http.get<any>(apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching languages:', error);
        return of({});
      })
    );
  }
}