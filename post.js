function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displyPost(data))

}

function displyPost(data){
    const postContainer = document.getElementById('post-container');
    for(const detail of data){
        // console.log(detail);
        const div = document.createElement('post-container');
        div.classList.add('post');
        div.innerHTML = `
        <h3>User-${detail.id}</h3>
        <h4>post: ${detail.title}</h4>
        <p>description: ${detail.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPost();