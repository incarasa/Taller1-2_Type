import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTable : HTMLElement = document.getElementById("tablaSeries")!;
let promedioTable : HTMLElement = document.getElementById("tablaPromedio")!;

mostrarSeries(series);
mostrarPromedioTemporadas(series);

function mostrarSeries(series : Array<Serie>)

{
    let seriesTBody : HTMLElement = document.createElement("tbody");
    for(let serie of series)
        {
            let trElement : HTMLElement = document.createElement("tr");
            trElement.innerHTML=
            `<td>${serie.id}</td>
             <td>${serie.name}</td>
             <td>${serie.channel}</td>
             <td>${serie.seasons}</td>`;
             seriesTBody.appendChild(trElement);
        }
    
    seriesTable.appendChild(seriesTBody);

    console.log("PROCESO COMPLETADO CON EXITO")
}

function darPromedioTemporadas(series : Array<Serie>) : number
{
    let totalTemporadas : number = 0;

    for(let index = 0; index < series.length; index++)
        {
            totalTemporadas += series[index].seasons;
        }
    
    let promedioTemporadas : number = totalTemporadas/series.length;
    return promedioTemporadas;
}


function mostrarPromedioTemporadas(series : Array<Serie>)
{
    let promedioTemporadas : number = darPromedioTemporadas(series);
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Season average: ${promedioTemporadas}</b></td>`;
    promedioTable.appendChild(trElement);

}