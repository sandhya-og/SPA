import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const githubUsername = 'example';
    const apiUrl = `https://api.github.com/users/${githubUsername}`;

    service.getUser(githubUsername).subscribe(user => {
      expect(user).toBeTruthy();
      expect(user.login).toEqual(githubUsername);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush({ login: githubUsername });
  });
});
