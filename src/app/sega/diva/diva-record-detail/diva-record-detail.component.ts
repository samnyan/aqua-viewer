import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {DivaMusicDbService} from '../diva-music-db.service';
import {HttpParams} from '@angular/common/http';
import {DivaRecordDetail} from '../model/DivaRecordDetail';
import {Difficulty, Edition} from '../model/DivaPvRecord';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DivaModuleDbService} from '../diva-module-db.service';

@Component({
  selector: 'app-diva-record-detail',
  templateUrl: './diva-record-detail.component.html',
  styleUrls: ['./diva-record-detail.component.css']
})
export class DivaRecordDetailComponent implements OnInit {

  edition = Edition;
  difficulty = Difficulty;
  record: DivaRecordDetail;
  isEdit = false;
  customizeForm: FormGroup;
  pvId: number;
  pdId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private musicDb: DivaMusicDbService,
    private fb: FormBuilder,
    private moduleDb: DivaModuleDbService
  ) {
  }

  get f() {
    return this.customizeForm.controls;
  }

  ngOnInit() {
    this.pvId = Number(this.route.snapshot.paramMap.get('pvId'));
    this.pdId = this.auth.currentUserValue.extId;
    const param = new HttpParams().set('pdId', String(this.pdId));
    this.api.get('api/game/diva/pvRecord/' + this.pvId, param).subscribe(
      data => {
        this.record = data;
        this.record.songInfo = this.musicDb.getMusicDb().get(this.pvId);
        if (!this.record.customize) {
          this.record.customize = {
            pvId: this.pvId,
            module: '-999,-999,-999',
            customize: '-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999',
            customizeFlag: '-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1',
            skin: -1,
            buttonSe: -1,
            slideSe: -1,
            chainSlideSe: -1,
            sliderTouchSe: -1
          };
        }
        const modules = this.record.customize.module.split(',');
        this.record.customize.modulesInfo = [
          this.moduleDb.getModule(Number(modules[0])),
          this.moduleDb.getModule(Number(modules[1])),
          this.moduleDb.getModule(Number(modules[2]))
        ];
        this.customizeForm = this.fb.group({
          module: [this.record.customize.module, Validators.required],
          customize: [this.record.customize.customize, Validators.required],
          customizeFlag: [this.record.customize.customizeFlag, Validators.required],
          skin: [this.record.customize.skin, Validators.required],
          buttonSe: [this.record.customize.buttonSe, Validators.required],
          slideSe: [this.record.customize.slideSe, Validators.required],
          chainSlideSe: [this.record.customize.chainSlideSe, Validators.required],
          sliderTouchSe: [this.record.customize.sliderTouchSe, Validators.required],
        });
      },
      error => this.messageService.notice(error)
    );
  }

  onSubmit() {
    if (this.customizeForm.invalid) {
      return;
    }
    this.api.put('api/game/diva/pvRecord/' + this.pvId, {
      pdId: this.pdId,
      pvId: this.pvId,
      module: this.f.module.value,
      customize: this.f.customize.value,
      customizeFlag: this.f.customizeFlag.value,
      skin: this.f.skin.value,
      buttonSe: this.f.buttonSe.value,
      slideSe: this.f.slideSe.value,
      chainSlideSe: this.f.chainSlideSe.value,
      sliderTouchSe: this.f.sliderTouchSe.value
    }).subscribe(
      data => {
        this.record.customize = data;
        this.isEdit = false;
      },
      error => this.messageService.notice(error)
    );
  }

}
