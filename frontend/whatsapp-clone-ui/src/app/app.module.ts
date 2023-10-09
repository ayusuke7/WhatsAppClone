import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { ChatPage } from './pages/chat/chat.page';
import { ContactItemViewComponent } from './components/contact-item-view/contact-item-view.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';

import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContainerChatComponent } from './components/chat-container/container-chat.component';
import { BottomBarChatComponent } from './components/chat-bottom-bar/bottom-bar-chat.component';
import { NavBarChatComponent } from './components/chat-nav-bar/nav-bar-chat.component';
import { DisplayChatComponent } from './components/chat-display/display-chat.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { ChatConversationComponent } from './pages/chat-conversation/chat-conversation.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPage,
    ChatPage,
    ContactItemViewComponent,
    SideBarComponent,
    NavBarComponent,
    ContactItemComponent,
    ContainerChatComponent,
    BottomBarChatComponent,
    NavBarChatComponent,
    DisplayChatComponent,
    ChatScreenComponent,
    ChatConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
