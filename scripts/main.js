import { series } from "./data.js";
var seriesTable = document.getElementById("tablaSeries");
var promedioTable = document.getElementById("tablaPromedio");
mostrarSeries(series);
mostrarPromedioTemporadas(series);
function mostrarSeries(series) {
    var seriesTBody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        var tdIdElement = document.createElement("td");
        var tdNameElement = document.createElement("td");
        var tdChannelElement = document.createElement("td");
        var tdSeasonsElement = document.createElement("td");
        tdIdElement.innerText = serie.id.toString();
        tdNameElement.innerText = serie.name;
        tdChannelElement.innerText = serie.channel;
        tdSeasonsElement.innerText = serie.seasons.toString();
        tdNameElement.addEventListener('click', function () {
            updateCard(serie);
        });
        trElement.appendChild(tdIdElement);
        trElement.appendChild(tdNameElement);
        trElement.appendChild(tdChannelElement);
        trElement.appendChild(tdSeasonsElement);
        seriesTBody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTBody);
}
function darPromedioTemporadas(series) {
    var totalTemporadas = 0;
    for (var index = 0; index < series.length; index++) {
        totalTemporadas += series[index].seasons;
    }
    var promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas;
}
function mostrarPromedioTemporadas(series) {
    var promedioTemporadas = darPromedioTemporadas(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Season average: ".concat(promedioTemporadas, "</b></td>");
    promedioTable.appendChild(trElement);
}
function updateCard(series) {
    var titleElement = document.getElementById('cardTitle');
    var descriptionElement = document.getElementById('cardDescription');
    var imageElement = document.getElementById('cardImage');
    var linkElement = document.getElementById('cardLink');
    titleElement.innerText = series.name;
    descriptionElement.innerText = series.plot;
    imageElement.src = series.poster;
    imageElement.alt = "Image of ".concat(series.name); // Accessibility for screen readers
    linkElement.href = series.poster;
    linkElement.innerText = "Learn more about ".concat(series.name);
}
