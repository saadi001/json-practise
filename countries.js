const loadCoutries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data))
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        
    });
}

loadCoutries();