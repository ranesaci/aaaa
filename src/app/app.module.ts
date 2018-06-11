import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { MyDataBindingComponent } from './my-data-binding/my-data-binding.component';
import { MyCssComponent } from './my-css/my-css.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortPipe } from './app.sort';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    SortPipe,  
    AppComponent,
    MyCustomComponentComponent,
    RoutingComponentComponent,
    MyDataBindingComponent,
    MyCssComponent,
    PipesComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
            
        } ,
        {
        path: 'forms',
        component: FormsComponent
            
        } ,
        {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
            
        } 
        ])
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
