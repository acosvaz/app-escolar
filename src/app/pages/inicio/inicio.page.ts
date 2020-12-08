import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { ToastController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

cursos: Curso[] = [];
  isLogged = false;
  isAdmin = false;

  constructor(
  private tokenService: TokenService,
  private authService: AuthService,
  private router: Router,
  public toastController: ToastController,
  public alertController: AlertController
  ) { 
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.cargarCursos();
      }
    });
  }

  ngOnInit() {
   if (this.tokenService.getToken()) {
      this.cargarCursos();
      this.isLogged = true;

    } else {
      this.router.navigate(['']);
    }

  }

 cargarCursos(): void {
  const id = this.tokenService.getId();
    this.authService.cursos(id).subscribe(data => {
      this.cursos = data;
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
            this.authService.borrarcurso(id).subscribe( data => {
              this.cargarCursos();
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


}
