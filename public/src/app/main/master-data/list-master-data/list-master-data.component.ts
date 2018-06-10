import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { SaleService } from '../../sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-master-data',
  templateUrl: './list-master-data.component.html',
  styleUrls: ['./list-master-data.component.css']
})
export class ListMasterDataComponent implements OnInit {

  errors: Array<any>;
  products: Array<any>;

  constructor(private _productService: ProductService, private _saleService: SaleService, private _router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts()
      .then( (products) => this.products = products)
      .catch( (err) => {
        this.errors = err._body.split(",")
      })
  }

  deleteProduct(id){
    console.log(id)
    this._productService.deleteProduct(id)
      .then( (products) => this.deleteSale(id))
      .catch( (err) => {
        this.errors = err._body.split(",")
      })
  }

  deleteSale(id){
    this._saleService.deleteSale(id)
      .then( (products) => this.getProducts())
      .catch( (err) => {
        this.errors = err._body.split(",")
      })
  }

}
