import {Injectable} from '@angular/core';
import {ChuniMusic} from './model/ChuniMusic';
import {ApiService} from '../../../api.service';

@Injectable({
  providedIn: 'root'
})
export class ChuniMusicDbService {

  musicDb: Map<number, ChuniMusic>;

  constructor(private api: ApiService) {
    let db = localStorage.getItem('chuniMusicDb');
    if (db == null) {
      this.api.get('api/game/chuni/amazon/music').subscribe(
        data => {
          db = data;
          localStorage.setItem('chuniMusicDb', JSON.stringify(db));
          this.musicDb = this.parse(JSON.parse(db));
        }
      );
    } else {
      this.musicDb = this.parse(JSON.parse(db));
    }
  }

  getMusicDb(): Map<number, ChuniMusic> {
    return this.musicDb;
  }

  private parse(db: ChuniMusic[]): Map<number, ChuniMusic> {
    const result: Map<number, ChuniMusic> = new Map();
    db.forEach(x => {
      result.set(x.musicId, x);
    });
    return result;
  }
}
