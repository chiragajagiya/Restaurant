import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';
import { Category } from './category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  ServerUrl = 'http://localhost:27032/';
  errorData: {};

  constructor(private http: HttpClient) { }


  getblogs() {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/Blogposts').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedblogs() {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/FeaturedBlogs').pipe(
      catchError(this.handleError)
    );
  }

  getBlog(id: number) {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/blogs/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRecentblogs() {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/Recents').pipe(
      catchError(this.handleError)
    );
  }

  getcategories() {
    return this.http.get<Category>(this.ServerUrl + 'api/categories').pipe(
      catchError(this.handleError)
    );

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Server Not Running',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}