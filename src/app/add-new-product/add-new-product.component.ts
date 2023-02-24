import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit{

constructor(private productservice:ProductService){}

product:Product={
  productName:'',
  productDescription:'',
  productDiscountedPrice:0,
  productActualPrice:0
}

  ngOnInit(): void {

  }

  addProduct(productForm:NgForm){
    this.productservice.addProduct(this.product).subscribe((data)=>{
      alert("Product added successfully")
      productForm.reset();
    },(error)=>{
      alert("Loading data error!!")
    })
  }


}
