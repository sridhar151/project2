import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {
  xyz: any = " "

  constructor() { }

  ngOnInit() {
  }
 TAB2(){
   console.log("hai...friends",this.xyz)

 }
}
