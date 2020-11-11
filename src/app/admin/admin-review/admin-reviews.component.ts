import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ReviewModel } from 'src/app/models/reviews.model';
import { ReviewsService } from '../../services/rewievs.service';

@Component({
  selector: 'app-admin-reviews',
  templateUrl: './admin-reviews.component.html',
  styleUrls: ['./admin-reviews.component.css'],
  providers:[ReviewsService]
})
export class AdminReviewsComponent implements OnInit {

  constructor(private serv: ReviewsService) {
    this.Reviews = new Array<ReviewModel>();
  }

  Reviews: Array<ReviewModel>;
  EditReview : ReviewModel;
  isNewRecord: boolean;
  statusMessage: string;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.serv.read().subscribe(
      (data: ReviewModel[]) => {this.Reviews = data; console.log(this.Reviews); },
      error => {console.log (error); }
    );
  }

  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;
  loadTemplate(re: ReviewModel){
    if (this.EditReview && this.EditReview._id === re._id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  addReview(): void {
    this.EditReview = new ReviewModel();
    this.Reviews.push(this.EditReview);
    this.isNewRecord = true;
  }

  saveReview(): void{
    if (this.isNewRecord) {
      // добавляем пользователя
      this.serv.create(this.EditReview).subscribe(data => {
        this.statusMessage = 'Данные успешно добавлены',
          this.load();
      });
      this.isNewRecord = false;
      this.EditReview = null;
    } else {
      // изменяем пользователя
      this.serv.update(this.EditReview).subscribe(data => {
        this.statusMessage = 'Данные успешно обновлены',
          this.load();
      });
      this.EditReview = null;
    }
  }

  cancel():void{
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.Reviews.pop();
      this.isNewRecord = false;
    }
    this.EditReview = null;
  }

}
