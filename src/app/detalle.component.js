"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Detalle = (function () {
    function Detalle(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    Detalle.prototype.ngOnInit = function () {
        this.id = +this._route.snapshot.params['id'];
    };
    Detalle.prototype.atras = function () {
        this._router.navigate(['/listado']);
    };
    Detalle = __decorate([
        core_1.Component({
            templateUrl: 'app/detalle.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], Detalle);
    return Detalle;
}());
exports.Detalle = Detalle;
//# sourceMappingURL=detalle.component.js.map