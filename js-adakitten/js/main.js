'use strict'

document.querySelector('.js-list');
document.querySelector('.js-btn-add');
document.querySelector('.new-form');
document.querySelector('.button-cancel');
document.querySelectorAll('.input');
document.querySelector('.js_in_search_desc');
document.querySelector('js_button-search');


const listElement = document.querySelector('.js-list');
const buttonMenu = document.querySelector('.js-btn-add');
const formElement = document.querySelector('.js-new-form');
const buttonCancel = document.querySelector('.button-cancel');
const inputs = document.querySelectorAll('.input');
const searchDesc = document.querySelector('.js_in_search_desc');
const searchButton = document.querySelector('.js_button-search');


const kittenDataList = [
  {
    name: "Anastacio",
    race: "",
    image: "https://dev.adalab.es/gato-siames.webp",
    desc: `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`
  },
  { 
    name: "Fiona",
    race: "Sphynx",
    image: "https://dev.adalab.es/sphynx-gato.webp",
    desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.`
  },
  {
    name: "Cielo",
    race: "Maine Coon",
    image: "https://dev.adalab.es/maine-coon-cat.webp",
    desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.`
  }
];

 console.dir(kittenDataList[2].name);
 console.dir(kittenDataList[0].desc)

// descripcion por raza
let breedText = "";

if (kittenDataList[0].race === "") {
  breedText = `Uy que despiste, no sabemos su raza`;
} else {
  breedText = kittenDataList[0].race;
  console.log (breedText)
}

const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${kittenDataList[0].image}
                alt=${kittenDataList[0].name}/>
              <h3 class="card_title">${kittenDataList[0].name.toUpperCase()}</h3>
              <h4 class="card_race">${breedText}</h4>
              <p class="card_description">${kittenDataList[0].desc}</p>
            </article>
          </li>`

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src=${kittenDataList[1].image}
              alt=${kittenDataList[1].name}/>
            <h3 class="card_title">${kittenDataList[1].name.toUpperCase()}</h3>
            <h4 class="card_race">${kittenDataList[1].race}</h4>
            <p class="card_description">${kittenDataList[1].desc}</p>
          </li>`


const kittenThree = `<li class="card">
            <img
              class="card_img"
              src= ${kittenDataList[2].image}
              alt="maine-coon-cat"/>
            <h3 class="card_title">${kittenDataList[2].name.toUpperCase()}</h3>
            <h4 class="card_race">${kittenDataList[2].race}</h4>
            <p class="card_description">${kittenDataList[2].desc}</p>
          </li>`      

listElement.innerHTML = kittenOne + kittenTwo + kittenThree;

// click en boton +
buttonMenu.addEventListener('click', (ev) =>{
   formElement.classList.toggle('collapsed');
}); 
// click boton cacelar
buttonCancel.addEventListener('click', (ev) =>{
   formElement.classList.add('collapsed');
   inputs.forEach(input => {
    input.value = '';
   });
});

// buscar gato segun descripcion
searchButton.addEventListener('click',(ev) =>{
  ev.preventDefault();
  const descSearchText = searchDesc.value;
  console.log(descSearchText)
  
  listElement.innerHTML = '';

  if (kittenOne.toLowerCase().includes(descSearchText)) {
    listElement.innerHTML += `<li>${kittenOne}</li>`;
  }

  if (kittenTwo.toLowerCase().includes(descSearchText)) {
    listElement.innerHTML += `<li>${kittenTwo}</li>`;
  }

  if (kittenThree.toLowerCase().includes(descSearchText)) {
    listElement.innerHTML += `<li>${kittenThree}</li>`;
  }

})