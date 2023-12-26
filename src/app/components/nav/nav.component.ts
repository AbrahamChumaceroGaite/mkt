import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonModule, MenubarModule, DynamicDialogModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  ref: DynamicDialogRef | undefined;
  constructor
    (
      private dialogService: DialogService) {

  }

  dialog(): void {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Iniciar sesión',
      styleClass: 'login-modal',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe();

    this.ref.onMaximize.subscribe();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
