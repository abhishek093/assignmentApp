import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, LeftMenuComponent, RightMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, LeftMenuComponent, RightMenuComponent
  ]
})
export class SharedComponentModule { }
