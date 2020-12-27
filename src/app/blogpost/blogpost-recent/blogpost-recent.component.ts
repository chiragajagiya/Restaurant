import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs: Blogpost;
  error: {};

  constructor(private blogspotService: BlogpostService) { }

  ngOnInit(): void {

    this.blogspotService.getRecentblogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error

    )
  }

}
