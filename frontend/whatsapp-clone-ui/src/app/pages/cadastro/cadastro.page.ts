import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro.page',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.css']
})
export class CadastroPage implements OnInit{
  @Input()
  public formData = {
    name: '',
    numero: ''
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
    alert("Por favor, preencha todos os campos corretamente.");
  }

  validateName(): boolean {
    return this.formData.name.trim() !== '';
  }

  validateNumber(): boolean {
    let cleanNumber = this.formData.numero.replace(/[^0-9]+/g, "");
    let min = 10;
    let max = 15;
    return cleanNumber.length >= min && cleanNumber.length <= max;
  }
}
