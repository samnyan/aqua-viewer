import {Injectable} from '@angular/core';
import {Festa} from '../../model/mannagement/Festa';

@Injectable({
  providedIn: 'root'
})
export class DivaFestaService {

  currentFesta: Festa = undefined;

  constructor() {
  }

  get festa() {
    return this.currentFesta === undefined ? {
      id: -1,
      enable: true,
      name: 'Untitled',
      kind: 0,
      difficulty: -1,
      pvList: 'ALL',
      attributes: '7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
      addVP: 0,
      vpMultiplier: 1,
      start: new Date(),
      end: new Date(),
      createDate: new Date()
    } : this.currentFesta;
  }

  set festa(f: Festa) {
    this.currentFesta = f;
  }
}
