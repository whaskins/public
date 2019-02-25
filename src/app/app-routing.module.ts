import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, children: [
    {path: 'edit', component: EditComponent}

  ]},
  {path: 'new', component: NewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
