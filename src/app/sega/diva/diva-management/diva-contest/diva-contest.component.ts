import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../api.service';
import {MessageService} from '../../../../message.service';
import {Router} from '@angular/router';
import {DivaContestService} from './diva-contest.service';
import {Contest, ContestLeague, ContestNormaType, ContestStageLimit} from '../../model/mannagement/contest';

@Component({
  selector: 'app-diva-contest',
  templateUrl: './diva-contest.component.html',
  styleUrls: ['./diva-contest.component.css']
})
export class DivaContestComponent implements OnInit {

  contests: Contest[];
  contestLeague = ContestLeague;
  contestStageLimit = ContestStageLimit;
  contestNormaType = ContestNormaType;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private contestService: DivaContestService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.get('api/manage/diva/contest').subscribe(
      data => this.contests = data,
      error => this.messageService.notice(error)
    );
  }

  delete(id) {
    this.api.delete('api/manage/diva/contest/' + id).subscribe(
      () => {
        this.messageService.notice('OK');
        this.load();
      },
      error => {
        this.messageService.notice(error.statusText);
        this.load();
      }
    );
  }

  edit(contest) {
    this.contestService.contest = contest;
    this.router.navigateByUrl('/diva/management/contest/edit');
  }
}
