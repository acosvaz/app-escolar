import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ejercicio-agregar',
  templateUrl: './ejercicio-agregar.page.html',
  styleUrls: ['./ejercicio-agregar.page.scss'],
})
export class EjercicioAgregarPage implements OnInit {

public fileUploader: FileUploader = new FileUploader({});

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;

    });
  }

uploadFiles() {

    let files = this.getFiles();
    let requests = [];

    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      formData.append('problema' , 'si');
      formData.append('ejercicio_id' , 'no');
      requests.push(this.authService.uploadFormData(formData));

    });

    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  }

}
