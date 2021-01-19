import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { ToastController, AlertController } from '@ionic/angular';
import { concat } from  'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Contenido } from 'src/app/models/contenido';

@Component({
  selector: 'app-ejercicio-agregar',
  templateUrl: './ejercicio-agregar.page.html',
  styleUrls: ['./ejercicio-agregar.page.scss'],
})

export class EjercicioAgregarPage implements OnInit {

  //agrega los ejercicios que quieras
contenidos: Contenido[] = [];
ejercicio: string;
id:string;
page : string;

  constructor(
  private authService: AuthService, 
  private router: Router,
  private activatedRoute: ActivatedRoute,
  public toastController: ToastController,
  public alertController: AlertController) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.cargarContenidos();
      }
    });
   }

  ngOnInit() {
  this.ejercicio = this.activatedRoute.snapshot.params.ejercicio;
  this.id = this.activatedRoute.snapshot.params.id;

     if (this.ejercicio == "Replica la palabra"){
        this.page = 'editardos';
      } else {
        this.page = 'editaruno';
      }
  }

 cargarContenidos(): void {
  const id = this.activatedRoute.snapshot.params.id;
    this.authService.contenidos(id).subscribe(data => {
      this.contenidos = data;
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
            this.authService.borrarcontenido(id).subscribe( data => {
              this.cargarContenidos();
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
      message: 'contenido borrado',
      duration: 2000
    });
    toast.present();
  }

}
