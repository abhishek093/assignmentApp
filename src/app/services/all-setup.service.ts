import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HomeTilesData } from '../components/dashboard/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AllSetupService {
  constructor(private http: HttpClient) { }

  tilesListService() : Observable<HomeTilesData>{
    return this.http.get<HomeTilesData>('assets/jsons/mockData.json').pipe(
      retry(0),
      catchError(this.customError)
    );
  }
  customError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.title}`;
    } else {
      errorMessage = error.error.title;
    }
    return throwError(errorMessage);
  }
  
}
