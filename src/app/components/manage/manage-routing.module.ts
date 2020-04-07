import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageComponent} from './manage.component';
import {PrinterComponent} from './printer/printer.component';
import {FilesComponent} from './files/files.component';
import {EmailJobsComponent} from './email-jobs/email-jobs.component';

const routes: Routes = [
  {
    path : '', component: ManageComponent,
    children :[
      {
        path: '',
        redirectTo: 'printer'
      },
      {
        path :'printer',
        component: PrinterComponent
      },
      {
        path :'files',
        component : FilesComponent
      },
      {
        path : 'email-jobs',
        component : EmailJobsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
