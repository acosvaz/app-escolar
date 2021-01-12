import { Component, OnInit} from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  form: any = {};
  isLee = false;


  constructor(private nativeAudio: NativeAudio ) {}


  ngOnInit() {
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

}
