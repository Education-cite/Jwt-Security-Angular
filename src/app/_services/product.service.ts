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


}