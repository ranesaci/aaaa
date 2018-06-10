import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-my-css',
    templateUrl: './my-css.component.html',
    styleUrls: ['./my-css.component.css']
})
export class MyCssComponent implements OnInit {

    cityList = ["Pune", "Mumbai", "fef"];
    cityListModel = "";

    addCity = function() {
        if (this.cityListModel != '') {
            this.cityList.push(this.cityListModel);
            this.cityListModel = "";
            
            
        }
    }

    removeCity = function(index) {

        this.cityList.splice(index, 1);
    }




  constructor() { }

  ngOnInit() {
  }

}
