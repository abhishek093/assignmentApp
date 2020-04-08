import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { PrinterComponent } from './printer/printer.component';
import { FilesComponent } from './files/files.component';
import { EmailJobsComponent } from './email-jobs/email-jobs.component';


@NgModule({
  declarations: [ManageComponent, PrinterComponent, FilesComponent, EmailJobsComponent],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
