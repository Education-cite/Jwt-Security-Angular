import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowproductimagesDialogComponent } from '../showproductimages-dialog/showproductimages-dialog.component';
import { Product } from '../_model/product.model';
import { ImageprocessingService } from '../_services/imageprocessing.service';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice','productActualPrice','Images','Edit','Delete'];
  productDetails: Product[] = []
  constructor(private productservice: ProductService,public dialog: MatDialog,private imageProcecessingService:ImageprocessingService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productservice.getAllProducts()
    .pipe(
      map((products: Product[]) => products.map((product: Product) => this.imageProcecessingService.createImages(product)))
    )
    .subscribe(
      (data: Product[]) => {
        this.productDetails = data;
      },
      (error) => {
        console.error("Error loading data: ", error);
      }
    );
  }


    public deleteProduct(productId:any){
      this.productservice.deleteProduct(productId).subscribe((data:any)=>{
        alert("Product deleted successfully")
        this.getAllProducts();
      },(error)=>{
        alert("loading data error!!")
      });
    }

    showimages(product:Product){
      console.log(product)
    this.dialog.open(ShowproductimagesDialogComponent,{
      data:{
        images:product.productImages
      },
      height:'300px',
      width:'600px'
    });
    }


}
