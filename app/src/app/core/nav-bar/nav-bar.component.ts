import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  themePage = '🌑';
  constructor() {}

  ngOnInit(): void {}

  public changeTheme() {
    document.body.classList.toggle('dark');
    if (this.themePage === '🌑') {
      this.themePage = '☀️';
    } else {
      this.themePage = '🌑';
    }
  }
}
