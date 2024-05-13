import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './AppComponent';
import { RepositoryListComponent } from './components/repository-list/repository-list.component'; 
import { HeaderComponent } from './components/header/header.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component'; // Import SkeletonLoaderComponent
import { FormsModule } from '@angular/forms'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, RepositoryListComponent, SkeletonLoaderComponent], // Include SkeletonLoaderComponent
      imports: [HttpClientTestingModule, FormsModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'GitHub Repository Viewer' title`, () => {
    expect(component.title).toEqual('GitHub Repository Viewer');
  });
});
