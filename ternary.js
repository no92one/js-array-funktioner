const tal1 = 10
const tal2 = 50 
let result = ""

// Vanlkig if-sats
/*
if (tal1 > tal2) {
    result = "tal 1 är större än tal 2."
} else {
    result = "tal 1 är mindre än tal 2."
}
*/

// Ternary
tal1 > tal2 ? /* Vilkoret som ska kontrolleras.*/ 
    result = "tal 1 är större än tal 2." // Om vilkoret är sant
    :
    result = "tal 1 är mindre än tal 2." // Om vilkoret är falskt

console.log(result)