import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro.page',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.css']
})
export class CadastroPage implements OnInit{

  imageLogo = "assets/image-global/logo.png.png"
  imageAltLogo = "Image View"

  @Input()
  public formData = {
    name: '',
    phone: ''
  };

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  navegateToChat() {
    if (this.validateName() && this.validateNumber()) {
      this.router.navigate(['/chat']);
    } else {
      this.validationError();
    }
  }

  private validationError() {
    alert("Please fill in all fields correctly.");
  }

  validateName(): boolean {
    return this.formData.name.trim() !== '';
  }

  validateNumber(): boolean {
    let cleanNumber = this.formData.phone.replace(/[^0-9]+/g, "");
    return cleanNumber.length >= 10 && cleanNumber.length <= 15;
  }
}
