import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_model/file-handle.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ImageprocessingService {

  constructor(private sanitizar:DomSanitizer) { }

  public createImages(product: Product) {
    const productImages: any[] = product.productImages;
    if (!productImages) {
      return product;
    }
    const productImagesToFileHandle: FileHandle[] = [];
    for (let i = 0; i < productImages.length; i++) {
      const imageFileData = productImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });
      const finalFileHandle:FileHandle = {
        file:imageFile,
        url:this.sanitizar.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      productImagesToFileHandle.push(finalFileHandle);
    }
    product.productImages=productImagesToFileHandle;
    return product;
  }
  
  public dataURItoBlob(picBytes: any, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }


}
