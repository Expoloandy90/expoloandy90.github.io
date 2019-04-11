
var table = document.getElementById("myTable");
var currentcy = ["RON", "EUR", "USD", "BGN", "GBP", "RUB", "CAD", "JPY", "CHF", "TRY", "HRK", "NOK", "DKK", "CZK", "HUF", "ISK", "PLN", "SEK"];
var base = "EUR";
var data;
var url ="https://api.exchangeratesapi.io/";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Begin accessing JSON data here
        data = JSON.parse(this.responseText);
        var table = document.getElementById("myTable");
        for (var i = 0; i < currentcy.length; i++) {
            if (currentcy[i] != "EUR") {
                var row = table.insertRow(table.rows.length);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = currentcy[i];
                cell2.innerHTML = data.rates[currentcy[i]];
            }
        }
        //Urmeaza sa fac o functie care arata cum a evoluat pretul de ieri pana azi
        //O functie care returneaza data de ieri in format 2019-04-11
    }
};
xmlhttp.open("GET", url + 'latest?base=' + base, true);
xmlhttp.send();

var yesterday = function (date1) {
    var dt = new Date(date1);
    return new Date((dt.setDate(dt.getDate() - 1))).toString();
}