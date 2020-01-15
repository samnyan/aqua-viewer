import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {DivaPv} from './model/DivaPv';

@Injectable({
  providedIn: 'root'
})
export class DivaMusicDbService {

  musicDb: Map<number, DivaPv>;

  constructor(private api: ApiService) {
    let db = localStorage.getItem('divaMusicDb');
    if (db == null) {
      this.api.get('api/game/diva/data/musicList').subscribe(
        data => {
          db = data;
          localStorage.setItem('divaMusicDb', JSON.stringify(db));
          this.musicDb = this.parse(JSON.parse(db));
        }
      );
    } else {
      this.musicDb = this.parse(JSON.parse(db));
    }
  }

  getMusicDb(): Map<number, DivaPv> {
    return this.musicDb;
  }

  private parse(db): Map<number, DivaPv> {
    const result: Map<number, DivaPv> = new Map();
    db.forEach(x => {
      result.set(x.pvId, x);
    });
    return result;
  }
}
