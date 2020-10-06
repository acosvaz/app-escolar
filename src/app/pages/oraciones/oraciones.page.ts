import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.page.html',
  styleUrls: ['./oraciones.page.scss'],
})
export class OracionesPage implements OnInit {

listOne = [];
listTwo = ['Perro', 'Gato', 'Mono', 'Hoja'];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {

  	if (event.previousContainer === event.container) {
  		moveItemInArray(
  		event.container.data, 
  		event.previousIndex, 
  		event.currentIndex
  		);
  	} else {
  		transferArrayItem(
  		event.previousContainer.data,
  		event.container.data,
  		event.previousIndex, 
  		event.currentIndex);
  	}
  }

  evenPredicate(item: CdkDrag<string[]>) {
    return item.data;
  }

  noReturnPredicate() {
    return false;
  }

}
