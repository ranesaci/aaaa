import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { MyDataBindingComponent } from './my-data-binding/my-data-binding.component';
import { MyCssComponent } from './my-css/my-css.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponentComponent,
    RoutingComponentComponent,
    MyDataBindingComponent,
    MyCssComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    
       {
        path: 'router',
        component: RoutingComponentComponent
            
        } ,
        {
        path: 'data-binding',
        component: MyDataBindingComponent
            
        } ,
         {
        path: 'my-css',
        component: MyCssComponent
            
        },
         {
        path: 'pipes',
        component: PipesComponent
            
        } 
        
        ])
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
