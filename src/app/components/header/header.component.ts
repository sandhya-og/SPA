// src/app/components/header/header.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  username: string = ''; // username input
  link: string | null = null; // github link of the particular username or null
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  onSearch(): void {
    this.search.emit(this.username);
    //if username exists, create github link otherwise null
    this.link = this.username ? `https://github.com/${this.username}` : null;
  }
}
