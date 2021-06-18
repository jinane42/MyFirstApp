// FRONT END FILE TO INTERACT WITH THE DOM

// Objectif : quand je recherche le nom d'un animal en cliquant sur la loupe, une recherche s'effectue dans la DB et ouvre une nouvelle page avec le résultat

let inputSearch = document.querySelector('#inputSearch');
let btnSearch = document.querySelector('#btnSearch');
let sect3 = document.querySelector('.sect3');

const searchAnimal = () => {
    fetch('/searchAnimal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', body: JSON.stringify()
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

btnSearch.addEventListener('click', () => {
    searchAnimal();
    sect3.insertAdjacentElement
})