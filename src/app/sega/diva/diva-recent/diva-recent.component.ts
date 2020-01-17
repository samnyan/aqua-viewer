import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {HttpParams} from '@angular/common/http';
import {DivaPlayLog} from '../model/DivaPlayLog';
import {DivaMusicDbService} from '../diva-music-db.service';
import {Difficulty, Edition, Result} from '../model/DivaPvRecord';
import {DivaModuleDbService} from '../diva-module-db.service';

@Component({
  selector: 'app-diva-recent',
  templateUrl: './diva-recent.component.html',
  styleUrls: ['./diva-recent.component.css']
})
export class DivaRecentComponent implements OnInit {

  edition = Edition;
  difficulty = Difficulty;
  result = Result;

  playLogList: DivaPlayLog[] = [];

  currentPage = 0;
  totalPages = 0;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private musicDb: DivaMusicDbService,
    private moduleDb: DivaModuleDbService
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
          x.modules = x.modules === '0,0,0' ? '0,-1,-1' : x.modules;
          const moduleIds = x.modules.split(',');
          console.log(moduleIds);
          x.modulesInfo = [
            this.moduleDb.getModule(Number(moduleIds[0])),
            this.moduleDb.getModule(Number(moduleIds[1])),
            this.moduleDb.getModule(Number(moduleIds[2]))
          ];
          this.playLogList.push(x);
        });
      },
      error => this.messageService.notice(error)
    );
  }

}
