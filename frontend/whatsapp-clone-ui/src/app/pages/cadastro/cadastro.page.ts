import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro.page',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.css']
})
export class CadastroPage {

  constructor(
    private router: Router
  ){}

  navegateToChat(): void{
    this.router.navigate(['/chat'])
  }


}
