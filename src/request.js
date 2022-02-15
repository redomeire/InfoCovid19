import {
    inputOne,
    inputTwo,
    select,
    resultDiv,
    searchButton,
    canvasChart
} from './variables';
import Chart from 'chart.js/auto';
import makeResultCard from './MakeResultCard';
let dates = [],
    confirmedPositive = [],
    confirmedDead = [];

searchButton.addEventListener("click", async () => {
    await fetch(`https://api.covid19api.com/world?from=${inputOne.value}T00:00:00Z&to=${inputTwo.value}T00:00:00Z`)
        .then(response => response.json())
        .then(response => {
            if (inputOne.value < inputTwo.value) {
                let cards = '';
                console.log(response);
                let newConfirmedTotal = 0,
                    newDeathsTotal = 0,
                    totalConfirmed = 0,
                    totalDeaths = 0;
                //reset to 0
                dates = [];
                confirmedPositive = [];
                confirmedDead = [];
                for (let i = 0; i < response.length; i++) {
                    newConfirmedTotal += response[i].NewConfirmed;
                    newDeathsTotal += response[i].NewDeaths;
                    dates.push(response[i].Date);
                    confirmedPositive.push(response[i].NewConfirmed);
                    confirmedDead.push(response[i].NewDeaths);
                }
                totalConfirmed += response[response.length - 1].TotalConfirmed;
                totalDeaths += response[response.length - 1].TotalDeaths;
                if (select.value == 'Card') {
                    canvasChart.style.display = "none";
                    cards = makeResultCard(newConfirmedTotal, newDeathsTotal, totalConfirmed, totalDeaths);
                    resultDiv.innerHTML = cards;
                } else if (select.value == 'Chart') {
                    canvasChart.style.display = "block";
                    destroyChart();
                    resultDiv.innerHTML = ``;
                    activateChart(dates);
                }
            } else {
                alert(`Tanggal 'from' tidak boleh lebih atau sama dengan tanggal 'to'`);
                if (select.value == 'Card') {
                    resultDiv.innerHTML = ``;
                } else if (select.value == 'Chart') {
                    canvasChart.style.display = "none";
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
});

const activateChart = (dates) => {
    const data = {
        labels: dates,
        datasets: [{
            label: 'Kasus terkonfirmasi per hari',
            responsive: true,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: confirmedPositive,
        }],
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'x',
        }
    };

    if (window.innerWidth < 768) {
        config.options.indexAxis = 'y';
    } else {
        config.options.indexAxis = 'x';
    }

    const myChart = new Chart(
        canvasChart,
        config
    );
}

const destroyChart = () => {
    let chartStatus = Chart.getChart("makeChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
}