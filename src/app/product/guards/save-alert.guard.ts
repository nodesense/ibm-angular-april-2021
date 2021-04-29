import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (component.productForm.pristine) {
        return true; // user can leave the page
      }

      const result = window.confirm("Data is not saved, want to leave the page?")
      return result;
      // return true; user can leave the page
      // return false, user shall stay in the same page
  
    }
  
}
