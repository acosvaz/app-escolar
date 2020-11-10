import { Component, OnInit } from '@angular/core';
import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  isLogged = false;
  isAdmin = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private tokenService: TokenService,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {

      this.isLogged = true;

      if (this.tokenService.getRol() !== 'user') {

       this.isAdmin = true;
      } else {

        this.isAdmin = false;
      }

    } else {
      this.isLogged = false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['']);
    window.location.reload();
  }

}
