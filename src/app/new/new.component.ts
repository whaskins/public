import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  productTitle?: String
  productPrice?: Number
  imageURL?: String
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  create() {
    let observable = this._http.createProduct({
      title: this.productTitle,
      price: this.productPrice,
      imageURL: this.imageURL
    })
    observable.subscribe(data => {
      console.log(data)
    })
  }

}
