var url = "https://api.exchangeratesapi.io/";

var data;

window.onload = function () {

    data = getData('https://api.exchangeratesapi.io/latest?base=EUR');

    var today = data.date;
    console.log(today);

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: base + '/' + "RON"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    var xVal = 1;
    var yVal;
    var dataLength = 12; // number of dataPoints visible at any point

    for (var j = 0; j < dataLength; j++) {
        var anotherDate = lastMounth(today, 11 - j).getFullYear() + '-' + lastMounth(today, 11 - j).getMonth() + '-' + lastMounth(today, 11 - j).getDate();
        console.log(anotherDate);
        data = getData('https://api.exchangeratesapi.io/' + anotherDate +  '?base=' + base);
        yVal = data.rates["RON"];
        // xVal = 1;
        // console.log('xVal ' + xVal);
        dps.push({
            x: xVal,
            y: yVal
        });
        xVal++;
    }

    if (dps.length > dataLength) {
        dps.shift();
    }

    chart.render();

}

var getData = function (url) {
    var resp;
    var xmlHttp;

    resp = '';
    xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null) {
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        resp = xmlHttp.responseText;
    }

    return JSON.parse(resp);
}

var lastMounth = function (date1, count) {
    var dt = new Date(date1);
    if(dt.getMonth() - count != 0)
        return new Date((dt.setMonth(dt.getMonth() - count)));
    else {
        dt.setFullYear(dt.getFullYear() - 1);
        dt.setMonth(11);
        return dt;
    } 
}