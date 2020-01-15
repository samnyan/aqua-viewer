import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {HttpParams} from '@angular/common/http';
import {DivaPlayLog} from '../model/DivaPlayLog';
import {DivaMusicDbService} from '../diva-music-db.service';

@Component({
  selector: 'app-diva-recent',
  templateUrl: './diva-recent.component.html',
  styleUrls: ['./diva-recent.component.css']
})
export class DivaRecentComponent implements OnInit {

  playLogList: DivaPlayLog[] = [];

  currentPage = 0;
  totalPages = 0;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private musicDb: DivaMusicDbService
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    const pdId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('pdId', pdId).set('page', String(this.currentPage));
    this.api.get('api/game/diva/playLog', param).subscribe(
      data => {
        if (data.content.length === 0) {
          this.messageService.notice('No more record');
          return;
        }
        this.currentPage = data.page + 1;
        this.totalPages = data.totalPages;
        data.content.forEach(x => {
          x.songInfo = this.musicDb.getMusicDb().get(x.pvId);
          this.playLogList.push(x);
        });
      },
      error => this.messageService.notice(error)
    );
  }

}
