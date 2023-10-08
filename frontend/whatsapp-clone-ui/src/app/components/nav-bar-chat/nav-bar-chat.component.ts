import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-chat',
  templateUrl: './nav-bar-chat.component.html',
  styleUrls: ['./nav-bar-chat.component.css']
})
export class NavBarChatComponent implements OnInit{

  imageSrc = 'assets/image-profile/avatar.png'
  imageAlt = 'Profile image'

  constructor(){}
  ngOnInit(): void {}

}
