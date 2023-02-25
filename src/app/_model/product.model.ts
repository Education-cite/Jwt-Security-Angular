import { FileHandle } from "./file-handle.model"

export interface Product{
    productName:String,
	 productDescription:String,
	 productDiscountedPrice:number,
	 productActualPrice:number,
	productImages:FileHandle[]
}