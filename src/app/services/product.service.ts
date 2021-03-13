import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../category/category';
@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  path = 'http://localhost:3000/products';

  getProducts(categoryId:Category): Observable<Product[]> {
   
let newPath=this.path;
if(categoryId){
  newPath +="?categoryId="+categoryId;
}


    return this.httpClient.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel Bir Hata';
    }
    return throwError(errorMessage);
  }

  addProduct(product:Product):Observable<Product>{

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Token'
  })
}
    return this.httpClient.post<Product>(this.path,product,httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
