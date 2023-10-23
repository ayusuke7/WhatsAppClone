import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-chat',
  templateUrl: './nav-bar-chat.component.html',
  styleUrls: ['./nav-bar-chat.component.css']
})
export class NavBarChatComponent implements OnInit{
  @Input()
  imageSrc: string = 'assets/image-profile/avatar.png'
  @Input()
  imageAlt:String = 'Profile image'
  @Input()
  name: string = 'Seu nome'

  constructor(){}
  ngOnInit(): void {}

}
