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
    if(this.validateName() && this.validateNumber()) {
      this.router.navigate(['/chat'])
    } else {
      alert("Por favor, preencha todos os campos corretamente.")
    }
  }

  validateName(): boolean {
    return this.formData.name.trim() !== '';
  }

  validateNumber(): boolean {
    const numberPhone = /^\(\d{2}\)\s\d{5}\d{4}$/;
    return numberPhone.test(this.formData.numero);
  }
}
