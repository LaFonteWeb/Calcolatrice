/* 
 * @author matteo.anoe
 */
function Gestore() {
    var op1 = "";  //Termini dell'operazione
    var op2 = "";
    var op = 0;     //Operazione da eseguire. Addizione = 1, sottrazione = 2, moltiplicazione = 3, divisione = 4
    var risultato = 0;
    var valMaxDisplay = 99999999999;
    $(document).ready(function () {
        $("button").click(function () {
            if (this.value >= 0 && this.value <= 9) {   //Salvataggio dei numeri  e delle operazioni digitati
                if (op == 0) {
                    if ($("#display").val().length > 11) {
                        op1 = op1 / 10;
                    }
                    op1 += this.value;
                    op1 = parseInt(op1);
                    $("#display").html(op1);
                } else {
                    if ($("#display").val().length > 11) {
                        op2 = op2 / 10;
                    }
                    op2 += this.value;
                    op2 = parseInt(op2);
                    $("#display").html(op2);
                }
            }
            if (this.value == "±") {    //Operatore ±
                if (op2 == 0) {
                    op1 = op1 * -1;
                    $("#display").html(op1);
                } else {
                    op2 = op2 * -1;
                    $("#display").html(op2);
                }
            }
            if (this.value == "+") {
                op = 1;
            } else if (this.value == "-") {
                op = 2;
            } else if (this.value == "*") {
                op = 3;
            } else if (this.value == "/") {
                op = 4;
            }
            switch (op) {       //Operazioni della matematica fondamentale: addizione, sottrazione, motliplicazione, divisione
                case 1:
                    risultato = parseInt(op1) + parseInt(op2);
                    break;
                case 2:
                    risultato = op1 - op2;
                    break;
                case 3:
                    risultato = op1 * op2;
                    break;
                case 4:
                    risultato = parseFloat(op1 / op2);
                    risultato = parseFloat(risultato.toFixed(9));
                    parseFloat(risultato);
            }
            if (this.value == "=") {    //Stampa del risultato
                if (isNaN(risultato) || risultato == "Infinity" || risultato > valMaxDisplay) {  //Controllo del risultato
                    $("#display").html("Errore");
                } else {
                    $("#display").html(risultato);
                }
                op1 = "";
                op2 = "";
                op = 0;
                risultato = 0;
            }
        });
    });
}
