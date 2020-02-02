import {Injectable} from '@angular/core';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {ReplaySubject} from 'rxjs';
import {ApiService} from '../api.service';
import {DivaPv} from '../sega/diva/model/DivaPv';
import {ChuniMusic} from '../sega/chunithm/amazon/model/ChuniMusic';
import {DivaModule} from '../sega/diva/model/DivaModule';
import {DivaCustomize} from '../sega/diva/model/DivaCustomize';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  private divaPv = new ReplaySubject<string>();
  divaPvState = this.divaPv.asObservable();
  private divaModule = new ReplaySubject<string>();
  divaModuleState = this.divaModule.asObservable();
  private divaCustomize = new ReplaySubject<string>();
  divaCustomizeState = this.divaCustomize.asObservable();

  private chuniMusic = new ReplaySubject<string>();
  chuniMusicState = this.chuniMusic.asObservable();

  constructor(
    private dbService: NgxIndexedDBService,
    private api: ApiService
  ) {
  }

  load() {
    this.loadDivaPv();
    this.loadChuniMusic();
    this.loadDivaModule();
    this.loadDivaCustomize();
  }

  reload() {

  }

  loadDivaPv() {
    this.dbService.count('divaPv').then(
      pageCount => {
        if (pageCount > 0) {
          this.divaPv.next('OK');
        } else {
          this.divaPv.next('Downloading');
          this.api.get('api/game/diva/data/musicList').subscribe(
            data => {
              let errorFlag = false;
              data.forEach(x => {
                this.dbService.add<DivaPv>('divaPv', x).then(
                  () => '', error => {
                    console.error(error);
                    errorFlag = true;
                  }
                );
              });
              if (errorFlag) {
                this.divaPv.next('Error');
              } else {
                this.divaPv.next('OK');
              }
              this.divaPv.complete();
            },
            error => {
              console.error(error);
              this.divaPv.next('Error');
              this.divaPv.complete();
            }
          );
        }
      });
  }

  loadDivaModule() {
    this.dbService.count('divaModule').then(
      pageCount => {
        if (pageCount > 0) {
          this.divaModule.next('OK');
        } else {
          this.divaModule.next('Downloading');
          this.api.get('api/game/diva/data/moduleList').subscribe(
            data => {
              let errorFlag = false;
              data.forEach(x => {
                this.dbService.add<DivaModule>('divaModule', x).then(
                  () => '', error => {
                    console.error(error);
                    errorFlag = true;
                  }
                );
              });
              if (errorFlag) {
                this.divaModule.next('Error');
              } else {
                this.divaModule.next('OK');
              }
              this.divaModule.complete();
            },
            error => {
              console.error(error);
              this.divaModule.next('Error');
              this.divaModule.complete();
            }
          );
        }
      });
  }

  loadDivaCustomize() {
    this.dbService.count('divaCustomize').then(
      pageCount => {
        if (pageCount > 0) {
          this.divaCustomize.next('OK');
        } else {
          this.divaCustomize.next('Downloading');
          this.api.get('api/game/diva/data/customizeList').subscribe(
            data => {
              let errorFlag = false;
              data.forEach(x => {
                this.dbService.add<DivaCustomize>('divaCustomize', x).then(
                  () => '', error => {
                    console.error(error);
                    errorFlag = true;
                  }
                );
              });
              if (errorFlag) {
                this.divaCustomize.next('Error');
              } else {
                this.divaCustomize.next('OK');
              }
              this.divaCustomize.complete();
            },
            error => {
              console.error(error);
              this.divaCustomize.next('Error');
              this.divaCustomize.complete();
            }
          );
        }
      });
  }


  loadChuniMusic() {
    this.dbService.count('chuniMusic').then(
      pageCount => {
        if (pageCount > 0) {
          this.chuniMusic.next('OK');
        } else {
          this.chuniMusic.next('Downloading');
          this.api.get('api/game/chuni/amazon/music').subscribe(
            data => {
              let errorFlag = false;
              data.forEach(x => {
                this.dbService.add<ChuniMusic>('chuniMusic', x).then(
                  () => '', error => {
                    console.error(error);
                    errorFlag = true;
                  }
                );
              });
              if (errorFlag) {
                this.chuniMusic.next('Error');
              } else {
                this.chuniMusic.next('OK');
              }
            },
            error => {
              console.error(error);
              this.chuniMusic.next('Error');
            }
          );
        }
      });
  }
}
