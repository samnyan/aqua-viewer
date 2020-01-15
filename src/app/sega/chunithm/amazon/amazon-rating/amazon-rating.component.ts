import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../message.service';
import {ApiService} from '../../../../api.service';
import {HttpParams} from '@angular/common/http';
import {AuthenticationService} from '../../../../auth/authentication.service';

@Component({
  selector: 'app-amazon-rating',
  templateUrl: './amazon-rating.component.html',
  styleUrls: ['./amazon-rating.component.css']
})
export class AmazonRatingComponent implements OnInit {

  topRating: RatingItem[] = [];
  recentRating: RatingItem[] = [];
  topTotal = 0;
  recentTotal = 0;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId);
    this.api.get('api/game/chuni/amazon/rating', param).subscribe(
      data => {
        this.topRating = data;
        if (this.topRating.length === 0) {
          this.messageService.notice('No Data');
        }
        this.topRating.forEach(item => this.topTotal += item.rating);
      },
      error => this.messageService.notice(error.statusText)
    );

    this.api.get('api/game/chuni/amazon/rating/recent', param).subscribe(
      data => {
        this.recentRating = data;
        if (this.recentRating.length === 0) {
          this.messageService.notice('No Data');
        }
        this.recentRating.forEach(item => this.recentTotal += item.rating);
      },
      error => this.messageService.notice(error.statusText)
    );
  }

}

export interface RatingItem {
  musicId: number;
  musicName: string;
  artistName: string;
  level: number;
  score: number;
  ratingBase: number;
  rating: number;
}
