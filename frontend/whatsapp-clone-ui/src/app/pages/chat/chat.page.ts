import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.css']
})
export class ChatPage implements OnInit{

  showContactItem = true;
  showContactItemView = false;

  constructor(){}
  ngOnInit(): void {}

  toggleComponent() {
    this.showContactItem = !this.showContactItem;
    this.showContactItemView = !this.showContactItemView;
  }

}
