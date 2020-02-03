import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    console.log("hai...good evening all",this.productservice.abc)
  }
 TAB1(){
   console.log("hai...world")
  }
}
