import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../../api.service';
import {MessageService} from '../../../../../message.service';
import {Router} from '@angular/router';
import {Contest} from '../../../model/mannagement/contest';
import {DivaContestService} from '../diva-contest.service';

@Component({
  selector: 'app-diva-contest-edit',
  templateUrl: './diva-contest-edit.component.html',
  styleUrls: ['./diva-contest-edit.component.css']
})
export class DivaContestEditComponent implements OnInit {

  contest: Contest;
  contestForm: FormGroup;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private contestService: DivaContestService,
    private router: Router
  ) {
  }

  get f() {
    return this.contestForm.controls;
  }

  ngOnInit() {
    this.contest = this.contestService.contest;
    this.contestForm = this.fb.group({
      id: [this.contest.id, Validators.required],
      enable: [this.contest.enable],
      name: [this.contest.name, Validators.required],
      description: [this.contest.description, Validators.required],
      startTime: [this.contest.startTime, Validators.required],
      endTime: [this.contest.endTime, Validators.required],
      league: [String(this.contest.league), Validators.required],
      stars: [this.contest.stars, Validators.required],
      minComplexity: [this.contest.minComplexity, Validators.required],
      maxComplexity: [this.contest.maxComplexity, Validators.required],
      stages: [this.contest.stages, Validators.required],
      stageLimit: [String(this.contest.stageLimit), Validators.required],
      normaType: [String(this.contest.normaType), Validators.required],
      bronzeBorders: [this.contest.bronzeBorders, Validators.required],
      sliverBorders: [this.contest.sliverBorders, Validators.required],
      goldBorders: [this.contest.goldBorders, Validators.required],
      pvList: [this.contest.pvList],
      pvDiffList: [this.contest.pvDiffList],
      bronzeContestReward: [this.contest.bronzeContestReward],
      sliverContestReward: [this.contest.sliverContestReward],
      goldContestReward: [this.contest.goldContestReward],
      contestEntryReward: [this.contest.contestEntryReward]
    });
  }

  onSubmit() {
    this.api.put('api/manage/diva/contest', this.contestForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/diva/management/contest');
      },
      error => this.messageService.notice(error)
    );
  }

}
