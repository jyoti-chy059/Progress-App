import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BarData } from './bar-data'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBarData(){
    return this.http.get<BarData>('http://pb-api.herokuapp.com/bars');
  }
}
