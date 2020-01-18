import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {DivaModule} from './model/DivaModule';

@Injectable({
  providedIn: 'root'
})
export class DivaModuleDbService {

  moduleDb: Map<number, DivaModule>;

  constructor(private api: ApiService) {
    let db = localStorage.getItem('divaModuleDb');
    if (db == null) {
      this.api.get('api/game/diva/data/moduleList')
        .subscribe(
          data => {
            db = data;
            localStorage.setItem('divaModuleDb', JSON.stringify(db));
            this.moduleDb = this.parse(JSON.parse(db));
          }
        );
    } else {
      this.moduleDb = this.parse(JSON.parse(db));
    }
  }

  getModuleDb(): Map<number, DivaModule> {
    return this.moduleDb;
  }

  getModule(id: number): DivaModule {
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

    let module = this.moduleDb.get(id);
    if (module == null) {
      module = {
        id,
        name: 'UNKNOWN: ' + id,
        price: 0
      };
    }
    return module;
  }

  getAll() {
    return this.moduleDb.values();
  }

  private parse(db): Map<number, DivaModule> {
    const result: Map<number, DivaModule> = new Map();
    db.forEach(x => {
      result.set(x.id, x);
    });
    return result;
  }
}
