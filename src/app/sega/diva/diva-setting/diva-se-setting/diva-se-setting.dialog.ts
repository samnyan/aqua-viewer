import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-se-setting-dialog',
  templateUrl: 'diva-se-setting.html',
})
export class DivaSeSettingDialog {

  // item:  = this.data.commonModule : this.data.commonModule.split(',').map(x => Number(x));

  constructor(
    public dialogRef: MatDialogRef<DivaSeSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaSeSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaSeSettingData {
  buttonSe: number;
  chainSlideSe: number;
  slideSe: number;
  sliderTouchSe: number;
}
