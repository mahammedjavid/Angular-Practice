import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from '../type';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})

export class CommentGuard implements Resolve<IComment>{
  constructor(private s: CommentService) {
    console.log("inside guard")
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.s.getData()
  }
}
