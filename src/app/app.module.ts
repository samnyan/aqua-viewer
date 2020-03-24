import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MessageModule} from './message/message.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule} from './login/login.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DivaModule} from './sega/diva/diva.module';
import {AmazonModule} from './sega/chunithm/amazon/amazon.module';
import {DatabaseModule} from './database/database.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {OngekiModule} from './sega/ongeki/ongeki.module';
import {ErrorInterceptorService} from './auth/error-interceptor.service';
import {LoadingInterceptorService} from './auth/loading-interceptor.service';
import {ChangelogComponent} from './changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent
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
    OngekiModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
