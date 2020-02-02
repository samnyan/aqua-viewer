import {RouterModule, Routes} from '@angular/router';
import {AmazonProfileComponent} from './amazon-profile/amazon-profile.component';
import {AmazonRatingComponent} from './amazon-rating/amazon-rating.component';
import {AmazonRecentComponent} from './amazon-recent/amazon-recent.component';
import {AmazonSettingComponent} from './amazon-setting/amazon-setting.component';

const routes: Routes = [
  {path: 'profile', component: AmazonProfileComponent},
  {path: 'rating', component: AmazonRatingComponent},
  {path: 'recent', component: AmazonRecentComponent},
  {path: 'setting', component: AmazonSettingComponent},
];

export const AmazonRoutes = RouterModule.forChild(routes);
