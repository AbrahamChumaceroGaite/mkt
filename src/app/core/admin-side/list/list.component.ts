import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PanelModule, ScrollPanelModule, CardModule, ButtonModule, MenubarModule, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  loading: boolean = false;
  
  onWaitList: any[] = [];

  constructor(private dialogService: DialogService) {
    this.onWaitList = [
      {
        id: 1,
        name: 'Abraham Chumacero Gaite',
        ticket: 'INF-001',
        type: 'Información',
        autor: 'Padre'
      },
      {
        id: 2,
        name: 'Hugo Loza',
        ticket: 'INS-002',
        type: 'Inscripción',
        autor: 'Padre'
      },
      {
        id: 3,
        name: 'Raul Avalos',
        ticket: 'INS-003',
        type: 'Inscripción',
        autor: 'Estudiante'
      }
    ];
  }

}
