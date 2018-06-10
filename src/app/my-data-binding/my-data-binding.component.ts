import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data-binding',
  templateUrl: './my-data-binding.component.html',
  styleUrls: ['./my-data-binding.component.css']
})
export class MyDataBindingComponent implements OnInit {
        
    name = "sachin";//data binding
    jsonArr= [
    {name:'sachin', city:'pune'},{name:'sachin1', city:'pune1'}
        ];

    key="approve";
  constructor() { }

  ngOnInit() {
  }

}
