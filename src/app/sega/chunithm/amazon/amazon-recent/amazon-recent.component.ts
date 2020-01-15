import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../api.service';
import {AuthenticationService} from '../../../../auth/authentication.service';
import {MessageService} from '../../../../message.service';
import {HttpParams} from '@angular/common/http';
import {AmazonPlayLog} from '../model/AmazonPlayLog';
import {ChuniMusicDbService} from '../chuni-music-db.service';

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
    private musicDb: ChuniMusicDbService
  ) {
  }

  ngOnInit() {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId);
    this.api.get('api/game/chuni/amazon/recent', param).subscribe(
      data => {
        data.forEach(x => {
          x.songInfo = this.musicDb.getMusicDb().get(x.musicId);
          this.recent.push(x);
        });
      },
      error => this.messageService.notice(error.statusText)
    );
  }

}
