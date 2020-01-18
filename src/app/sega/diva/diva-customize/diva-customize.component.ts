import {Component, OnInit} from '@angular/core';
import {DivaCustomizeDbService} from '../diva-customize-db.service';
import {DivaCustomize} from '../model/DivaCustomize';

@Component({
  selector: 'app-diva-customize',
  templateUrl: './diva-customize.component.html',
  styleUrls: ['./diva-customize.component.css']
})
export class DivaCustomizeComponent implements OnInit {

  customizes: DivaCustomize[];

  constructor(private customizeDb: DivaCustomizeDbService) {
  }

  ngOnInit() {
    this.customizes = Array.from(this.customizeDb.getAll());
  }

}
