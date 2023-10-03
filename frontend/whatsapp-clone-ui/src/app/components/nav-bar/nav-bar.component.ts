import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  imageSrc = 'assets/image-profile/avatar.png'
  imageAlt = 'Profile'

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
