import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontComponent } from './components/front/front.component';
import {Routes, RouterModule} from "@angular/router";
import {ProductServiceService} from "./services/product-service.service";


const routes: Routes = [
  { path: 'category/:id', component: ProductsListComponent},
  {path: 'category', component: ProductsListComponent},
  {path: 'products', component: ProductsListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    FrontComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,

    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
