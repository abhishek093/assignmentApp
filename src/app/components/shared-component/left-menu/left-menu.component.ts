import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../../services/shared-data.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnChanges {
  menuItems = [];
  @Input() isExpand$;
  isExpand = true;
  manageExpand = true;
  dashActive = false;
  printerActive = false;
  filesActive = false;
  jobsActive = false;
  alertActive = false;
  constructor(private router : Router, private routes : ActivatedRoute) { 
    
    
  }

  ngOnInit() {
    const url = window.location.href.split('/');
    const lastSegmant = url[url.length - 1];
    console.log('url :', url);
    if(lastSegmant === 'dashboard'){
      this.dashActive = true;
      this.printerActive = false;
      this.filesActive = false;
      this.jobsActive = false;
      this.alertActive = false;
    }else if(lastSegmant === 'printer'){
      this.dashActive = false;
      this.printerActive = true;
      this.filesActive = false;
      this.jobsActive = false;
      this.alertActive = false;
    }else if(lastSegmant === 'files'){
      this.dashActive = false;
      this.printerActive = false;
      this.filesActive = true;
      this.jobsActive = false;
      this.alertActive = false;
    }else if(lastSegmant === 'email-jobs'){
      this.dashActive = false;
      this.printerActive = false;
      this.filesActive = false;
      this.jobsActive = true;
      this.alertActive = false;
    }else if(lastSegmant === 'alerts'){
      this.dashActive = false;
      this.printerActive = false;
      this.filesActive = false;
      this.jobsActive = false;
      this.alertActive = true;
    }
  }
  ngOnChanges(){
    if(this.isExpand$ != undefined){
      this.isExpand = this.isExpand$;
      console.log('isexpand flase:', this.isExpand$);
    }
  }
  // menuClick(name, child, evt){
  //   if(child && child != null){
  //     this.router.navigate(['/'+name+'/'+child]);
  //   }else{
  //     this.router.navigate(['/'+name]);
  //   }
  //   evt.stopPropagation();
  // }
  // demo(flag){
  //   if(flag){
  //     this.isExpand = false;
  //   }else{
  //     this.isExpand = true;
  //   }
  // }
  manangeCollapse(){
    this.manageExpand = false;
  }
  manangeExpand(){
    this.manageExpand = true;
  }
  gotoDashboard(){
    this.router.navigate(['/dashboard']);
    this.dashActive = true;
    this.printerActive = false;
    this.filesActive = false;
    this.jobsActive = false;
    this.alertActive = false;
  }
  gotoPrinter(){
    this.router.navigate(['/manage/printer']);
    this.dashActive = false;
    this.printerActive = true;
    this.filesActive = false;
    this.jobsActive = false;
    this.alertActive = false;
  }
  gotoFiles(){
    this.router.navigate(['/manage/files']);
    this.dashActive = false;
    this.printerActive = false;
    this.filesActive = true;
    this.jobsActive = false;
    this.alertActive = false;
  }
  gotoEmailJobs(){
    this.router.navigate(['/manage/email-jobs']);
    this.dashActive = false;
    this.printerActive = false;
    this.filesActive = false;
    this.jobsActive = true;
    this.alertActive = false;
  }
  gotoAlerts(){
    this.router.navigate(['/alerts']);
    this.dashActive = false;
    this.printerActive = false;
    this.filesActive = false;
    this.jobsActive = false;
    this.alertActive = true;
  }
}
