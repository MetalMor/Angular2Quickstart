'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Prueba componente de Angular 2
 * Created by becari on 18/07/2016.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        var buttonText = [];
        this.title = "Prueba Angular 2";
        this.visible = false;
        buttonText[true] = "Hide";
        buttonText[false] = "Show";
        this.buttonText = buttonText;
    }
    AppComponent.prototype.switchText = function () {
        this.visible = !this.visible;
    };
    AppComponent.prototype.getButtonText = function () {
        return this.buttonText[this.visible];
    };
    Object.defineProperty(AppComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (visible) {
            this._visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "buttonText", {
        get: function () {
            return this._buttonText;
        },
        set: function (buttonText) {
            this._buttonText = buttonText;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map