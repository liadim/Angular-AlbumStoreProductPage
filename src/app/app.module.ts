// General functionality:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components and Services:
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service'

@NgModule({ 
  declarations: [ // Components, Directives, and Pipes that belong to this module
    AppComponent, // root component
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [ // ngModules used for general functionality
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ // Services to be available in the injector of this module and its children
    ProductService // this is done in a different way since Angular 6
  ],
  bootstrap: [AppComponent] // only in root module
})
export class AppModule {
  // can be an empty class
  // but must exist since main.ts is bootstrapping it (so change name there if renaming here)
 }
