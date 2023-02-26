import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FileHandle } from '../_model/file-handle.model';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit{

constructor(private productservice:ProductService,private sanitizer:DomSanitizer,private activateRoute:ActivatedRoute){}
isNewProduct=true;
product:Product={
  productId:0,
  productName:'',
  productDescription:'',
  productDiscountedPrice:0,
  productActualPrice:0,
  productImages:[]
}

  ngOnInit(): void {
   this.product = this.activateRoute.snapshot.data['product']
   if(this.product&&this.product.productId){
    this.isNewProduct=false;
   }
  }

  addProduct(productForm:NgForm){
    const productData = this.prepareFormData(this.product);
    this.productservice.addProduct(productData).subscribe((data)=>{
      alert("Product added successfully")
      productForm.reset();
      this.product.productImages = []
    },(error)=>{
      alert("Loading data error!!")
    })
  }

  prepareFormData(product:Product):FormData{
    const formData = new FormData()
    formData.append(
      'product',
      new Blob([JSON.stringify(product)],{type:'application/json'})

    );

    for(let i=0; i < product.productImages.length; i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event:any){
    if(event.target.files){
      const file = event.target.files[0]

      const fileHandle:FileHandle = {
        file:file,
        url:this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.product.productImages.push(fileHandle)
    }
  }

  removeImages(i:number){
    this.product.productImages.splice(i,1);
  }

  fileDropped(fileHandle:FileHandle){
    this.product.productImages.push(fileHandle);
  }

}
