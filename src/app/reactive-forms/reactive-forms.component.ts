import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-forms',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

    employee_form;
    
    onSubmit= function(employee){
        console.log(employee);
        }

    constructor() { }

    ngOnInit() {
      this.employee_form = new FormGroup({
      name  : new FormControl("Myname"), 
      age  : new FormControl("rer"),
      city  : new FormControl("pune")
          
          });
    }

}
