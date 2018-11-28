// General functionality:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components and Services:
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component'

const appRoutes:Routes = [
  {path: 'products', component: ProductListComponent },
  {path: 'product/:id', component: ProductPageComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({ 
  declarations: [ // Components, Directives, and Pipes that belong to this module
    AppComponent, // root component
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [ // ngModules used for general functionality
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent] // only in root module
})
export class AppModule {
  // can be an empty class
  // but must exist since main.ts is bootstrapping it (so change name there if renaming here)
 }
