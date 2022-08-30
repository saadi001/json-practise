const loadRandom = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayRandom(data.results))
}

const displayRandom = users =>{
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-style')
        userDiv.innerHTML = `
            <a href="${user.picture.medium}">click to see picture</a>
            <h3>Name: ${user.name.first} ${user.name.last}</h3>
            <h5>email: ${user.email} </h5>
            <h5>Gender: ${user.gender}</h5>
            <p> location: ${user.location.city}, ${user.location.country}</p>
            
        `;
        userContainer.appendChild(userDiv);
    }
}

loadRandom();