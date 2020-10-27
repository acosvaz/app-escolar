import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {};
  usuario: LoginUsuario;
  isLogged = false;
  isLoginFail = false;
  errorMsg = '';

  constructor(
  	private authService: AuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.usuario = new LoginUsuario(this.form.username, this.form.password);

    this.authService.login(this.usuario).subscribe(data => {

      this.isLogged = true;
      this.isLoginFail = false;
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

}
