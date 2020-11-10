import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  isLogged = false;
  isAdmin = false;

  constructor(
  private tokenService: TokenService,
  private router: Router
  ) {}

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

  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['']);
    window.location.reload();
  }

}
