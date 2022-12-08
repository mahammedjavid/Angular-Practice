import { DoCheck, Inject, Injectable } from '@angular/core';
import { RouteConfig } from './Routeconfig';
import { injectionToken } from './config.service';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class GlobalService {

  constructor(@Inject(injectionToken) private token: RouteConfig, private http: HttpClient) {
    console.log(this.token)
    console.log('global service')
  }
  getTodoData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }


}
