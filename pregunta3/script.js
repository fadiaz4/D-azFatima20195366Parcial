var sumar = document.getElementById("sumar");
sumar.addEventListener("click", displayDetails);


function displayDetails() {
    var row = 1;

    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var sumatoria = parseFloat(numero1) + parseFloat(numero2);

    if (sumatoria > 10) {
        var status = "10+"
    } else if (sumatoria == 10) {
        var status = "10="
    } else if (sumatoria < 10) {
        var status = "10-"
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = numero1
    cell2.innerHTML = numero2
    cell3.innerHTML = sumatoria
    cell4.innerHTML = status

    row++;

}

function Sumatoriatodos() {

    alert('suma de todas las sumas')
}