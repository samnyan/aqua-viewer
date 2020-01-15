import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-name-setting-dialog',
  templateUrl: 'diva-name-setting.html',
})
export class DivaNameSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<DivaNameSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaNameSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaNameSettingData {
  playerName: string;
}
