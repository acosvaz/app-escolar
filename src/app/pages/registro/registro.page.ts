import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = 'Coloque todos los campos';
  mensajeOK = 'Usuario creado';

  tipos: any[] = [
    {
      id: 1,
      nombre: 'Alumno',
      valor: 'admin',
    },
    {
      id: 2,
      nombre: 'Maestro',
      valor: 'user',
    }
  ];

  constructor(
   private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

    onRegister() {
    this.usuario = new NuevoUsuario(this.form.nombre, this.form.username, this.form.password, this.form.tipo_user);
    this.authService.registro(this.usuario).subscribe(data => {
      this.isRegister = true;
      this.isRegisterFail = false;
      this.presentToast();
    },
      (error: any) => {
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
        this.presentAlert();
      }
    );
  }

 async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fail en el registro',
      message: this.errorMsg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.mensajeOK,
      duration: 2000
    });
    toast.present();
  }

}
