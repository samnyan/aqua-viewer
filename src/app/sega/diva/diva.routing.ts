import {RouterModule, Routes} from '@angular/router';
import {DivaProfileComponent} from './diva-profile/diva-profile.component';
import {DivaRecentComponent} from './diva-recent/diva-recent.component';
import {DivaSettingComponent} from './diva-setting/diva-setting.component';
import {DivaPvRecordComponent} from './diva-pv-record/diva-pv-record.component';
import {DivaRecordDetailComponent} from './diva-record-detail/diva-record-detail.component';
import {DivaManagementComponent} from './diva-management/diva-management/diva-management.component';
import {DivaFestaComponent} from './diva-management/diva-festa/diva-festa.component';
import {DivaFestaEditComponent} from './diva-management/diva-festa/diva-festa-edit/diva-festa-edit.component';
import {DivaContestComponent} from './diva-management/diva-contest/diva-contest.component';
import {DivaContestEditComponent} from './diva-management/diva-contest/diva-contest-edit/diva-contest-edit.component';
import {DivaModulesComponent} from './diva-modules/diva-modules.component';
import {DivaNewsComponent} from './diva-management/diva-news/diva-news.component';
import {DivaCustomizeComponent} from './diva-customize/diva-customize.component';

const routes: Routes = [
  {path: 'profile', component: DivaProfileComponent},
  {path: 'record', component: DivaPvRecordComponent},
  {path: 'record/:pvId', component: DivaRecordDetailComponent},
  {path: 'recent', component: DivaRecentComponent},
  {path: 'setting', component: DivaSettingComponent},
  {path: 'management', component: DivaManagementComponent},
  {path: 'management/festa', component: DivaFestaComponent},
  {path: 'management/festa/edit', component: DivaFestaEditComponent},
  {path: 'management/contest', component: DivaContestComponent},
  {path: 'management/contest/edit', component: DivaContestEditComponent},
  {path: 'management/news', component: DivaNewsComponent},
  {path: 'modules', component: DivaModulesComponent},
  {path: 'customizes', component: DivaCustomizeComponent},
];

export const DivaRoutes = RouterModule.forChild(routes);
