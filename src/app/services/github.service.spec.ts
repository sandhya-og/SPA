import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitHubService } from './github.service';

describe('GitHubService', () => {
  let service: GitHubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitHubService]
    });
    service = TestBed.inject(GitHubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return repositories for a valid username', () => {
    const username = 'example';
    const page = 1;
    const pageSize = 10;
    const mockRepositories = [{ id: 1, name: 'repo1', full_name: 'example/repo1', html_url: 'https://github.com/example/repo1' }];
    const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${pageSize}&sort=created&direction=asc`;

    service.getRepositories(username, page, pageSize).subscribe(repositories => {
      expect(repositories).toEqual(mockRepositories);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepositories);
  });

  it('should handle error when user not found', () => {
    const username = 'unknown';
    const page = 1;
    const pageSize = 10;
    const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${pageSize}&sort=created&direction=asc`;

    service.getRepositories(username, page, pageSize).subscribe(
      () => {},
      error => {
        expect(error).toBe('User not found');
      }
    );

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush([], { status: 404, statusText: 'Not Found' });
});

});
