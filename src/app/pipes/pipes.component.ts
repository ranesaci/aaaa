import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
        
    name = "Sachin Rane";
    date = new Date(1987,6,1);
    arrData = [21,43,545,67,656,434,45];

  constructor() { }

  ngOnInit() {
  }

}
