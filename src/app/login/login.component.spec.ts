import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {LoginComponent} from './login.component';
import {AppRoutingModule} from '../app-routing.module';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardModule} from '../dashboard/dashboard.module';
import {ContainerModule} from '../container/container.module';
import {RegisterModule} from '../register/register.module';
import {HttpClientModule} from '@angular/common/http';
import {PlayerboardListModule} from '../playerboard-list/playerboard-list.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        LayoutModule,
        FormsModule,
        AppRoutingModule,

        HttpClientModule,
        DashboardModule,
        ContainerModule,
        RegisterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        PlayerboardListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid`, async(() => {
    component.loginForm.controls.email.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.invalid).toBeTruthy();
  }));

  it(`form should be valid`, async(() => {
    component.loginForm.controls.email.setValue('test@eamil.com');
    component.loginForm.controls.password.setValue('12345');
    expect(component.loginForm.invalid).toBeFalsy();
  }));
});
