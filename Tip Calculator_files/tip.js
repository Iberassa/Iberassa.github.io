// function calcTip() {
//     let totalElem = parseFloat(document.getElementById('subtotal').value);
//     let tip = parseFloat(document.getElementById('tip').value);
//     let total = totalElem + (totalElem*(tip / 100));
//     document.getElementById(total).innerHTML = '$' + total;
// }
function calcTip() {
let subtotal = parseFloat(document.getElementById("subtotal").value);
let tip = parseFloat(document.getElementById("tip").value);

tip = subtotal * tip / 100;
let total = subtotal + tip;
document.getElementById("total").innerHTML = '$' + total;
}