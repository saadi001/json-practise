const loadPhones = async(searchText) =>{
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = ``;
    // display 5 phone only 
    const showAll = document.getElementById('show-all');
    if(phones.length > 5){
        phones = phones.slice(0,5);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    // console.log(phones);
    const noPhoneFound = document.getElementById('no-phone-found');
    if(phones.length === 0){
        noPhoneFound.classList.remove('d-none');
    }
    else{
        noPhoneFound.classList.add('d-none');
    }

    // display phones 
    phones.forEach(phone => {
        const phonesDiv = document.createElement('div');
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML = `
        <div class="card">
                <img src="${phone.image}" class="card-img-top p-3" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        phonesContainer.appendChild(phonesDiv);
    });
    toggleSpinner(false);

}

document.getElementById('search-btn').addEventListener('click',function(){
    // star loader 
    toggleSpinner(true);
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';
})

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    toggleSpinner(true);
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = ''; 
})
// loadPhones("iphone");