import {Component, Injectable, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  constructor(
    private _snackBar: MatSnackBar
  ) {
  }


  ngOnInit() {
    this.openSnackBar('数据初始化完成');
  }

  public openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

}
