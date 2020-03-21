import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatnumberPipe} from './formatnumber.pipe';


@NgModule({
  declarations: [
    FormatnumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatnumberPipe
  ]
})
export class ToolsModule {
}
