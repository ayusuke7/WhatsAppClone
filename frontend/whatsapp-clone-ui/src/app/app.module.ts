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

@NgModule({
  declarations: [
    AppComponent,
    CadastroPage,
    ChatPage,
    ContactItemViewComponent,
    SideBarComponent,
    NavBarComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
