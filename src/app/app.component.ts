import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignmentApp';
  leftMenuData = [];
  loader = false; 
  ngOnInit(){
    this.leftMenuData = [
      {
        'name' : 'Dashboard',
        'iconName' : 'user',
        'routeName' : 'dashboard',
        'children' : []
      },
      {
        'name' : 'Manage',
        'iconName' : 'user',
        'routeName' : 'manage',
        'children' : [
          {
            'name' : 'Printer',
            'iconName' : 'user',
            'routeName' : 'printer'
          },
          {
            'name' : 'Files',
            'iconName' : 'user',
            'routeName' : 'files'
          },
          {
            'name' : 'Email Jobs',
            'iconName' : 'user',
            'routeName' : 'email-jobs'
          }
        ]
      },
      {
        'name' : 'Alerts',
        'iconName' : 'user',
        'routeName' : 'alerts',
        'children' : []
      }
    ]
    this.loader = true;
  }
}
