import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryListComponent } from './repository-list.component';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { GitHubService } from '../../services/github.service'; // Import GitHubService
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryListComponent, SkeletonLoaderComponent],
      imports: [HttpClientTestingModule, FormsModule], // Add FormsModule
      providers: [GitHubService] // Provide GitHubService
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
