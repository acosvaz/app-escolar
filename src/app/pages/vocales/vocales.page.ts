import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { PopovercomponentPage} from '../../pages/popovercomponent/popovercomponent.page';
import { ModalPage} from '../../pages/modal/modal.page';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vocales',
  templateUrl: './vocales.page.html',
  styleUrls: ['./vocales.page.scss'],
})

export class VocalesPage implements OnInit {

sliderTwo: any;

  constructor(
  private popover: PopoverController,
  private nativeAudio: NativeAudio,
  private modalController: ModalController,
  private router: Router
  ) {

    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          imagen: 1,
          otro: "uno",
          audio: "audio1",
          adrees: "assets/audio/audio1.wav",
          ej_imagen1: 1,
          ej_imagen2: 2,
          ej_imagen3: 3,
          ej_name1: "audio1",
          ej_name2: "audio2",
          ej_name3: "audio3",
          ej_audio1: "assets/audio/audio1.wav",
          ej_audio2: "assets/audio/audio2.wav",
          ej_audio3: "assets/audio/audio3.wav"
        },
        {
          imagen: 2,
          otro: "dos",
          audio: "audio2",
          adrees: "assets/audio/audio2.wav",
          ej_imagen1: 1,
          ej_imagen2: 2,
          ej_imagen3: 3,
          ej_name1: "audio1",
          ej_name2: "audio2",
          ej_name3: "audio3",
          ej_audio1: "assets/audio/audio1.wav",
          ej_audio2: "assets/audio/audio2.wav",
          ej_audio3: "assets/audio/audio3.wav"
        },
        {
          imagen: 3,
          otro: "tres",
          audio: "audio3",
          adrees: "assets/audio/audio3.wav",
          ej_imagen1: 1,
          ej_imagen2: 2,
          ej_imagen3: 3,
          ej_name1: "audio1",
          ej_name2: "audio2",
          ej_name3: "audio3",
          ej_audio1: "assets/audio/audio1.wav",
          ej_audio2: "assets/audio/audio2.wav",
          ej_audio3: "assets/audio/audio3.wav"
        },
        {
          imagen: 4,
          otro: "cuatro",
          audio: "audio4",
          adrees:"assets/audio/audio4.wav",
          ej_imagen1: 1,
          ej_imagen2: 2,
          ej_imagen3: 3,
          ej_name1: "audio1",
          ej_name2: "audio2",
          ej_name3: "audio3",
          ej_audio1: "assets/audio/audio1.wav",
          ej_audio2: "assets/audio/audio2.wav",
          ej_audio3: "assets/audio/audio3.wav"
        },
        {
          imagen: 5,
          otro: "cinco",
          audio: "audio5",
          adrees: "assets/audio/audio5.wav",
          ej_imagen1: 1,
          ej_imagen2: 2,
          ej_imagen3: 3,
          ej_name1: "audio1",
          ej_name2: "audio2",
          ej_name3: "audio3",
          ej_audio1: "assets/audio/audio1.wav",
          ej_audio2: "assets/audio/audio2.wav",
          ej_audio3: "assets/audio/audio3.wav"
        }
      ]
    };

   }


    ngOnInit() {
  }

  audio(audio: string, adrees: string){
  console.log(audio + "   " + adrees);
  this.nativeAudio.preloadSimple( audio , adrees).then(() => {
    this.nativeAudio.play(audio, () => this.nativeAudio.unload(audio));
  });
  }

  createPopover(){
  this.popover.create(
  {
  component: PopovercomponentPage, 
  cssClass: 'my-custom-class',
  showBackdrop: false
    }).then((popoverElement)=>{
    popoverElement.present();
    })
  }

    async presentPopover(evento) {
    const popover = await this.popover.create({
      component: PopovercomponentPage,
      cssClass: 'my-custom-class',
      event: evento,
      translucent: true
    });
    return await popover.present();
  }

  async openModal(otro, imagen1, imagen2, imagen3, name1, name2, name3, audio1, audio2, audio3){

  const modal = await this.modalController.create({
  component: ModalPage,
  componentProps: {
  custom_id: otro,
  imagen1: imagen1,
  imagen2: imagen2,
  imagen3: imagen3,
  name1: name1,
  name2: name2,
  name3: name3,
  audio1: audio1,
  audio2: audio2,
  audio3: audio3
  }
  });
  modal.present();
  }


}