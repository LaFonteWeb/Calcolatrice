/* 
 * @author matteo.anoe
 */
function Gestore() {
    var espressione = "";
    var numAttuale = "";
    var risultato = 0;
    var valMaxDisplay = 99999999999;
    $(document).ready(function () {
        $("button").click(function () {
            if (this.value >= 0 && this.value <= 9) {   //Salvataggio dei numeri  e delle operazioni digitati
                espressione += this.value;
                numAttuale += this.value;
                $("#display").html(numAttuale);
  
            }
            if (this.value == "+" || this.value == "-" || this.value == "*" || this.value == "/") {
                numAttuale ="";
                if (espressione.length - 1 != "+" && espressione.length - 1 != "-" && espressione.length - 1 != "*" && espressione.length - 1 != "/") {
                    espressione += this.value;
                    $("#display").html("");
                }
            }
            if (this.value == "=") {    //Stampa del risultato
                $("#display").html("");
                risultato = eval(espressione);
                if (isNaN(risultato) || risultato == "Infinity" || risultato > valMaxDisplay) {  //Controllo del risultato
                    $("#display").html("Errore");
                } else {
                    $("#display").html(risultato);
                }
                risultato = "";
                espressione = "";
                numAttuale = "";
            }
        });
    });
}
