/*
* RAW CODE
 */
/*
var suger = Number(prompt("suger in kg"));
var soap = Number(prompt("soap qty"));
var sug = 40 ; 
var dove = 40 ;
var surTotal = sug * suger ;
var soapTotal = dove * soap ;
var total = surTotal + soapTotal ;
var tax = total/10;
var finalTotal = String(tax + total) ;
 
console.log("Suger in qty Kg =",suger);
console.log("Total cost of suger =",surTotal) ;
console.log("Total qty of soap =",soap);
console.log("Total cost of soap =",soapTotal) ;
console.log("Tax = ", tax);
console.log("Total Bill =",finalTotal) ;

*/
/**
 *  Little Bit Updated
*/
/*
const TAX_RATE = 0.10;
const SOAP = 40;
const SUGAR = 50;

var sugarQty = prompt('Enter Sugar Kg');
var soapQty = prompt('Enter SOAP Qty');

var totalQty = SOAP * soapQty + SUGAR * sugarQty ; 
var totalBill = totalQty + ( totalQty * TAX_RATE);

console.log(totalBill);
*/
/* 
*  MODULAR PROGRAMM
 */


function giveMeTotalBill(TAX_RATE,SOAP,SUGAR,sugarQty, soapQty) {
    
    let totalQty = SOAP * soapQty + SUGAR * sugarQty;
    let totalBill = totalQty + (totalQty * TAX_RATE);
    return { sugarQty, soapQty , totalBill };
    
}

 const BILL = [];
function Put_values() {
    const TAX = 0.10;
    const SOAP_RATE = 40;
    const SUGAR_RATE = 50; 
    
    let a = parseInt(prompt('Enter Sugar Kg'));
    let b = parseInt(prompt('Enter SOAP Qty'));

    BILL.push(giveMeTotalBill(TAX,SOAP_RATE,SUGAR_RATE,a, b));
}
Put_values();