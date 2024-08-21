import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './frameworks/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SocketMasterService } from './services/socket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent
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
  providers: [
    provideClientHydration(),
    MessageService,
    ConfirmationService,
    DialogService,
    DynamicDialogModule,
    SocketMasterService,
    DynamicDialogRef,
    { provide: LOCALE_ID, useValue: 'es-BO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
