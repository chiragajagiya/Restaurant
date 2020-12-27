import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {


  title = 'Blogs';
  blogs: Blogpost;
  error: {};

  constructor(
    private titleservice: Title, private blogpostService: BlogpostService
  ) { }

  ngOnInit(): void {
    this.titleservice.setTitle(this.title);

    this.blogpostService.getblogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }

}
