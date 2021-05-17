import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit { // BlogComponent
  posts;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9000/aliens/") // get data from this link
    .subscribe((data)=>this.displayPost(data));    // set response object to posts variable
  }

  displayPost(data){ 
    this.posts = data;
  }

}
