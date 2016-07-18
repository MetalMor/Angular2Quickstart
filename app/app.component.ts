/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{ title }}</h1>'
})
export class AppComponent {
    title:string = "Angular 2 app";
    visible:boolean = false;
}