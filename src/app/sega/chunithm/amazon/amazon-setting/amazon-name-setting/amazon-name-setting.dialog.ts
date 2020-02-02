import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'amazon-name-setting-dialog',
  templateUrl: 'amazon-name-setting.html',
})
export class AmazonNameSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<AmazonNameSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: AmazonNameSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface AmazonNameSettingData {
  userName: string;
}
