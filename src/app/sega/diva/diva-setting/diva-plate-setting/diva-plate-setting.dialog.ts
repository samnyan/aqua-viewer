import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'diva-plate-setting-dialog',
  templateUrl: 'diva-plate-setting.html',
})
export class DivaPlateSettingDialog {

  constructor(
    public dialogRef: MatDialogRef<DivaPlateSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaPlateSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaPlateSettingData {
  plateId: number;
  plateEffectId: number;
}
