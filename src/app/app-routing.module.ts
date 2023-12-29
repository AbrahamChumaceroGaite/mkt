import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [

  {
      path: '', component: NavComponent, children: [
          {
              path: '', loadChildren: () => import('./core/client-side/client-side.module').then(m => m.ClientSideModule)
          },
          {
              path: '', loadChildren: () => import('./core/admin-side/admin-side.module').then(m => m.AdminSideModule)
          }
      ]
  },

  {path: '***', redirectTo: 'lobby'},

  {path: '', redirectTo: 'lobby', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
