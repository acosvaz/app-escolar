import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 isLogged = false;
  isAdmin = false;

  constructor(
  private tokenService: TokenService,
  private router: Router
  ) { }

  ngOnInit() {
   if (this.tokenService.getToken()) {

      this.isLogged = true;

    } else {
      this.isLogged = false;
      this.router.navigate(['']);
      
    }
  }

}
