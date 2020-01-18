import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api.service';
import {MessageService} from '../../../../message.service';

@Component({
  selector: 'app-diva-news',
  templateUrl: './diva-news.component.html',
  styleUrls: ['./diva-news.component.css']
})
export class DivaNewsComponent implements OnInit {

  newsForm: FormGroup;
  warningForm: FormGroup;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.api.get('api/game/diva/manage/news').subscribe(
      data => this.createNews(data),
      error => this.messageService.notice(error.statusText)
    );
    this.api.get('api/game/diva/manage/warning').subscribe(
      data => this.createWarning(data),
      error => this.messageService.notice(error.statusText)
    );
  }

  createNews(data) {
    this.newsForm = this.fb.group({
      propertyKey: [data.propertyKey, Validators.required],
      propertyValue: [data.propertyValue, Validators.required],
    });
  }

  createWarning(data) {
    this.warningForm = this.fb.group({
      propertyKey: [data.propertyKey, Validators.required],
      propertyValue: [data.propertyValue, Validators.required],
    });
  }

  submitNews() {
    this.api.put('api/game/diva/manage/news', this.newsForm.value).subscribe(
      data => this.createNews(data),
      error => this.messageService.notice(error.statusText)
    );
  }

  submitWarning() {
    this.api.put('api/game/diva/manage/warning', this.newsForm.value).subscribe(
      data => this.createWarning(data),
      error => this.messageService.notice(error.statusText)
    );
  }

}
