import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  isExpand$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }
  getExpandDetails() : Observable<boolean>{
    return this.isExpand$.asObservable();
  }
  setExpandDetails(value : boolean){
    this.isExpand$.next(value);
  }
}
