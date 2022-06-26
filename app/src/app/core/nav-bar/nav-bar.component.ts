import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  themePage = 'moon';
  constructor() {}

  ngOnInit(): void {}

  changeTheme() {
    document.body.classList.toggle('dark');
    if (this.themePage === 'moon') {
      this.themePage = 'sun';
    } else {
      this.themePage = 'moon';
    }
  }
}
