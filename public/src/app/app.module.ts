import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MasterDataComponent } from './main/master-data/master-data.component';
import { CreateProductComponent } from './main/create-product/create-product.component';
import { ListMasterDataComponent } from './main/master-data/list-master-data/list-master-data.component';
import { ProductSalesDataComponent } from './main/master-data/product-sales-data/product-sales-data.component';
import { ProductService } from './main/product.service';
import { SaleService } from './main/sale.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MasterDataComponent,
    CreateProductComponent,
    ListMasterDataComponent,
    ProductSalesDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService, SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
