import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DialogService } from 'primeng/dynamicdialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketMasterService } from './services/socket.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(), provideAnimations(), DialogService, FormsModule, ReactiveFormsModule, SocketMasterService]
};
