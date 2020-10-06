import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

@ViewChild('IonSlides', { static: false }) slides: IonSlides;

sliderUno: any;


@Input() custom_id;
@Input() imagen1;
@Input() imagen2;
@Input() imagen3;
@Input() name1;
@Input() name2;
@Input() name3;
@Input() audio1;
@Input() audio2;
@Input() audio3;

  constructor( private modalController: ModalController, private nativeAudio: NativeAudio ) {}


  ngOnInit() {
     this.slides.update();
  }

  clickin(){
  this.modalController.dismiss();
  }

  audio(audio: string, adrees: string){
  console.log(audio + "   " + adrees);
  this.nativeAudio.preloadSimple( audio , adrees).then(() => {
    this.nativeAudio.play(audio, () => this.nativeAudio.unload(audio));
  });
  }

}
