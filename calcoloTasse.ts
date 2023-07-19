namespace LavoratoriAutonomi {
  export abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }

    
    abstract calcolaTasse(): number;

    // calcolo reddito annuo netto
    getRedditoAnnuoNetto(): number {
      return this.redditoannuolordo - this.calcolaTasse();
    }
  }

  export class LavoratoreAutonomoCategoriaA extends LavoratoreAutonomo {
    // Implemento metodo per calcolare le tasse lavoratore A
    calcolaTasse(): number {
  
      return this.tasseinps + this.tasseirpef;
    }
  }

  export class LavoratoreAutonomoCategoriaB extends LavoratoreAutonomo {
    // Implemento metodo per calcolare le tasse lavoratore B
    calcolaTasse(): number {
  
      return (this.tasseinps + this.tasseirpef) * 0.9;
    }
  }
}
