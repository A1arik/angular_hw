import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ReviewModel } from '../models/reviews.model';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewsService{


  constructor(private http: HttpClient){ }
  apiUrl = 'http://10.6.2.2:4000/apiReviews';

  // tslint:disable-next-line:typedef
  create(re: ReviewModel){
    console.log('Send');
    console.log(JSON.stringify(re));
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, JSON.stringify(re), {headers: myHeaders});
  }

  // tslint:disable-next-line:typedef
  read() {
    return this.http.get(this.apiUrl);
  }

  update(entity: ReviewModel): any{
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.apiUrl, JSON.stringify(entity), {headers: myHeaders});
  }

  delete(id: number): any{
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
