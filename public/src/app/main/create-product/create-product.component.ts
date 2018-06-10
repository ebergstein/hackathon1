import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  errors: Array<any>;

  constructor(private _productService: ProductService, private _saleService: SaleService, private _router: Router) { }

  ngOnInit() {
  }

  createProduct(formData){
    this._productService.addProduct(formData.value)
      .then( (product) => this.createSale(formData))
      .catch( (err) => {
        this.errors = err._body
      })
  }

  createSale(formData){
    this._saleService.addSale(formData.value)
      .then( (product) => this._router.navigate(['/main/data/products']))
      .catch( (err) => {
        this.errors = err._body
      })
  }

}
