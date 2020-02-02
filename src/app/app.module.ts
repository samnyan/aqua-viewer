import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MessageModule} from './message/message.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule} from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {DivaModule} from './sega/diva/diva.module';
import {AmazonModule} from './sega/chunithm/amazon/amazon.module';
import {DatabaseModule} from './database/database.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxPaginationModule,
    DatabaseModule,

    MessageModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    DivaModule,
    AmazonModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
