import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item-view',
  templateUrl: './contact-item-view.component.html',
  styleUrls: ['./contact-item-view.component.css']
})
export class ContactItemViewComponent implements OnInit {

  @Input()
  name: string = "Nome Padrão"
  @Input()
  imageSrc: string = "assets/image-profile/avatar.png"
  @Input()
  imageAlt: string = "Profile"
  @Input()
  imageView: string = "assets/image-chat/double-checkk.png"
  @Input()
  imageAltView: string = "Image View"
  @Input()
  message: string = "Mensagem Padrão"
  @Input()
  time = "18:35"

  constructor() {}
  ngOnInit() {

  }

  addMessage() {
    // Adicione a mensagem atual e atualize a hora
    this.message = 'Nova mensagem - contact-item';
    const now = new Date();
    this.time = `${now.getHours()}:${now.getMinutes()}`;
  }

}
