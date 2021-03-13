import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms2Component,
    LoginComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
