import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})

export class ContactItemComponent implements OnInit{

  imageSrc = 'assets/image-profile/avatar.png'
  imageAlt = 'Profile'
  imageView = "assets/image-chat/double-checkk.png"
  imageAltView = "Image View"


  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}

}
