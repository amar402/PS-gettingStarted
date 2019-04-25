import { Component } from '@angular/core';

@Component({
 selector: 'pm-root',
 //templateUrl:'app.component.html'
 template:`<h6>{{pageTitle}}</h6>
  <p>first component</p>
 `
})

export class AppComponent{
  pageTitle:string= 'ACME Product Management'
}


