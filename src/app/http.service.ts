import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get('/products')
  }
  getOneProduct(id) {
    return this._http.get('/products/' + id)
  }
  deleteProduct(id) {
    return this._http.delete('/products/' + id)
  }
  editProduct(id, data) {
    return this._http.put('/products/' + id, data)
  }
  createProduct(data) {
    return this._http.post('/products/', data)
  }
}
