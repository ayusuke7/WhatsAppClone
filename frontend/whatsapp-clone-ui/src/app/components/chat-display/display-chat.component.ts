import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-chat',
  templateUrl: './display-chat.component.html',
  styleUrls: ['./display-chat.component.css']
})
export class DisplayChatComponent implements OnInit{
  imageSrc = 'assets/image-global/Display-chat.png'
  imageAlt = 'Display'
  constructor(){

  }
  ngOnInit(): void {

  }

}
