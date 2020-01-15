import {ChangeDetectorRef, Component, OnChanges, OnDestroy} from '@angular/core';
import {AuthenticationService, User} from './auth/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnDestroy {
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
      name: 'PvRecord',
      url: 'diva/record'
    },
    {
      id: 2,
      name: 'Recent Play',
      url: 'diva/recent'
    },
    {
      id: 3,
      name: 'Setting',
      url: 'diva/setting'
    },
    {
      id: 4,
      name: 'Management',
      url: 'diva/management'
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
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private route: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = authenticationService.currentUserValue;
  }

  ngOnChanges(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
  }
}

export class Menu {
  id: number;
  name: string;
  url: string;
}
