import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-title-setting-dialog',
  templateUrl: 'diva-title-setting.html',
})
export class DivaTitleSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<DivaTitleSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaTitleSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaTitleSettingData {
  title: string;
}
