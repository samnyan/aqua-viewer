import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-display-setting-dialog',
  templateUrl: 'diva-display-setting.html',
})
export class DivaDisplaySettingDialog {

  // item:  = this.data.commonModule : this.data.commonModule.split(',').map(x => Number(x));

  constructor(
    public dialogRef: MatDialogRef<DivaDisplaySettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaDisplaySettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaDisplaySettingData {
  showInterimRanking: boolean;
  showClearStatus: boolean;
  showGreatBorder: boolean;
  showExcellentBorder: boolean;
  showRivalBorder: boolean;
  showRgoSetting: boolean;
}
