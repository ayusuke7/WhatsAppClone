import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item-view',
  templateUrl: './contact-item-view.component.html',
  styleUrls: ['./contact-item-view.component.css']
})
export class ContactItemViewComponent implements OnInit{
  // TESTE
  imageSrc: String = 'assets/image-profile/avatar.png'
  imageAlt: String = 'Profile'
  imageView: String = "assets/image-chat/double-checkk.png"
  imageAltView: String = "Image View"

  ngOnInit(): void {

  }
}
