import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../api.service';
import {AuthenticationService} from '../../../../auth/authentication.service';
import {MessageService} from '../../../../message.service';
import {MatDialog} from '@angular/material/dialog';
import {AmazonProfile} from '../model/AmazonProfile';
import {HttpParams} from '@angular/common/http';
import {AmazonNameSettingDialog} from './amazon-name-setting/amazon-name-setting.dialog';

@Component({
  selector: 'app-amazon-setting',
  templateUrl: './amazon-setting.component.html',
  styleUrls: ['./amazon-setting.component.css']
})
export class AmazonSettingComponent implements OnInit {

  profile: AmazonProfile;
  aimeId: string;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId);
    this.api.get('api/game/chuni/amazon/profile', param).subscribe(
      data => {
        this.profile = data;
      },
      error => this.messageService.notice(error)
    );
    this.aimeId = String(this.auth.currentUserValue.extId);
  }

  userName() {
    const dialogRef = this.dialog.open(AmazonNameSettingDialog, {
      width: '250px',
      data: {userName: this.profile.userName}
    });

    dialogRef.afterClosed().subscribe(userName => {
      if (userName) {
        this.api.put('api/game/chuni/amazon/profile/userName', {aimeId: this.aimeId, userName}).subscribe(
          x => {
            this.profile = x;
            this.messageService.notice('OK');
          }, error => this.messageService.notice(error)
        );
      }
    });
  }
}
