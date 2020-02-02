import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
}
