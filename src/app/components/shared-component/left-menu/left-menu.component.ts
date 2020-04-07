import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnChanges {
  @Input() items; 
  menuItems = [];
  constructor(private router : Router) { }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.items){
      this.menuItems = this.items;
      console.log('menu item:', this.menuItems);
      
    }
  }
  menuClick(name, child, evt){
    if(child && child != null){
      this.router.navigate(['/'+name+'/'+child]);
    }else{
      this.router.navigate(['/'+name]);
    }
    evt.stopPropagation();
  }

}
