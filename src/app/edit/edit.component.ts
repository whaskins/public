import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productTitle = ""
  productPrice?: any
  imageURL?: any
  @Input() product
  @Output() editDone = new EventEmitter<string>()
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    console.log(this.product)
    this.productTitle = this.product['title']
    this.productPrice = this.product['price']
    this.imageURL = this.product['imageURL']
    console.log(this.productTitle)
  }
  done() {
    this.editDone.next("done")
  }
  update() {
    let observable = this._http.editProduct(this.product['_id'], {
      title: this.productTitle,
      price: this.productPrice,
      imageURL: this.imageURL
    })
    observable.subscribe(data => {
      console.log(data)
      this.done()
    })
  }

}
