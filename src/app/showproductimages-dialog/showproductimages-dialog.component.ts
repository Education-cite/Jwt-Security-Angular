import { FileHandle } from '../_model/file-handle.model';
import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-showproductimages-dialog',
  templateUrl: './showproductimages-dialog.component.html',
  styleUrls: ['./showproductimages-dialog.component.css']
})
export class ShowproductimagesDialogComponent implements OnInit{

  constructor( @Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages(){
    console.log(this.data);
  }

}
