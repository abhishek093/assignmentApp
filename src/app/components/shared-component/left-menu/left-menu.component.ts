import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataService} from '../../../services/shared-data.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnChanges {
  @Input() items; 
  menuItems = [];
  @Input() isExpand$;
  isExpand = true;
  manageExpand = true;
  constructor(private router : Router, private sharedData : SharedDataService) { }

  ngOnInit() {
    this.sharedData.getExpandDetails().subscribe(data =>{
      if(data){
        // console.log('isexpand flase:', data);
        
      }
    })
  }
  ngOnChanges(){
    if(this.items){
      this.menuItems = this.items;
      console.log('menu item:', this.menuItems);
      
    }
    if(this.isExpand$ != undefined){
      this.isExpand = this.isExpand$;
      console.log('isexpand flase:', this.isExpand$);
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
  demo(flag){
    if(flag){
      this.isExpand = false;
    }else{
      this.isExpand = true;
    }
  }
  manangeCollapse(){
    this.manageExpand = false;
  }
  manangeExpand(){
    this.manageExpand = true;
  }
}
