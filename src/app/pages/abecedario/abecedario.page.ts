import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abecedario',
  templateUrl: './abecedario.page.html',
  styleUrls: ['./abecedario.page.scss'],
})
export class AbecedarioPage implements OnInit {

  constructor() { }

	listOne = ['A - 1', 'A - 2', 'A - 3', 'A - 4','B - 1', 'B - 2', 'B - 3', 'B - 4'];
	listTwo = ['B - 1', 'B - 2', 'B - 3', 'B - 4'];

  ngOnInit() {
  }

}
