import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DivaFestaService} from '../diva-festa.service';
import {Festa} from '../../../model/mannagement/Festa';
import {Router} from '@angular/router';
import {MessageService} from '../../../../../message.service';

@Component({
  selector: 'app-diva-festa-edit',
  templateUrl: './diva-festa-edit.component.html',
  styleUrls: ['./diva-festa-edit.component.css']
})
export class DivaFestaEditComponent implements OnInit {

  festa: Festa;
  festaForm: FormGroup;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private festaService: DivaFestaService,
    private router: Router
  ) {
  }

  get f() {
    return this.festaForm.controls;
  }

  ngOnInit() {
    this.festa = this.festaService.festa;
    this.festaForm = this.fb.group({
      id: [this.festa.id, Validators.required],
      name: [this.festa.name, Validators.required],
      enable: [this.festa.enable],
      kind: [String(this.festa.kind), Validators.required],
      difficulty: [String(this.festa.difficulty), Validators.required],
      pvList: [this.festa.pvList, Validators.required],
      attributes: [this.festa.attributes, Validators.required],
      addVP: [this.festa.addVP, Validators.required],
      vpMultiplier: [this.festa.vpMultiplier, Validators.required],
      start: [this.festa.start, Validators.required],
      end: [this.festa.end, Validators.required],
      createDate: [this.festa.createDate, Validators.required],
    });
  }

  onSubmit() {
    this.api.put('api/game/diva/manage/festa', this.festaForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/diva/management/festa');
      },
      error => this.messageService.notice(error)
    );
  }

}
