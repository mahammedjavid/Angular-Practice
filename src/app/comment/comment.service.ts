import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { IComment } from '../type';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
