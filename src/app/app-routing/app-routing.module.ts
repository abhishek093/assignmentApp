import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: '../components/dashboard/dashboard.module#DashboardModule' },
  { path: 'manage', loadChildren: '../components/manage/manage.module#ManageModule' },
  { path: 'alerts', loadChildren: '../components/alerts/alerts.module#AlertsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
