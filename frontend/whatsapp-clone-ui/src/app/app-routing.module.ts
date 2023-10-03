import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ChatPage } from './pages/chat/chat.page';
import { ContactItemViewComponent } from './components/contact-item-view/contact-item-view.component';

const routes: Routes = [
  {
    path: '', component: CadastroPage
  },
  {
    path: 'chat', component: ChatPage
  },
  {
    path: 'conversation', component: ContactItemViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
