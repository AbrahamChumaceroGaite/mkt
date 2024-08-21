import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSideRoutingModule } from './admin-side-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/frameworks/primeng.module';
import { ListComponent } from './list/list.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminSideRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    PrimengModule,
    ScrollPanelModule,
    ButtonModule
  ]
})
export class AdminSideModule { }
