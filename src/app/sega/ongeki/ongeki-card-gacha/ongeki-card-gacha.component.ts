import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {OngekiCard} from '../model/OngekiCard';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ongeki-card-gacha',
  templateUrl: './ongeki-card-gacha.component.html',
  styleUrls: ['./ongeki-card-gacha.component.css'],
  animations: [
    trigger('control', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 0.5s ease-out',
          style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('1s ease-in',
          style({opacity: 0}))
      ])
    ])
  ]
})
export class OngekiCardGachaComponent implements OnInit, AfterViewInit {

  @ViewChild('card_animation', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  host = environment.assetsHost;
  assets = environment.assetsHost + 'ongeki/gameUi/';

  isStarted = false;

  rarity: number[] = [];
  rList: OngekiCard[] = [];
  srList: OngekiCard[] = [];
  ssrList: OngekiCard[] = [];

  cardResultList: CardResult[] = [];
  currentShowedIndex = 0;

  submitSuccessful = 0;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private dbService: NgxIndexedDBService
  ) {
  }

  ngOnInit() {
    this.rarity = Array(70).fill(1);
    this.rarity = this.rarity.concat(Array(25).fill(2));
    this.rarity = this.rarity.concat(Array(5).fill(3));
    this.dbService.getAll<OngekiCard>('ongekiCard').then(
      x => {
        x.forEach(y => {
          switch (y.rarity) {
            case 'R':
              this.rList.push(y);
              break;
            case 'SR':
              this.srList.push(y);
              break;
            case 'SSR':
              this.ssrList.push(y);
              break;
          }
        });
      }
    );

  }

  ngAfterViewInit() {
    // const ctx = this.canvas.nativeElement.getContext('2d');
    //
    // const img = new Image();
    // img.onload = () => ctx.drawImage(img, 0, 0);
    // img.src = this.assets + 'UI_CMN_CardGet_NEW.png';
  }

  start(count: number) {
    this.cardResultList = [];
    this.currentShowedIndex = 0;
    this.isStarted = true;
    this.submitSuccessful = 0;

    for (let i = 0; i < count; i++) {
      const rarity = this.rarity[Math.floor(Math.random() * 99)];
      console.log('rarity: ' + rarity);
      let card;
      switch (rarity) {
        case 1:
          card = this.rList[Math.floor(Math.random() * this.rList.length)];
          break;
        case 2:
          card = this.srList[Math.floor(Math.random() * this.srList.length)];
          break;
        case 3:
          card = this.ssrList[Math.floor(Math.random() * this.ssrList.length)];
          break;
      }
      console.log('card: ' + JSON.stringify(card));
      this.cardResultList.push({
        show: false,
        card
      });
    }
    this.submitCardData();
    return;
  }

  open() {
    console.log('clicked');
    if (this.currentShowedIndex < this.cardResultList.length) {
      const card = this.cardResultList[this.currentShowedIndex];
      card.show = true;
      this.currentShowedIndex = this.currentShowedIndex + 1;
    } else {
      this.isStarted = false;
    }
  }

  submitCardData() {
    const aimeId = this.auth.currentUserValue.extId;
    this.cardResultList.forEach(x => {
      this.api.post('api/game/ongeki/card', {
        aimeId,
        cardId: x.card.id
      }).subscribe(
        data => {
          this.submitSuccessful = this.submitSuccessful + 1;
          return;
        },
        error => this.messageService.notice(error)
      );
    });
  }
}

interface CardResult {
  show: boolean;
  card: OngekiCard;
}
