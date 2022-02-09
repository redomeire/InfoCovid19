import {
    inputOne,
    inputTwo,
    select,
    resultDiv,
    searchButton
} from './variables';

import makeResultCard from './MakeResultCard';
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

                    for (let i = 0; i < response.length; i++) {
                        newConfirmedTotal += response[i].NewConfirmed;
                        newDeathsTotal += response[i].NewDeaths;
                    }

                    totalConfirmed += response[response.length - 1].TotalConfirmed;
                    totalDeaths += response[response.length - 1].TotalDeaths;
                    cards += makeResultCard(newConfirmedTotal, newDeathsTotal, totalConfirmed, totalDeaths);
                    resultDiv.innerHTML = cards;
                } else {
                    alert(`Tanggal 'from' tidak boleh lebih atau sama dengan tanggal 'to'`);
                    resultDiv.innerHTML = '';
                }
            })
            .catch(error => {
                console.log(error);
            })
    });