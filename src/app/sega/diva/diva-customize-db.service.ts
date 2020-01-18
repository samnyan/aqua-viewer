import {Injectable} from '@angular/core';
import {DivaCustomize} from './model/DivaCustomize';
import {ApiService} from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class DivaCustomizeDbService {

  customizeDb: Map<number, DivaCustomize>;

  constructor(private api: ApiService) {
    let db = localStorage.getItem('divaCustomizeDb');
    if (db == null) {
      this.api.get('api/game/diva/data/customizeList').subscribe(
        data => {
          db = data;
          localStorage.setItem('divaCustomizeDb', JSON.stringify(db));
          this.customizeDb = this.parse(JSON.parse(db));
        }
      );
    } else {
      this.customizeDb = this.parse(JSON.parse(db));
    }
  }

  getCustomizeDb(): Map<number, DivaCustomize> {
    return this.customizeDb;
  }

  getCustomize(id: number): DivaCustomize {
    if (id === -1) {
      return {
        id: -1,
        name: 'NONE',
        price: 0
      };
    }
    if (id === -999) {
      return {
        id: -999,
        name: 'NOT_SET',
        price: 0
      };
    }

    let customize = this.customizeDb.get(id);
    if (customize == null) {
      customize = {
        id,
        name: 'UNKNOWN: ' + id,
        price: 0
      };
    }
    return customize;
  }

  getAll() {
    return this.customizeDb.values();
  }

  private parse(db): Map<number, DivaCustomize> {
    const result: Map<number, DivaCustomize> = new Map();
    db.forEach(x => {
      result.set(x.id, x);
    });
    return result;
  }
}
