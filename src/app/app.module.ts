import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './loginPage/loginPage.component';
import { HomeComponent } from './homePage/homePage.component';
import { RegisterComponent } from './register/register.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';

@NgModule({
  declarations: [AppComponent, NavComponent, LoginPageComponent, HomeComponent, RegisterComponent, FriendListComponent, FriendDetailComponent, ListComponent, MessagesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
