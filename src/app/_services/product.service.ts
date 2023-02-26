import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API = 'http://localhost:8080';


  constructor(private httpClient:HttpClient) { }


  public addProduct(product:FormData){
    return this.httpClient.post(this.API+"/addNewProduct",product);
  }


  public getAllProducts(){
    return this.httpClient.get<Product[]>(this.API+"/getAllProducts");
  }

  public getProductDetailsById(productId:any){
    return this.httpClient.get<Product>(this.API+"/getProductDetailsById/"+productId);
  }



  public deleteProduct(productId:number){
    return this.httpClient.delete(this.API+"/deleteProduct/"+productId);
  }


}
