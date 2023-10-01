import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ChatPage } from './pages/chat/chat.page';

const routes: Routes = [
  {
    path: '', component: CadastroPage
  },
  {
    path: 'chat', component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
