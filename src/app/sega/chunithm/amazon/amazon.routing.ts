import {RouterModule, Routes} from '@angular/router';
import {AmazonProfileComponent} from './amazon-profile/amazon-profile.component';
import {AmazonRatingComponent} from './amazon-rating/amazon-rating.component';
import {AmazonRecentComponent} from './amazon-recent/amazon-recent.component';
import {AmazonSettingComponent} from './amazon-setting/amazon-setting.component';
import {AmazonSonglistComponent} from './amazon-songlist/amazon-songlist.component';
import {AmazonCharacterComponent} from './amazon-character/amazon-character.component';
import {AmazonSongDetailComponent} from './amazon-song-detail/amazon-song-detail.component';
import {AmazonSongPlaylogComponent} from './amazon-song-playlog/amazon-song-playlog.component';

const routes: Routes = [
  {path: 'profile', component: AmazonProfileComponent},
  {path: 'rating', component: AmazonRatingComponent},
  {path: 'recent', component: AmazonRecentComponent},
  {path: 'song', component: AmazonSonglistComponent},
  {path: 'song/:id', component: AmazonSongDetailComponent},
  {path: 'song/:id/:level', component: AmazonSongPlaylogComponent},
  {path: 'character', component: AmazonCharacterComponent},
  {path: 'setting', component: AmazonSettingComponent},
];

export const AmazonRoutes = RouterModule.forChild(routes);
