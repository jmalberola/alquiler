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
var ListadoCochesComponent = (function () {
    function ListadoCochesComponent() {
        this.titulo = "Listado de coches en alquiler";
        this.img_width = 100;
        this.mostrar_precio = true;
        this.filtro_modelo = "";
        this.coches = [
            {
                "id": 1,
                "imagen": "app/images/opel.png",
                "modelo": "Opel Corsa",
                "anyo": 2015,
                "km": 35000,
                "precio": 55,
            },
            {
                "id": 2,
                "imagen": "/app/images/fiat.jpg",
                "modelo": "Fiat Panda",
                "anyo": 2014,
                "km": 12000,
                "precio": 30,
            },
            {
                "id": 3,
                "imagen": "/app/images/hyundai.jpg",
                "modelo": "Hyundai i30",
                "anyo": 2013,
                "km": 30000,
                "precio": 45,
            },
            {
                "id": 4,
                "imagen": "/app/images/citroen.jpg",
                "modelo": "Citroen C3",
                "anyo": 2014,
                "km": 45000,
                "precio": 40,
            }
        ];
    }
    ListadoCochesComponent.prototype.mostrar_ocultar_Precio = function () {
        this.mostrar_precio = !this.mostrar_precio;
    };
    ListadoCochesComponent.prototype.ngOnInit = function () {
        console.log('Dentro de OnInit');
    };
    ListadoCochesComponent = __decorate([
        core_1.Component({
            selector: 'listado-coches',
            templateUrl: 'app/listado-coches.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListadoCochesComponent);
    return ListadoCochesComponent;
}());
exports.ListadoCochesComponent = ListadoCochesComponent;
//# sourceMappingURL=listado-coches.component.js.map