import {Component, OnInit} from '@angular/core';
import {PreloadService} from '../database/preload.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  divaPv = '读取数据中';
  divaModule = '读取数据中';
  divaCustomize = '读取数据中';
  chuniMusic = '读取数据中';
  ongekiCard = '读取数据中';
  ongekiCharacter = '读取数据中';
  ongekiMusic = '读取数据中';
  ongekiSkill = '读取数据中';
  chuniCharacter = '读取数据中';
  chuniSkill = '读取数据中';

  constructor(
    private dbService: NgxIndexedDBService,
    private preload: PreloadService
  ) {
  }

  ngOnInit() {
    this.preload.divaPvState.subscribe(data => this.divaPv = data);
    this.preload.divaModuleState.subscribe(data => this.divaModule = data);
    this.preload.divaCustomizeState.subscribe(data => this.divaCustomize = data);
    this.preload.chuniMusicState.subscribe(data => this.chuniMusic = data);
    this.preload.ongekiCardState.subscribe(data => this.ongekiCard = data);
    this.preload.ongekiCharacterState.subscribe(data => this.ongekiCharacter = data);
    this.preload.ongekiMusicState.subscribe(data => this.ongekiMusic = data);
    this.preload.ongekiSkillState.subscribe(data => this.ongekiSkill = data);
    this.preload.chuniCharacterState.subscribe(data => this.chuniCharacter = data);
    this.preload.chuniSkillState.subscribe(data => this.chuniSkill = data);
  }

  reload() {
    this.preload.reload();
    this.dbService.deleteDatabase().then(
      () => window.location.reload()
    );
  }

}
