import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  // before enter into a page
  // whether user authenticated, or authorized, or based on application state
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const result = window.confirm("Do you want to edit the data?")
      // return true, mean user can visit the page
      // return false, user cannot visit the page
      return result;
  }
  
}
