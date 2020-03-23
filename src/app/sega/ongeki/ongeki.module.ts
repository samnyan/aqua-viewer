import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OngekiRoutes} from './ongeki.routing';
import {OngekiProfileComponent} from './ongeki-profile/ongeki-profile.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {OngekiCardComponent} from './ongeki-card/ongeki-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {OngekiCardListComponent} from './ongeki-card-list/ongeki-card-list.component';
import {OngekiRecentComponent} from './ongeki-recent/ongeki-recent.component';
import {ToolsModule} from '../../util/tools.module';
import {ToAttributeClassPipe} from './util/to-attribute-class.pipe';
import {OngekiSongListComponent} from './ongeki-song-list/ongeki-song-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OngekiBattlePointComponent} from './ongeki-battle-point/ongeki-battle-point.component';
import {OngekiRatingComponent} from './ongeki-rating/ongeki-rating.component';
import {ToLevelDecimalPipe} from './util/to-level-decimal.pipe';
import {ToBattleSpritePipe} from './util/to-battle-sprite.pipe';
import {ToTechSpritePipe} from './util/to-tech-sprite.pipe';


@NgModule({
  declarations: [
    OngekiProfileComponent,
    OngekiCardComponent,
    OngekiCardListComponent,
    OngekiRecentComponent,
    ToAttributeClassPipe,
    OngekiSongListComponent,
    OngekiBattlePointComponent,
    OngekiRatingComponent,
    ToLevelDecimalPipe,
    ToBattleSpritePipe,
    ToTechSpritePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    OngekiRoutes,

    MatCardModule,
    NgxPaginationModule,
    MatButtonModule,
    ToolsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule
  ]
})
export class OngekiModule {
}
