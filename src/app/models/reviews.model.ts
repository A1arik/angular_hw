export class ReviewModel {
  _id: string;
  name: string;
  body: string;
  image: string = '/assets/main/main_feedback_reviews.png';
  date: Date = new Date(Date.now());
}
