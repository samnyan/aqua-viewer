import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-rival-setting-dialog',
  templateUrl: 'diva-rival-setting.html',
})
export class DivaRivalSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<DivaRivalSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaRivalSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaRivalSettingData {
  rivalId: number;
}
