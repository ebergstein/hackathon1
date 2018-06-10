import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class SaleService {

  constructor(private _http: Http) { }

  getSale(id){
    return this._http.get('/sales/' + id)
      .map( (response: Response) => response.json())
      .toPromise();
  }

  addSale(sale){
    return this._http.post('/sales/new', sale)
      .map( (response: Response) => response.json())
      .toPromise();
  }

  deleteSale(saleId){
    var temp = {id: saleId};
    return this._http.post('/sales/delete', temp)
      .map( (response: Response) => response.json())
      .toPromise();
  }

}
