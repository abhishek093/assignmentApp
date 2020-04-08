import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SharedDataService} from '../../../services/shared-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedData : SharedDataService) { }
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
    // this.sharedData.setExpandDetails(this.expandFlag);
  }

}
