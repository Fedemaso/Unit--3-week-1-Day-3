var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var LavoratoriAutonomi;
(function (LavoratoriAutonomi) {
  var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(
      codredd,
      redditoannuolordo,
      tasseinps,
      tasseirpef
    ) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
    // calcolo reddito annuo netto
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
      return this.redditoannuolordo - this.calcolaTasse();
    };
    return LavoratoreAutonomo;
  })();
  LavoratoriAutonomi.LavoratoreAutonomo = LavoratoreAutonomo;
  var LavoratoreAutonomoCategoriaA = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaA, _super);
    function LavoratoreAutonomoCategoriaA() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    // Implemento metodo per calcolare le tasse lavoratore A
    LavoratoreAutonomoCategoriaA.prototype.calcolaTasse = function () {
      return this.tasseinps + this.tasseirpef;
    };
    return LavoratoreAutonomoCategoriaA;
  })(LavoratoreAutonomo);
  LavoratoriAutonomi.LavoratoreAutonomoCategoriaA =
    LavoratoreAutonomoCategoriaA;
  var LavoratoreAutonomoCategoriaB = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaB, _super);
    function LavoratoreAutonomoCategoriaB() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    // Implemento metodo per calcolare le tasse lavoratore B
    LavoratoreAutonomoCategoriaB.prototype.calcolaTasse = function () {
      return (this.tasseinps + this.tasseirpef) * 0.9;
    };
    return LavoratoreAutonomoCategoriaB;
  })(LavoratoreAutonomo);
  LavoratoriAutonomi.LavoratoreAutonomoCategoriaB =
    LavoratoreAutonomoCategoriaB;
})(LavoratoriAutonomi || (LavoratoriAutonomi = {}));
