import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {SharedComponentModule} from './components/shared-component/shared-component.module';
import {AllSetupService} from './services/all-setup.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AllSetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
