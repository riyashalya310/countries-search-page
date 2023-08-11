let search_lists = []; /* Update here */
let searchInputEle = document.getElementById("searchInput");
let spinnerEle = document.getElementById("spinner");
let resultCountriesEl = document.getElementById("resultCountries");

function getCountries() {
    /* Update here */
    let searchInput = searchInputEle.value;
    spinnerEle.classList.add("d-none");
    resultCountriesEl.textContent = "";
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            search_lists = data; /* Update here */
            for (let country of search_lists) {
                /* Update here */
                let countryName = country.name; /* Update here */

                if (countryName.includes(searchInput)) {
                    /* Update here */
                    let countryEl = document.createElement("div");
                    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
                    resultCountriesEl.appendChild(countryEl);

                    // Creating and appending countryFlagEl to the countryEl
                    let countryFlagEl = document.createElement("img");
                    countryFlagEl.src = country.flag;
                    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
                    countryEl.appendChild(countryFlagEl);

                    // Creating and appending countryInfoEl to the countryEl
                    let countryInfoEl = document.createElement("div");
                    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
                    countryEl.appendChild(countryInfoEl);

                    // Creating and appending countryNameEl to the countryInfoEl
                    let countryNameEl = document.createElement("p");
                    countryNameEl.textContent = country.name;
                    countryNameEl.classList.add("country-name");
                    countryInfoEl.appendChild(countryNameEl);

                    // Creating and appending countryPopulationEl to the countryInfoEl
                    let countryPopulationEl = document.createElement("p");
                    countryPopulationEl.textContent = country.population;
                    countryPopulationEl.classList.add("country-population");
                    countryInfoEl.appendChild(countryPopulationEl);
                }
            }
        });
}

getCountries(); /* call this function globally */

searchInputEle.addEventListener("keyup", getCountries);