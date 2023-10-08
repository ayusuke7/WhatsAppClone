import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-chat',
  templateUrl: './container-chat.component.html',
  styleUrls: ['./container-chat.component.css']
})
export class ContainerChatComponent implements OnInit{
  imageSrc = 'assets/image-global/container-chat.png'
  imageAlt = 'Profile'
  consructor(){}
  ngOnInit(): void {}

}
