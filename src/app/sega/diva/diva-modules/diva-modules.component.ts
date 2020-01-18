import {Component, OnInit} from '@angular/core';
import {DivaModuleDbService} from '../diva-module-db.service';
import {DivaModule} from '../model/DivaModule';

@Component({
  selector: 'app-diva-modules',
  templateUrl: './diva-modules.component.html',
  styleUrls: ['./diva-modules.component.css']
})
export class DivaModulesComponent implements OnInit {

  modules: DivaModule[] = [];

  constructor(private moduleDb: DivaModuleDbService) {
  }

  ngOnInit() {
    this.modules = Array.from(this.moduleDb.getAll());
  }

}
