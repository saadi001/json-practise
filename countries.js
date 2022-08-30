const loadCoutries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        // console.log(country);
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <h5>Capital: ${country.capital ? country.capital[0] : 'No capital'}</h5>
            <p>population: ${country.population}</P>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);

    })
}

const loadCountryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))

}

const displayCountryDetails = (country) =>{
    console.log(country);
    const detailContainer = document.getElementById('details-country');
    detailContainer.innerHTML = `
    <h2>Name: ${country.name.common}</h2>

    `;


}



loadCoutries();