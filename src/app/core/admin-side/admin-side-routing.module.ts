import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGuard } from 'src/app/guard/auth-guard.guard';

const routes: Routes = [
  {path: 'list/persons', component: ListComponent, canActivate:[AuthGuard]},

  { path: '', redirectTo: '/lobby', pathMatch: 'full' },
  { path: '***', redirectTo: '/lobby', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSideRoutingModule { }
