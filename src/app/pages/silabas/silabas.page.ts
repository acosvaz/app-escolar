import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-silabas',
  templateUrl: './silabas.page.html',
  styleUrls: ['./silabas.page.scss'],
})
export class SilabasPage implements OnInit {
    message: string;
    isRecording = false;

  constructor(private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPermission();
  }

startListening(){
    let options = {
      language: "es-MX",//fijamos el lenguage
      matches: 1,//Nos devuelve la primera opción de lo que ha escuchado
      //si ponemos otra cantidad, nos dará una variante de la palabra/frase que le hemos dicho
    }
    this.speechRecognition.startListening(options).subscribe(matches=>{
      this.message = matches[0]; //Guarda la primera frase que ha interpretado en nuestra variable
      this.cd.detectChanges();
    });
  }

stopListening() {
  this.speechRecognition.stopListening().then(() => {
  this.isRecording = false;
  });
}

  getPermission(){
    //comprueba que la aplicación tiene permiso, de no ser así nos la pide
    this.speechRecognition.hasPermission().
      then((hasPermission:boolean)=>{
        if(!hasPermission){
          this.speechRecognition.requestPermission();
        }
      });
  }

}
