/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title:string = "Angular 2 app";
    visible:boolean = false;
}