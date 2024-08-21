import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav', templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  ref: DynamicDialogRef | undefined;
  constructor
    (
      private dialogService: DialogService,
      public AuthService: AuthService) {
    this.AuthService.loginSuccessEvent.subscribe(() => {
      if (this.ref) {
        this.ref.destroy();
      }
    });
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

  logout(): void {
    this.AuthService.logout();
  }
}
