webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_service__ = __webpack_require__(47);
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
 * Generated class for the FavoritesModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesModalPage = (function () {
    function FavoritesModalPage(navCtrl, navParams, _viewCtrl, _favoritesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._favoritesService = _favoritesService;
        this.viewCtrl = _viewCtrl;
        this.favoritesService = _favoritesService;
        this.restaurant = navParams.get('restaurant');
    }
    FavoritesModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesModalPage');
    };
    FavoritesModalPage.prototype.OnSave = function (restaurant) {
        var _this = this;
        console.log(restaurant);
        if (typeof (restaurant.key) === 'undefined') {
            this.favoritesService.AddFavoritesAF(restaurant).then(function (ref) {
                console.log(ref.key);
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this.favoritesService.UpdateFavoriteAF(restaurant.key, restaurant).then(function (ref) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    FavoritesModalPage.prototype.OnClose = function () {
        this.viewCtrl.dismiss();
    };
    FavoritesModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites-modal',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites-modal/favorites-modal.html"*/'<!--\n  Generated template for the FavoritesModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n\n \n    <ion-toolbar color="color">\n    <ion-title class="titulos">Nuevos Productos</ion-title>\n    </ion-toolbar>\n  \n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="contenedor" src="assets/imgs/pulpoide.jpg">\n  <p class="titulito">\n    Agregue un Producto\n  </p>\n  <ion-list>\n      <ion-item>\n        <ion-label class="letras" fixed>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="restaurant.nombre"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label class="letras" fixed>Cantidad</ion-label>\n          <ion-input type="text" [(ngModel)]="restaurant.cantidad"></ion-input>\n      \n      </ion-item>\n      \n      \n        <ion-item>\n          <ion-label class="letras" fixed>Precio $</ion-label>\n          <ion-input type="text" [(ngModel)]="restaurant.precio"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n        <button ion-button small round color="color"   (click)="OnSave(restaurant)">Guardar</button>\n        <button ion-button small round color="danger" (click)="OnClose()">Cerrar</button>\n      </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites-modal/favorites-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__favorites_service__["a" /* FavoritesService */]])
    ], FavoritesModalPage);
    return FavoritesModalPage;
}());

//# sourceMappingURL=favorites-modal.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_modal_favorites_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_modal_dos_favorites_modal_dos__ = __webpack_require__(231);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, modalCtrl, _favoritesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.favoritesService = _favoritesService;
        this.favoritesList$ = this.favoritesService
            .GetAllFavoritesAF()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.log(this.favorites);
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.OnNew = function () {
        var newRestaurant = { cantidad: '', nombre: '', precio: '', cantidaddos: '', nombredos: '', preciodos: '' };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__favorites_modal_favorites_modal__["a" /* FavoritesModalPage */], { restaurant: newRestaurant });
        console.log(modal);
        modal.present();
    };
    FavoritesPage.prototype.OnNewDos = function () {
        var newRestaurant = { cantidad: '', nombre: '', precio: '', cantidaddos: '', nombredos: '', preciodos: '' };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__favorites_modal_dos_favorites_modal_dos__["a" /* FavoritesModalDosPage */], { restaurant: newRestaurant });
        console.log(modal);
        modal.present();
    };
    FavoritesPage.prototype.OnNewTres = function () {
        var newRestaurant = { cantidadtres: '', nombretres: '', preciotres: '' };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__favorites_modal_favorites_modal__["a" /* FavoritesModalPage */], { restaurant: newRestaurant });
        console.log(modal);
        modal.present();
    };
    FavoritesPage.prototype.OnDelete = function (restaurant) {
        console.log(restaurant.key);
        this.favoritesService.DeleteFavoriteAF(restaurant.key);
    };
    FavoritesPage.prototype.OnUpdate = function (restaurant) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__favorites_modal_favorites_modal__["a" /* FavoritesModalPage */], { restaurant: restaurant });
        modal.present();
    };
    FavoritesPage.prototype.OnUpdateDos = function (restaurant) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__favorites_modal_dos_favorites_modal_dos__["a" /* FavoritesModalDosPage */], { restaurant: restaurant });
        modal.present();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites.html"*/'<ion-header>\n  <ion-toolbar color="color">\n    <ion-title></ion-title>\n    <div padding>\n      <ion-segment [(ngModel)]="productos">\n        <ion-segment-button value="alimentos">\n          Alimentos\n        </ion-segment-button>\n        <ion-segment-button value="bebidas">\n          Bebidas\n        </ion-segment-button>\n        <ion-segment-button value="alcohol">\n          INVENTARIO\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [ngSwitch]="productos">\n    <ion-list *ngSwitchCase="\'alimentos\'">\n      <img class="contenedor" src="assets/imgs/bebida.jpg">\n      <h4 class="titulito">Agregar producto nuevo</h4>\n      <p>\n      </p>\n      <button ion-button small round class="boton" color="color" (click)="OnNew()">Nuevo Producto</button>\n      <ion-list>\n        <ion-item>\n          \n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'bebidas\'">\n      <img class="contenedor" src="assets/imgs/cerveza.jpg">\n      <h4 class="titulito">Agregar bebida nueva</h4>\n      <p>\n      </p>\n      <button ion-button small round class="boton" color="color" (click)="OnNew()">Nueva Bebida</button>\n      <ion-list>\n        <ion-item>\n          \n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'alcohol\'">\n      <h4 class="titulito2">INVENTARIO</h4>\n      <p>\n      </p>\n      <ion-list>\n        <ion-item>\n          <ion-card padding *ngFor="let favorite of favoritesList$ | async">\n            <div class="card-title">Cantidad: {{favorite.cantidad}}</div>\n            <div class="card-subtitle">Producto: {{favorite.nombre}}</div>\n            <div class="card-title">Precio: $ {{favorite.precio}}</div>\n            <ion-icon name="refresh" (click)="OnUpdate(favorite)"></ion-icon>\n            <ion-icon name="trash" (click)="OnDelete(favorite)"></ion-icon>\n\n          </ion-card>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__favorites_service__["a" /* FavoritesService */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites-modal-dos/favorites-modal-dos.module": [
		354,
		2
	],
	"../pages/favorites/favorites-modal/favorites-modal.module": [
		355,
		1
	],
	"../pages/favorites/favorites.module": [
		356,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { reservacionesPage } from '../reservaciones/reservaciones';
//import { reservacionesPage } from '../reservaciones/reservaciones';
var TabsPage = (function () {
    function TabsPage() {
        this.tabPrincipal = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
        this.tabConfiguracion = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tabFavoritos = __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__["a" /* FavoritosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/tabs/tabs.html"*/'<ion-tabs color="color">\n  <ion-tab [root]="tabPrincipal" tabTitle="Inventario" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabFavoritos" tabTitle="Reservaciones" tabIcon="restaurant"></ion-tab>\n  <ion-tab [root]="tabConfiguracion" tabTitle="Ventas" tabIcon="logo-usd"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__porcentaje_porcentaje__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, _preferencias) {
        this.navCtrl = navCtrl;
        this.propina = 0;
        this.totalPropina = 0;
        this.totalGlobal = 0;
        this.preferencias = _preferencias;
        this.total = 0;
    }
    AboutPage.prototype.pPag = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__porcentaje_porcentaje__["a" /* PorcentajePage */]);
    };
    AboutPage.prototype.CalcularPropina = function () {
        this.totalPropina = this.costo * this.propina / 100;
        this.totalGlobal = this.costo * 1 + this.totalPropina * 1;
    };
    AboutPage.prototype.CalcularTotal = function () {
        this.total = this.total + this.costo * 1;
    };
    AboutPage.prototype.CalcularTotalPropina = function () {
        this.netoPropina = this.netoPropina * 1 + this.totalPropina * 1;
    };
    AboutPage.prototype.CalcularNeto = function () {
        this.neto = this.total - this.netoPropina;
    };
    AboutPage.prototype.Neto = function () {
        this.n = this.n + this.neto;
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.preferencias.get('propina').then(function (valor) {
            console.log(valor);
            if (valor != null) {
                _this.propina = valor;
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/about/about.html"*/'<ion-header>\n<ion-toolbar color="color">\n  <ion-title class="titulos">Ventas</ion-title>\n  <ion-buttons end>\n    <button (click)="pPag()" ion-button icon-only color="royal">\n      <ion-icon  class="arriba" name="ios-brush"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-icon name="ios-card" item-start class="icono"></ion-icon>\n  <ion-list>\n\n    <ion-item>\n      <ion-label class="letras" fixed>Costo de servicio:</ion-label>\n      <ion-input type="number" value="200" [(ngModel)]="costo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="letras" fixed>Propina:</ion-label>\n      <ion-label>{{propina}}%</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button small round class="boton" color="color" item-end (click)="CalcularPropina()">Calcular</button>\n    </ion-item>\n\n      <ion-item>\n        <ion-label class="letras" fixed>Propina:</ion-label>\n        <ion-label>${{totalPropina}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="letras" fixed>Total:</ion-label>\n        <ion-label>${{totalGlobal}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button small round color="color" item-end (click)="CalcularTotal()">Pagado</button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class="letras" fixed>Venta Actual:</ion-label>\n        <ion-label>${{total}}</ion-label>\n      </ion-item>\n\n\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorcentajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(58);
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
 * Generated class for the PorcentajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PorcentajePage = (function () {
    function PorcentajePage(navCtrl, _preferencias) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.preferencias = _preferencias;
        this.preferencias.get('propina').then(function (valor) {
            console.log(valor);
            if (valor != null) {
                _this.propina = valor;
            }
            else {
                _this.propina = 10;
            }
        });
    }
    PorcentajePage.prototype.Guardar = function () {
        this.preferencias.set('propina', this.propina);
    };
    PorcentajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-porcentaje',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/porcentaje/porcentaje.html"*/'<ion-header>\n  <ion-toolbar color="color">\n    <ion-title class="titulos">Porcentaje</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img class="contenedor" src="assets/imgs/pulpo.png">\n  <h4>Configuracion de Porcentaje</h4>\n \n  <ion-list>\n    <ion-item>\n      <ion-label class="letras" fixed>% de propina</ion-label>\n      <ion-input type="number" value="0" [(ngModel)]="propina"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button small round class="boton" color="color" item-end (click)="Guardar()">Guardar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/porcentaje/porcentaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PorcentajePage);
    return PorcentajePage;
}());

//# sourceMappingURL=porcentaje.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritosPage = (function () {
    function FavoritosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/favoritos/favoritos.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="color">\n    <ion-title class="titulos">Reservaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <img class="contenedor" src="assets/imgs/camaron.svg">\n  <h4>Configuracion de Reservaciones</h4>\n  \n  <ion-list>\n    <ion-item>\n      <ion-label class="letras" fixed>Cliente:</ion-label>\n      <ion-input type="text" value="Toño" ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <button ion-button small round class="boton" color="color" item-end>Agregar</button>\n    </ion-item>\n  </ion-list>\n  \n  <p>\n\n  </p>\n\n  <ion-list>\n    <ion-card color="secondary" class="abajo">\n    <ion-item >\n      <ion-label class="letras" fixed>Cliente:</ion-label>\n      <ion-input type="text" value="Maria"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label class="letras" fixed>Asientos:</ion-label>\n      <ion-input type="text" value="4"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label class="letras" fixed>Fecha:</ion-label>\n      <ion-input type="text" value="07/09/2018"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label class="letras" fixed>Hora:</ion-label>\n      <ion-input type="text" value="14:50"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label class="letras" fixed>Telefono:</ion-label>\n      <ion-input type="text" value="6182653498"></ion-input>\n    </ion-item>\n    </ion-card>\n    </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-card color="primary" padding *ngFor="let reserv of reservacionesList$ | async">\n        <div class="card-title">Nombre: {{reservacion.nombre}}</div>\n        <div class="card-subtitle">Asientos: {{reservacion.asientos}}</div>\n        <div class="card-title">Hora:  {{reservacion.hora}}</div>\n        <div class="card-title">Fecha:  {{reservacion.fecha}}</div>\n        <div class="card-title">Telefono:  {{reservacion.telefono}}</div>\n        <ion-icon name="refresh" (click)="OnUpdate(favorite)"></ion-icon>\n        <ion-icon name="trash" (click)="OnDelete(favorite)"></ion-icon>\n\n      </ion-card>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/favoritos/favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesModalDosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_service__ = __webpack_require__(47);
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
 * Generated class for the FavoritesModalDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesModalDosPage = (function () {
    function FavoritesModalDosPage(navCtrl, navParams, _viewCtrl, _favoritesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._favoritesService = _favoritesService;
        this.viewCtrl = _viewCtrl;
        this.favoritesService = _favoritesService;
        this.restaurant = navParams.get('restaurant');
    }
    FavoritesModalDosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesModalDosPage');
    };
    FavoritesModalDosPage.prototype.OnSave = function (restaurant) {
        var _this = this;
        console.log(restaurant);
        if (typeof (restaurant.key) === 'undefined') {
            this.favoritesService.AddFavoritesAF(restaurant).then(function (ref) {
                console.log(ref.key);
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this.favoritesService.UpdateFavoriteAF(restaurant.key, restaurant).then(function (ref) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    FavoritesModalDosPage.prototype.OnClose = function () {
        this.viewCtrl.dismiss();
    };
    FavoritesModalDosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites-modal-dos',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites-modal-dos/favorites-modal-dos.html"*/'<!--\n  Generated template for the FavoritesModalDosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n  <ion-toolbar color="color">\n    <ion-title class="titulos">Nuevas Bebidas</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="contenedor" src="assets/imgs/bebida.jpg">\n  <p class="titulito">\n    Agregue una bebida\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-label class="letras" fixed>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="restaurant.nombredos"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="letras" fixed>Cantidad</ion-label>\n      <ion-input type="text" [(ngModel)]="restaurant.cantidaddos"></ion-input>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label class="letras" fixed>Precio $</ion-label>\n      <ion-input type="text" [(ngModel)]="restaurant.preciodos"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button small round color="color" (click)="OnSave(restaurant)">Guardar</button>\n      <button ion-button small round color="danger" (click)="OnClose()">Cerrar</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/favorites/favorites-modal-dos/favorites-modal-dos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__favorites_service__["a" /* FavoritesService */]])
    ], FavoritesModalDosPage);
    return FavoritesModalDosPage;
}());

//# sourceMappingURL=favorites-modal-dos.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_favorites_favorites_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites_modal_favorites_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_porcentaje_porcentaje__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    apiKey: "AIzaSyBoWKc3ohOmey61VJsDYEzL6ayegQSzpv0",
    authDomain: "restaurantpropina.firebaseapp.com",
    databaseURL: "https://restaurantpropina.firebaseio.com",
    projectId: "restaurantpropina",
    storageBucket: "restaurantpropina.appspot.com",
    messagingSenderId: "14205626439"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites_modal_favorites_modal__["a" /* FavoritesModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_porcentaje_porcentaje__["a" /* PorcentajePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__["a" /* FavoritosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites-modal-dos/favorites-modal-dos.module#FavoritesModalPageModule', name: 'FavoritesModalDosPage', segment: 'favorites-modal-dos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites-modal/favorites-modal.module#FavoritesModalPageModule', name: 'FavoritesModalPage', segment: 'favorites-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* Config */].firebase),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites_modal_favorites_modal__["a" /* FavoritesModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_porcentaje_porcentaje__["a" /* PorcentajePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__["a" /* FavoritosPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_0__pages_favorites_favorites_service__["a" /* FavoritesService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { reservacionesPage } from '../reservaciones/reservaciones';
var HomePage = (function () {
    function HomePage(navCtrl, _preferencias) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.pPag = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Abigail/Desktop/pulpo/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="color">\n    <ion-title class="titulos">RESERVACIONES</ion-title>\n    <ion-buttons end>\n      <button (click)="pPag()" ion-button icon-only color="royal">\n        <ion-icon class="arriba" name="ios-brush"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-content padding>\n  <h4 class="titulito">Agregar lugar reservado</h4>\n  <p>\n  </p>\n\n  <ion-item>\n    <ion-label class="letras" fixed>Nombre:</ion-label>\n    <ion-label>{{nombrecito}}</ion-label>\n  </ion-item>\n  \n  \n</ion-content>'/*ion-inline-end:"/Users/Abigail/Desktop/pulpo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
    }
    Config.firebase = {
        apiKey: "AIzaSyBoWKc3ohOmey61VJsDYEzL6ayegQSzpv0",
        authDomain: "restaurantpropina.firebaseapp.com",
        databaseURL: "https://restaurantpropina.firebaseio.com",
        projectId: "restaurantpropina",
        storageBucket: "",
        messagingSenderId: "14205626439"
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesService = (function () {
    function FavoritesService(http, db) {
        this.db = db;
        this.restaurantListRef = this.db.list('restaurants');
        this.restaurantListDosRef = this.db.list('restaurantsdos');
    }
    FavoritesService.prototype.GetAllFavoritesAF = function () {
        return this.restaurantListRef;
    };
    FavoritesService.prototype.GetAllFavoritesDosAF = function () {
        return this.restaurantListDosRef;
    };
    FavoritesService.prototype.AddFavoritesAF = function (restaurant) {
        return this.restaurantListRef.push(restaurant);
    };
    FavoritesService.prototype.AddFavoritesDosAF = function (restaurant) {
        return this.restaurantListDosRef.push(restaurant);
    };
    FavoritesService.prototype.DeleteFavoriteAF = function (key) {
        return this.restaurantListRef.remove(key);
    };
    FavoritesService.prototype.DeleteFavoriteDosAF = function (key) {
        return this.restaurantListDosRef.remove(key);
    };
    FavoritesService.prototype.UpdateFavoriteAF = function (key, restaurant) {
        return this.restaurantListRef.update(key, restaurant);
    };
    FavoritesService.prototype.UpdateFavoriteDosAF = function (key, restaurant) {
        return this.restaurantListDosRef.update(key, restaurant);
    };
    FavoritesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FavoritesService);
    return FavoritesService;
}());

//# sourceMappingURL=favorites.service.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map