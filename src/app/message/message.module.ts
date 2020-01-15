import {NgModule} from '@angular/core';

import {MessageComponent} from './message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [MessageComponent],
  declarations: [MessageComponent],
  providers: [],
})
export class MessageModule {
}
