import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Product } from '../_model/product.model';
import { ImageprocessingService } from './imageprocessing.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product>{

  constructor(private productService:ProductService,private imageprocessingService:ImageprocessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {

    const id = route.paramMap.get('productId');
    if (id) {
      return this.productService.getProductDetailsById(id).pipe(
        map(p=>this.imageprocessingService.createImages(p))
      )
    } else {
        return of(this.getProductDetails());
    }
  }



  getProductDetails() {
    return {
      productId:0,
      productName: '',
      productDescription: '',
      productDiscountedPrice: 0,
      productActualPrice: 0,
      productImages: []
    }
  }



}
