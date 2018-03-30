import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { DataService } from './global-data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable()
export class AddHttpHeaderInterceptor implements HttpInterceptor {

  constructor(private router: Router, private globalData: DataService) { }

  intercept(
    request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.globalData.authdata;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const clonedReq = request.clone({headers});

    return next
      .handle(clonedReq)
      .do((ev: HttpEvent<any>) => {
        
      })
      .catch(error => {
       
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 400:
              return Observable.throw(error.error);
            case 401:
              Swal("Access denied", "You don't have the right permission to use this API", "error");
              return Observable.throw(error)
            case 403:
              Swal("Access denied", "You don't have the right permission to use this API", "error");
              this.router.navigate(['/']);
              return Observable.throw(error); 
            case 500:
              Swal("Internal error", "please try in a few minutes", "error");
              return Observable.throw(error);
            case 404:
              Swal("Error 404", "Service not found", "error");
              return Observable.throw(error);
          }
          console.log('Processing http error', error);
        }
      
        return Observable.throw(error);
      });
  }
}


