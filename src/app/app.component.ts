import {ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService, User} from './auth/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {PreloadService} from './database/preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'aqua-viewer';

  user: User;

  mobileQuery: MediaQueryList;

  dark = 'dark';

  divaMenus: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'diva/profile'
    },
    {
      id: 1,
      name: 'Pv Record',
      url: 'diva/record'
    },
    {
      id: 2,
      name: 'Pv List',
      url: 'diva/pv'
    },
    {
      id: 3,
      name: 'Recent Play',
      url: 'diva/recent'
    },
    {
      id: 4,
      name: 'Setting',
      url: 'diva/setting'
    },
    {
      id: 5,
      name: 'Management',
      url: 'diva/management'
    },
    {
      id: 6,
      name: 'Modules',
      url: 'diva/modules'
    },
    {
      id: 7,
      name: 'Customizes',
      url: 'diva/customizes'
    },
  ];

  amazonMenus: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'amazon/profile'
    },
    {
      id: 1,
      name: 'Rating',
      url: 'amazon/rating'
    },
    {
      id: 2,
      name: 'Recent Play',
      url: 'amazon/recent'
    },
    {
      id: 3,
      name: 'Setting',
      url: 'amazon/setting'
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private route: Router,
    private preLoad: PreloadService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.preLoad.load();
  }

  ngOnChanges(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    location.reload(true);
  }
}

export class Menu {
  id: number;
  name: string;
  url: string;
}
