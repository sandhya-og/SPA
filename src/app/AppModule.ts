// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './AppComponent';
import { HeaderComponent } from './components/header/header.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';

import { GitHubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoryListComponent,
    SkeletonLoaderComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule // Importing CommonModule to include async pipe 
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
