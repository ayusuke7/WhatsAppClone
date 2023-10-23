import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ChatPage } from './pages/chat/chat.page';

import { ChatConversationComponent } from './pages/chat-conversation/chat-conversation.page';

const routes: Routes = [
  {
    path: '', component: CadastroPage
  },
  {
    path: 'chat', component: ChatPage
  },
  // {
  //   path: 'conversation', component: ChatConversationComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
