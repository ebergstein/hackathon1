import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MasterDataComponent } from './main/master-data/master-data.component';
import { CreateProductComponent } from './main/create-product/create-product.component';
import { ListMasterDataComponent } from './main/master-data/list-master-data/list-master-data.component';
import { ProductSalesDataComponent } from './main/master-data/product-sales-data/product-sales-data.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', children: [
      { path: '', component: MainComponent },
      { path: 'data', children: [
        {path: '', redirectTo: '/main/data/products', pathMatch: 'full' },
        {path: 'products', component: ListMasterDataComponent},
        {path: 'sales/:id', component: ProductSalesDataComponent},
      ] },
      { path: 'create', component: CreateProductComponent },
    ] },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
