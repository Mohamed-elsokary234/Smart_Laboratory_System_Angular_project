import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  articles;
  

   newArticl1;
   newArticl2;
   newArticl3;
 

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];

      this.newArticl1 = this.articles.splice(0,3);
      this.newArticl2 = this.articles.splice(0,3);
      this.newArticl3 = this.articles.splice(0,3);
     /* console.log(this.newArticl);*/
    });
  }

}
