import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditardosPageRoutingModule } from './editardos-routing.module';

import { EditardosPage } from './editardos.page';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditardosPageRoutingModule,
    FileUploadModule
  ],
  declarations: [EditardosPage]
})
export class EditardosPageModule {}
