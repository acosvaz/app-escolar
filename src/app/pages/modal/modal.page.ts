import { Component, OnInit} from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public fileUploader: FileUploader = new FileUploader({});
  form: any = {};
  isReplica = false;
  isSelecciona = false;
  ejercicio : string;
  isRegister = false;
  isRegisterFail = false;
  errorMsg = 'Coloque todos los campos';
  mensajeOK = 'Usuario creado';

  constructor(private nativeAudio: NativeAudio,
  private authService: AuthService, 
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private alertController: AlertController,
  private toastController: ToastController ) {}


  ngOnInit() {
  this.ejercicio = this.activatedRoute.snapshot.params.ejercicio;

      if (this.ejercicio == "Replica la palabra"){
        this.isReplica = true;
      } else {
        this.isSelecciona = true;
      }
  }

  clickin(){
  //this.modalController.dismiss();
  }

  audio(audio: string, adrees: string){
  console.log(audio + "   " + adrees);
  this.nativeAudio.preloadSimple( audio , adrees).then(() => {
    this.nativeAudio.play(audio, () => this.nativeAudio.unload(audio));
  });
  }

  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

uploadFiles() {
  const id = this.activatedRoute.snapshot.params.id;
    
    let files = this.getFiles();
    let requests = [];

    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      formData.append('problema' , this.form.problema);
      formData.append('ejercicio_id' , id);
      formData.append('opcion1' , this.form.opcion1);
      formData.append('opcion2' , this.form.opcion2);
      formData.append('opcion3' , this.form.opcion3);
      formData.append('opcionc' , this.form.opcionc);
      requests.push(this.authService.subirFormData(formData));

    });

    concat(...requests).subscribe(
      (res) => {
        this.isRegister = true;
        this.isRegisterFail = false;
        console.log(res);
        this.presentToast();
      },
      (err) => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.presentAlert(); 
        console.log(err);
      }
    );
  }

enviarFiles() {
  const id = this.activatedRoute.snapshot.params.id;
    
    let files = this.getFiles();
    let requests = [];

    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      formData.append('problema' , this.form.problema);
      formData.append('ejercicio_id' , id);
      formData.append('respuesta' , this.form.respuesta);
      requests.push(this.authService.uploadFormData(formData));

    });

    concat(...requests).subscribe(
      (res) => {
        this.isRegister = true;
        this.isRegisterFail = false;
        console.log(res);
        this.presentToast();
      },
      (err) => {
        this.isRegister = false;
        this.isRegisterFail = true;
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
