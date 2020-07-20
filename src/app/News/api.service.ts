import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  API_KEY = '45809b9ffcb44c1abd4e46af67d85389';
  public getNews(){
   /* return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);*/
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=45809b9ffcb44c1abd4e46af67d85389')
  }
  /*get(url: string, options: {
    headers?: HttpHeaders;
    observe: 'response';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}): Observable<HttpResponse<Object>>;*/
}
