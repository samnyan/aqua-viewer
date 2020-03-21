import {Component, OnInit} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {OngekiCard} from '../model/OngekiCard';
import {OngekiCharacter} from '../model/OngekiCharacter';
import {PlayerCard} from '../model/PlayerCard';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {OngekiSkill} from '../model/OngekiSkill';

@Component({
  selector: 'app-ongeki-card',
  templateUrl: './ongeki-card.component.html',
  styleUrls: ['./ongeki-card.component.css']
})
export class OngekiCardComponent implements OnInit {

  host = environment.assetsHost;

  cardList: Observable<PlayerCard[]>;

  currentPage = 1;
  totalElements = 0;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private dbService: NgxIndexedDBService
  ) {
  }

  ngOnInit() {
    this.load(this.currentPage);
  }

  load(page: number) {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId).set('page', String(page - 1));
    this.cardList = this.api.get('api/game/ongeki/card', param).pipe(
      tap(
        data => {
          this.totalElements = data.totalElements;
          this.currentPage = page;
        }
      ),
      map(
        data => {
          data.content.forEach(x => {
            this.dbService.getByID<OngekiCard>('ongekiCard', x.cardId).then(
              y => {
                x.cardInfo = y;
                this.dbService.getByID<OngekiCharacter>('ongekiCharacter', y.charaId).then(
                  z => x.characterInfo = z
                );
                this.dbService.getByID<OngekiSkill>('ongekiSkill', y.skillId).then(
                  z => x.skillInfo = z
                );
              }
            );
          });
          return data.content;
        },
        error => this.messageService.notice(error.statusText)
      )
    );
  }

}
