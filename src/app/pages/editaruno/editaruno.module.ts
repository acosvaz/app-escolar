import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarunoPageRoutingModule } from './editaruno-routing.module';

import { EditarunoPage } from './editaruno.page';

import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarunoPageRoutingModule,
    FileUploadModule
  ],
  declarations: [EditarunoPage]
})
export class EditarunoPageModule {}
