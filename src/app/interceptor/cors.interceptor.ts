import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        'Access-Control-Allow-Headers': 'X-Requested-With, Origin, Content-Type, Accept, Authorization',
        'Origin': 'https://newsapi.org',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
        "Content-Type": "application/json"
      }
    });
    return next.handle(newRequest);
  }
}
