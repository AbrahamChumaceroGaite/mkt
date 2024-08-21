import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSideRoutingModule } from './client-side-routing.module';
import { LobbyComponent } from './lobby/lobby.component';
import { PrimengModule } from '../../frameworks/primeng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AddComponent,
    LobbyComponent
  ],
  imports: [   
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    DropdownModule,
    ButtonModule,
    ScrollPanelModule,
    PrimengModule,
    ScrollPanelModule,
    InputTextModule
  ]
})
export class ClientSideModule { }
