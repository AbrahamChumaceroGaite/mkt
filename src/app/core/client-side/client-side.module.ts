import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSideRoutingModule } from './client-side-routing.module';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    LobbyComponent

  ]
})
export class ClientSideModule { }
