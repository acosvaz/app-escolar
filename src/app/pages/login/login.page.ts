import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { TokenService } from 'src/app/services/token.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {};
  usuario: LoginUsuario;
  nombreUser: string;
  isLogged = false;
  isLoginFail = false;
  isAdmin = false;
  isUser = false;
  errorMsg = 'Usuario y/o Contraseña incorrectos';
  rol: string;
  id: number;
  todo : FormGroup;

  constructor(
  	private authService: AuthService,
    private alertController: AlertController,
    private tokenService: TokenService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.todo = this.formBuilder.group({
      curso: '',
      ejercicio: this.formBuilder.array([])
    });
  }

//agregrar nuevo curso por lo pronto solo esta lectura
  listOne = ['Lectura', 'Otro'];

//agregar ejercicio, por lo pronto solo tenemos dos audio e imegenes
  listTwo = ['Lectura', 'Identificacionde de palabras'];

  ngOnInit() {

  if (this.tokenService.getToken()) {
    // comprobamos los valores del token
      
      this.nombreUser = this.tokenService.getUserName();
      this.isLogged = true;
      this.isLoginFail = false;
      this.rol = this.tokenService.getRol();
      this.id = Number(this.tokenService.getId());

      if (this.tokenService.getRol() !== 'user') {
        this.isAdmin = true;
      } else {
        this.isUser = true;
      }

    }

  }

  onLogin() {
    this.usuario = new LoginUsuario(this.form.username, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {

      this.tokenService.setId(data.id.toString());
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.username);
      this.tokenService.setRol(data.rol);

      window.location.reload();

    },
      (err: any) => {
        console.log(err);
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = 'Intente de nuevo';
        this.presentAlert();
      }
    );
  }

    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario o contraseña incorrectos',
      message: this.errorMsg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }


onLogout() {
  this.tokenService.logOut();
  //this.router.navigate(['']);
  window.location.reload();
}

}
