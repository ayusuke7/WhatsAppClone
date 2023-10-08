import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item-view',
  templateUrl: './contact-item-view.component.html',
  styleUrls: ['./contact-item-view.component.css']
})
export class ContactItemViewComponent implements OnInit{
  imageSrc = 'assets/image-profile/avatar.png'
  imageAlt = 'Profile'
  imageView = "assets/image-chat/double-checkk.png"
  imageAltView = "Image View"

  ngOnInit(): void {

  }
}
