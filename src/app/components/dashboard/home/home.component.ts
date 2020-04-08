import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dashboardCont = [];
  constructor() { }

  ngOnInit() {
    this.dashboardCont =  [
      {
        "title": "Printer Management",
        "count": "10",
        "countLable": "Total Printer",
        "listItems": [
          {
            "type": "circle",
            "iconClass": "check",
            "heading": "5",
            "details": "Ready",
            "colorCode": "#0f0"
          },
          {
            "type": "circle",
            "iconClass": "locked",
            "heading": "5",
            "details": "Locked",
            "colorCode": "#f00"
          }
        ]
      },
      {
        "title": "Email Job Management",
        "count": "18",
        "countLable": "Total Email Jobs",
        "listItems": [
          {
            "type": "circle",
            "iconClass": "check",
            "heading": "8",
            "details": "Enabled",
            "colorCode": "#0f0"
          },
          {
            "type": "circle",
            "iconClass": "banned",
            "heading": "10",
            "details": "Disabled",
            "colorCode": "#f00"
          }
        ]
      },
      {
        "title": "Alerts",
        "count": "5",
        "countLable": "Total Alerts",
        "listItems": [
          {
            "type": "rectangle",
            "iconClass": "check",
            "heading": "3",
            "details": "Critical",
            "colorCode": "#0f0"
          },
          {
            "type": "rectangle",
            "iconClass": "check",
            "heading": "1",
            "details": "Major",
            "colorCode": "#f00"
          }
        ]
      },
      {
        "title": "File Management",
        "count": "5",
        "countLable": "Total Files",
        "listItems": [
          {
            "type": "circle",
            "iconClass": "check",
            "heading": "5",
            "details": "Files",
            "colorCode": "#0f0"
          }
        ]
      }
    ]
  }

}
