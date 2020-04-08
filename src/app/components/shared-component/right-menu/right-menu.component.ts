import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  isSetting = false;
  isInfo = false; 
  constructor() { }

  ngOnInit() {
  }
  movetoSetting(){
    if(this.isSetting){
      this.isSetting = false;
    }else{
      this.isSetting = true;
      this.isInfo = false;
    }
  }
  movetoInfo(){
    if(this.isInfo){
      this.isInfo = false;
    }else{
      this.isInfo = true;
      this.isSetting = false;
    }
  }

}
