import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product?: any
  @Output() deletedProduct = new EventEmitter<string>()
  editing = false
  constructor(private _http: HttpService) { }
  
  ngOnInit() {
    console.log(this.product)
  }
  contactParent() {
    this.deletedProduct.next("deleted")
  }
  delete(id) {
    let observable = this._http.deleteProduct(id)
    observable.subscribe(data => {
      console.log(data)
      this.contactParent()
      this.editing = false
    })
  }
  editClicked() {
    this.editing = true
  }

}
