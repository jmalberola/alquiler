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
var coches_service_1 = require('./coches.service');
var ListadoCochesComponent = (function () {
    function ListadoCochesComponent(_cocheservice) {
        this._cocheservice = _cocheservice;
        this.titulo = "Listado de coches en alquiler";
        this.mensaje = "";
        this.img_width = 100;
        this.mostrar_precio = true;
        this.filtro_modelo = "";
    }
    ListadoCochesComponent.prototype.mostrar_ocultar_Precio = function () {
        this.mostrar_precio = !this.mostrar_precio;
    };
    ListadoCochesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cocheservice.getCoches().subscribe(function (c) { return _this.coches = c; });
    };
    ListadoCochesComponent.prototype.onRatingClickado = function (m) {
        this.mensaje = "Recibido " + m.valor_rating;
    };
    ListadoCochesComponent = __decorate([
        core_1.Component({
            selector: 'listado-coches',
            templateUrl: 'app/listado-coches.component.html'
        }), 
        __metadata('design:paramtypes', [coches_service_1.CochesService])
    ], ListadoCochesComponent);
    return ListadoCochesComponent;
}());
exports.ListadoCochesComponent = ListadoCochesComponent;
//# sourceMappingURL=listado-coches.component.js.map