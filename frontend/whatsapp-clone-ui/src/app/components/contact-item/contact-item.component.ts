import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})

export class ContactItemComponent implements OnInit{
  imageSrc: String = 'assets/image-profile/avatar.png'
  imageAlt: String = 'Profile'
  imageView: String = "assets/image-chat/double-checkk.png"
  imageAltView: String = "Image View"

  isOpenConversation:boolean = false

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}

  // testando a rota para abrir a conversa pessoal
  openConversation():void {
    this.router.navigate(['/conversation'])
    this.isOpenConversation = !this.isOpenConversation
  }
}
