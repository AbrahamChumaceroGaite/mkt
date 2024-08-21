import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from './frameworks/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { SocketMasterService } from './services/socket.service';
import { MessagesService } from './services/message.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,    
    InputTextModule,
    MenubarModule,
    MenuModule,
    RippleModule,    
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [DialogService, MessagesService,SocketMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
