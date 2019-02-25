import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?: any
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    let observable = this._http.getProducts()
    observable.subscribe(data => {
      this.products = data['data']
    })
  }

}
