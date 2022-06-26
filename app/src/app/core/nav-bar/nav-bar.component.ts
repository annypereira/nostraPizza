import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public themePage = "moon"
  constructor(){ }

  ngOnInit(): void {
  }

  public changeTheme() {
    document.body.classList.toggle("dark");
    if (this.themePage === "moon") {
     this.themePage = "sun"      
    } else {
      this.themePage = "moon"
    }
  }
}
