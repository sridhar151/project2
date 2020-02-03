import { Tab3Component } from './tab3/tab3.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab1Component } from './tab1/tab1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"home",component:Tab1Component},
  {path:"about",component:Tab2Component},
  {path:"courses",component:Tab3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
