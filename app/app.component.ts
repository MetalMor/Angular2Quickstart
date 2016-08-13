/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html'
})
export class AppComponent {
    private _title: string;
    private _visible: boolean;
    constructor() {
        this.title = "Prueba Angular 2";
        this.visible = false;
    }
    switchText(): void {
        var action: string;
        this.visible = !this.visible;
        action = this.visible ? "Showing" : "Hiding";
        console.log(action + " text.");
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get visible(): boolean {
        return this._visible;
    }
    set visible(visible: boolean) {
        this._visible = visible;
    }
}