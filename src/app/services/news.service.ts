import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY = environment.apiKey;
  BASE_URL = environment.baseUrl;
  SOURCES = environment.sources;
  HEADLINE = environment.headline;
  EVERYTHING = environment.everything;
  RU = environment.ru;
  US = environment.us;

  constructor(private http: HttpClient) { }

  initSource() {
    return this.http.get(this.BASE_URL.concat(this.SOURCES.concat('en')).concat(this.API_KEY));
  }
  
  getArticlesById(source: string) {
    return this.http.get(this.BASE_URL.concat(this.HEADLINE.concat(source)).concat(this.US).concat(this.API_KEY));
  }

  initArticles() {
    return this.getArticlesById('techcrunch');
  }  

}
