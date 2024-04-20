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
            let tdIdElement : HTMLElement = document.createElement("td");
            let tdNameElement : HTMLElement = document.createElement("td");
            let tdChannelElement : HTMLElement = document.createElement("td");
            let tdSeasonsElement : HTMLElement = document.createElement("td");

            tdIdElement.innerText = serie.id.toString();
            tdNameElement.innerText = serie.name;
            tdChannelElement.innerText = serie.channel;
            tdSeasonsElement.innerText = serie.seasons.toString();

            tdNameElement.addEventListener('click', () => {
                updateCard(serie);
              });

            trElement.appendChild(tdIdElement);
            trElement.appendChild(tdNameElement);
            trElement.appendChild(tdChannelElement);
            trElement.appendChild(tdSeasonsElement);

            seriesTBody.appendChild(trElement);
            }
    seriesTable.appendChild(seriesTBody);
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

function updateCard(series : Serie)
{
    const titleElement = document.getElementById('cardTitle') as HTMLHeadingElement;
    const descriptionElement = document.getElementById('cardDescription') as HTMLParagraphElement;
    const imageElement = document.getElementById('cardImage') as HTMLImageElement;
    const linkElement = document.getElementById('cardLink') as HTMLAnchorElement;

    titleElement.innerText = series.name;
    descriptionElement.innerText = series.plot;
    imageElement.src = series.poster;
    imageElement.alt = `Image of ${series.name}`; // Accessibility for screen readers
    linkElement.href = series.poster;
    linkElement.innerText = `Learn more about ${series.name}`;
}
