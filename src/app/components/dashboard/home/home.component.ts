import { Component, OnInit } from '@angular/core';
import {AllSetupService} from '../../../services/all-setup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dashboardCont : HomeTilesData;
  isLoaded = false;
  constructor(private service : AllSetupService) { }

  ngOnInit() {
    this.getTilesListData();
  }

  getTilesListData(){
    this.service.tilesListService().subscribe(data =>{
      if(data) {
        this.dashboardCont = data;
        this.isLoaded = true;
      }
    });
    
  }

}
export interface ListItem {
  type: string;
  iconClass: string;
  heading: string;
  details: string;
  colorCode: string;
  iconColor: string;
}

export interface TilesList {
  title: string;
  count: string;
  countLable: string;
  listItems: ListItem[];
}

export interface HomeTilesData {
  tiles_list: TilesList[];
}
