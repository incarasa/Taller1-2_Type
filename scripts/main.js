import { series } from "./data.js";
var seriesTable = document.getElementById("tablaSeries");
var promedioTable = document.getElementById("tablaPromedio");
mostrarSeries(series);
mostrarPromedioTemporadas(series);
function mostrarSeries(series) {
    var seriesTBody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>".concat(serie.id, "</td>\n             <td>").concat(serie.name, "</td>\n             <td>").concat(serie.channel, "</td>\n             <td>").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
    console.log("PROCESO COMPLETADO CON EXITO");
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
