import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})

export class ContactItemComponent implements OnInit{

  @Input()
  name: string = "Usuario"
  @Input()
  imageSrc: string = "assets/image-profile/avatar.png"
  @Input()
  imageAlt: string = "Profile"
  @Input()
  imageView: string = "assets/image-chat/double-checkk.png"
  @Input()
  imageAltView: string = "Image View"
  @Input()
  message: string = "Nova mensagem - contact-item"
  @Input()
  time: string = "18:35";

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}

}
