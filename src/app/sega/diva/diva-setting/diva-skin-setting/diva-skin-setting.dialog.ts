import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-skin-setting-dialog',
  templateUrl: 'diva-skin-setting.html',
})
export class DivaSkinSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<DivaSkinSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaSkinSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaSkinSettingData {
  skinId: number;
}
