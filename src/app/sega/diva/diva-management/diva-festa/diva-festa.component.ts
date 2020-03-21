import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../api.service';
import {MessageService} from '../../../../message.service';
import {Festa, FestaKind} from '../../model/mannagement/Festa';
import {DivaFestaService} from './diva-festa.service';
import {Router} from '@angular/router';
import {Difficulty} from '../../model/DivaPvRecord';

@Component({
  selector: 'app-diva-festa',
  templateUrl: './diva-festa.component.html',
  styleUrls: ['./diva-festa.component.css']
})
export class DivaFestaComponent implements OnInit {

  festas: Festa[];
  festaKind = FestaKind;
  difficulty = Difficulty;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private festaService: DivaFestaService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.get('api/manage/diva/festa').subscribe(
      data => this.festas = data,
      error => this.messageService.notice(error)
    );
  }

  delete(id) {
    this.api.delete('api/manage/diva/festa/' + id).subscribe(
      () => {
        this.messageService.notice('OK');
        this.load();
      },
      error => {
        this.messageService.notice(error);
        this.load();
      }
    );
  }

  edit(festa) {
    this.festaService.festa = festa;
    this.router.navigateByUrl('/diva/management/festa/edit');
  }

}
