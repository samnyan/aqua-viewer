import {Injectable} from '@angular/core';
import {Contest, ContestLeague, ContestNormaType, ContestStageLimit} from '../../model/mannagement/contest';

@Injectable({
  providedIn: 'root'
})
export class DivaContestService {

  currentContest: Contest = undefined;

  constructor() {
  }

  get contest() {
    return this.currentContest === undefined ? {
      id: -1,
      enable: true,
      startTime: new Date(),
      endTime: new Date(),
      name: 'Untitled',
      description: 'description',
      league: ContestLeague.Intermediate,
      stars: 16,
      minComplexity: 10,
      maxComplexity: 20,
      stages: 4,
      stageLimit: ContestStageLimit.Limited,
      normaType: ContestNormaType.Percentage,
      bronzeBorders: 16000,
      sliverBorders: 28000,
      goldBorders: 32000,
      pvList: '',
      pvDiffList: '',
      bronzeContestReward: '',
      sliverContestReward: '',
      goldContestReward: '',
      contestEntryReward: ''
    } : this.currentContest;
  }

  set contest(f: Contest) {
    this.currentContest = f;
  }
}
