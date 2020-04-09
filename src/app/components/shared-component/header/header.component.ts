import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  expandFlag = true;
  @Output() expandEvt = new EventEmitter<boolean>();
  ngOnInit() {
  }
  toggle(){
    if(this.expandFlag){
      this.expandFlag = false;
    }else{
      this.expandFlag = true;
    }
    this.expandEvt.emit(this.expandFlag);
  }

}
