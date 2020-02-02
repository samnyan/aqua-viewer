import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../api.service';
import {AuthenticationService} from '../../../../auth/authentication.service';
import {MessageService} from '../../../../message.service';
import {HttpParams} from '@angular/common/http';
import {AmazonPlayLog} from '../model/AmazonPlayLog';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {ChuniMusic} from '../model/ChuniMusic';

@Component({
  selector: 'app-amazon-recent',
  templateUrl: './amazon-recent.component.html',
  styleUrls: ['./amazon-recent.component.css']
})
export class AmazonRecentComponent implements OnInit {

  recent: AmazonPlayLog[] = [];

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private dbService: NgxIndexedDBService
  ) {
  }

  ngOnInit() {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId);
    this.api.get('api/game/chuni/amazon/recent', param).subscribe(
      data => {
        data.forEach(x => {
          this.recent.push(x);
        });
        this.recent.forEach(x => {
          this.dbService.getByID<ChuniMusic>('chuniMusic', x.musicId).then(
            m => x.songInfo = m
          );
        });
      },
      error => this.messageService.notice(error.statusText)
    );
  }

}
