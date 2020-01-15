import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AmazonRoutes} from './amazon.routing';
import {AmazonProfileComponent} from './amazon-profile/amazon-profile.component';
import {AmazonRatingComponent} from './amazon-rating/amazon-rating.component';
import {ToRatingPipe} from './util/to-rating.pipe';
import {FormatnumberPipe} from './util/formatnumber.pipe';
import {RatingClass} from './util/rating-class.pipe';
import {CourceIdToClassPipe} from './util/cource-id-to-class.pipe';
import {AmazonRecentComponent} from './amazon-recent/amazon-recent.component';
import {ToRankPipe} from './util/to-rank.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AmazonRoutes,

    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  declarations: [
    AmazonProfileComponent,
    AmazonRatingComponent,
    ToRatingPipe,
    FormatnumberPipe,
    RatingClass,
    CourceIdToClassPipe,
    AmazonRecentComponent,
    ToRankPipe
  ],
  entryComponents: [],
  exports: []
})
export class AmazonModule {
}
