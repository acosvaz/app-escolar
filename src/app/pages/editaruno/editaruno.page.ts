import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, AlertController } from '@ionic/angular';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';


@Component({
  selector: 'app-editaruno',
  templateUrl: './editaruno.page.html',
  styleUrls: ['./editaruno.page.scss'],
})
export class EditarunoPage implements OnInit {

form: any = {};
failInit = false;
public fileUploader: FileUploader = new FileUploader({});
  errorMsg = 'Coloque todos los campos';
  mensajeOK = 'Usuario creado';


  constructor(
  private authService: AuthService, 
  private router: Router,
  private activatedRoute: ActivatedRoute,
  public toastController: ToastController,
  public alertController: AlertController
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.authService.editaruno(id).subscribe( data => {
      this.form.problema = data.problema;
      this.form.opcion1 = data.opcion1;
      this.form.opcion2 = data.opcion2;
      this.form.opcion3 = data.opcion3;
      this.form.opcionc = data.opcionc;
    },
      (err: any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }

  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

uploadFiless() {
  const idejercicio = this.activatedRoute.snapshot.params.idejercicio;
  const id = this.activatedRoute.snapshot.params.id;

    let files = this.getFiles();
    let requests = [];

    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      formData.append('problema' , this.form.problema);
      formData.append('ejercicio_id' , idejercicio);
      formData.append('opcion1' , this.form.opcion1);
      formData.append('opcion2' , this.form.opcion2);
      formData.append('opcion3' , this.form.opcion3);
      formData.append('opcionc' , this.form.opcionc);
      formData.append('id' , id);
      requests.push(this.authService.uploadFormDataEdit(formData));

    });

    concat(...requests).subscribe(
      (res) => {
        console.log(res);
        this.presentToast();
      },
      (err) => {
        this.presentAlert(); 
        console.log(err);
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
