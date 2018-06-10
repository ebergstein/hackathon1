import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProducts(){
    return this._http.get('/products')
      .map( (response: Response) => response.json())
      .toPromise();
  }

  addProduct(product){
    return this._http.post('/products/new', product)
      .map( (response: Response) => response.json())
      .toPromise();
  }
  deleteProduct(productId){
    var temp = {id: productId};
    return this._http.post('/products/delete', temp)
      .map( (response: Response) => response.json())
      .toPromise();
  }

}
