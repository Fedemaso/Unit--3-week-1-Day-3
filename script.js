document
  .getElementById("calcolaTasseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const codredd = parseInt(document.getElementById("codredd").value);
    const redditoannuolordo = parseInt(
      document.getElementById("redditoannuolordo").value
    );
    const tasseinps = parseInt(document.getElementById("tasseinps").value);
    const tasseirpef = parseInt(document.getElementById("tasseirpef").value);

    let lavoratore;

    if (codredd === 1) {
      lavoratore = new LavoratoriAutonomi.LavoratoreAutonomoCategoriaA(
        codredd,
        redditoannuolordo,
        tasseinps,
        tasseirpef
      );
    } else if (codredd === 2) {
      lavoratore = new LavoratoriAutonomi.LavoratoreAutonomoCategoriaB(
        codredd,
        redditoannuolordo,
        tasseinps,
        tasseirpef
      );
    } else {
      alert("Coefficienti di redditività validi sono 1 o 2");
      return;
    }

    const redditoAnnuoNetto = lavoratore.getRedditoAnnuoNetto();

    // visualizzo il risultato nella pagina
    document.getElementById("risultato").classList.remove("d-none");
    document.getElementById("redditoAnnuoNetto").innerText = redditoAnnuoNetto;
  });
