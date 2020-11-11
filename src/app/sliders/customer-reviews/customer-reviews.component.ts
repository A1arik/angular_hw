import { Component, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/models/reviews.model';
import { ReviewsService } from '../../services/rewievs.service';
@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css'],
  providers: [ReviewsService]
})
export class CustomerReviewsComponent implements OnInit {

  constructor(private serv: ReviewsService) { this.Reviews = new Array<ReviewModel>(); }

  Reviews: Array<ReviewModel>;

  ngOnInit(): void {
    this.serv.read().subscribe(
      (data: ReviewModel[]) => {this.Reviews = data; },
      error => {console.log (error); }
    );
  }

}
