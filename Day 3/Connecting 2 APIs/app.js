const body = document.querySelector('body');

fetch('https://random-word-api.herokuapp.com/word?number=1')
.then(response => {
    return response.json();
})
.then ( response => {
    console.log(response);
})
.catch(err =>{
    console.log(err);
})