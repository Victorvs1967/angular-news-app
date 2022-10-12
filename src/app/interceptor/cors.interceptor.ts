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
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Origin': ' https://newsapi.org/v2/top-headlines',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json"
      }
    });
    return next.handle(request);
  }
}
