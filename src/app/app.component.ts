import {ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService, User} from './auth/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {PreloadService} from './database/preload.service';
import {Subscription} from 'rxjs';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'aqua-viewer';

  user: User;

  loading = false;
  ongekiMenu: Menu[] = [
    {
      id: 0,
      name: '玩家档案',
      url: 'ongeki/profile'
    },
    {
      id: 1,
      name: '对战点数',
      url: 'ongeki/battle'
    },
    {
      id: 2,
      name: '熟练度',
      url: 'ongeki/rating'
    },
    {
      id: 3,
      name: '最近游玩',
      url: 'ongeki/recent'
    },
    {
      id: 4,
      name: '歌曲列表',
      url: 'ongeki/song'
    },
    {
      id: 5,
      name: '卡牌查看',
      url: 'ongeki/card'
    },
    {
      id: 6,
      name: 'Item',
      url: 'ongeki/item'
    },
    {
      id: 7,
      name: '游戏设定',
      url: 'ongeki/setting'
    }
  ];

  mobileQuery: MediaQueryList;

  dark = 'dark';
  amazonMenus: Menu[] = [
    {
      id: 0,
      name: '玩家档案',
      url: 'amazon/profile'
    },
    {
      id: 1,
      name: '熟练度',
      url: 'amazon/rating'
    },
    {
      id: 2,
      name: '最近游玩',
      url: 'amazon/recent'
    },
    {
      id: 3,
      name: '歌曲列表',
      url: 'amazon/song'
    },
    {
      id: 4,
      name: '角色设定',
      url: 'amazon/character'
    },
    {
      id: 5,
      name: '游戏设定',
      url: 'amazon/setting'
    }
  ];

  divaMenus: Menu[] = [
    {
      id: 0,
      name: '玩家档案',
      url: 'diva/profile'
    },
    {
      id: 1,
      name: 'PV记录',
      url: 'diva/record'
    },
    {
      id: 2,
      name: 'PV列表',
      url: 'diva/pv'
    },
    {
      id: 3,
      name: '最近游玩',
      url: 'diva/recent'
    },
    {
      id: 4,
      name: '游戏设定',
      url: 'diva/setting'
    },
    {
      id: 5,
      name: '服务器管理',
      url: 'diva/management'
    },
    {
      id: 6,
      name: '模型列表',
      url: 'diva/modules'
    },
    {
      id: 7,
      name: '饰品列表',
      url: 'diva/customizes'
    },
  ];
  private subscription: Subscription;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private route: Router,
    private api: ApiService,
    private preLoad: PreloadService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.preLoad.load();
    this.subscription = this.api.loadingState.subscribe(
      state => this.loading = state.show
    );
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
