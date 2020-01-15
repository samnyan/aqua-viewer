import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'diva-mylist-setting-dialog',
  templateUrl: 'diva-mylist-setting.html',
})
export class DivaMylistSettingDialog {

  // item:  = this.data.commonModule : this.data.commonModule.split(',').map(x => Number(x));

  constructor(
    public dialogRef: MatDialogRef<DivaMylistSettingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DivaMylistSettingData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DivaMylistSettingData {
  selector: string;
  myList0: string;
  myList1: string;
  myList2: string;
}
