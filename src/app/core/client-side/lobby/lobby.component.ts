import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { NgFor } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [PanelModule, ScrollPanelModule, CardModule, ButtonModule, MenubarModule, NgFor],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

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

  ngOnit(): void {

  }


  addPerson() {
    const ref = this.dialogService.open(AddComponent, {
      header: 'Agregar Nueva Persona',
      styleClass: 'form-dialog',
      maximizable: true,
    });
  }

}
