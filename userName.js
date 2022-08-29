
function loadUserName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayName2(data))
}

function displayName2(names){
    // console.log(names);
    const listUl = document.getElementById('list-ul');
    for( const user of names){
        // console.log(user.name);
        // listUl.style.display = 'none';
        const li = document.createElement('li');
        li.innerText = user.name;
        listUl.appendChild(li);


    }

}