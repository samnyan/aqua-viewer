import {Component, OnDestroy, OnInit} from '@angular/core';
import {PreloadService} from '../database/preload.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  divaPv = 'Initialize';
  divaModule = 'Initialize';
  divaCustomize = 'Initialize';
  chuniMusic = 'Initialize';

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
  }

  reload() {
    this.preload.reload();
    this.dbService.deleteDatabase().then(
      () => window.location.reload()
    );
  }

}
