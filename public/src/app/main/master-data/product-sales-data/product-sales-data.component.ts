import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../sale.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-sales-data',
  templateUrl: './product-sales-data.component.html',
  styleUrls: ['./product-sales-data.component.css']
})
export class ProductSalesDataComponent implements OnInit {

  errors: Array<any>;
  sale: any;

  constructor(private _saleService: SaleService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.getSale(param.id);
    })
  }

  getSale(id){
    this._saleService.getSale(id)
      .then( (sale) => this.sale = sale)
      .catch( (err) => {
        this.errors = err._body.split(",")
      })
  }

}
