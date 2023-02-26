import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice','productActualPrice'];
  productDetails: Product[] = []
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productservice.getAllProducts().subscribe((data: Product[]) => {
      this.productDetails = data;
    }, (error) => {
      console.log("loading data error!!");

    });
  }







}