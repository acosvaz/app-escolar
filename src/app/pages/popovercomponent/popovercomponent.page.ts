import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

//@ViewChild('IonSlides', { static: true }) slides: IonSlides;
@ViewChild("slides") slides!: any;

sliderTwo: any;

slideOptsTwo = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };

  constructor(
  private popovercontroller:PopoverController,
  private nativeAudio: NativeAudio,
  ) { 

   //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          imagen: 1
        },
        {
          imagen: 2
        },
        {
          imagen: 3
        },
        {
          imagen: 4
        },
        {
          imagen: 5
        }
      ]
    };

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
  this.slides.update();
}


  closePopover()
  {
  this.popovercontroller.dismiss();
  }

 audio(){
 // this.nativeAudio.preloadSimple('audio','adrees');
 // this.nativeAudio.play('audio');
 // this.nativeAudio.unload('audio');
  this.nativeAudio.preloadSimple('audio1' , 'assets/audio/audio1.wav').then(() => {
    this.nativeAudio.play( 'audio1' , () => this.nativeAudio.unload('audio1'));
  });
  }

}
