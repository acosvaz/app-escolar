import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Ejercicio } from 'src/app/models/ejercicio';

@Component({
  selector: 'app-curso-ejercicios',
  templateUrl: './curso-ejercicios.page.html',
  styleUrls: ['./curso-ejercicios.page.scss'],
})
export class CursoEjerciciosPage implements OnInit {

ejercicios: Ejercicio[] = [];
ejer = ['Replica la palabra', 'Selecciona la palabra'];
form: any = {};
errorMsg = 'Coloque todos los campos';

  constructor(
  private tokenService: TokenService,
  private authService: AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  public toastController: ToastController,
  public alertController: AlertController
  ) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.cargarEjercicios();
      }
    });
   }


  ngOnInit() {
  }

 cargarEjercicios(): void {
 	const id = this.activatedRoute.snapshot.params.id;
    this.authService.ejercicios(id).subscribe(data => {
      this.ejercicios = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'si aceptas, no hay vuelta atrás',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (nops) => {
            console.log(nops);
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.authService.borrarejercicio(id).subscribe( data => {
              this.cargarEjercicios();
              this.presentToast();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'curso borrado',
      duration: 2000
    });
    toast.present();
  }

  onCreate(): void {
  const as = this.activatedRoute.snapshot.params.id;
    this.authService.agregar_ejercicio(this.form, as).subscribe(data => {
    	this.cargarEjercicios();
     },
      (err: any) => {
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

}
