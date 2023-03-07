import { filterData, example } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';

const search_wand = document.querySelector('#search-wand');
const box_grid =document.querySelector('#box-grid');

const dataHarry = data.spells;

search_wand.addEventListener('input', () => {
  //const name = document.getElementById('search-wand').value;
  const filtrarDataByName = window.filterData(search_wand);
  printData(filtrarDataByName)
  console.log(filterData)
  

})

const printData = (data) => {
  let str = '';
  data.array.forEach(e => {
    str +=  `<div class="box">
    <h3>Nombre: ${e.name}</h3>
    <p>Descripción: ${e.description}</p>
    </div>`;
    return data;
  });
  box_grid.innerHTML = str;
}


// Mostrar el template del html pero js
const template = (list) => {
  let templateList = '';
  list.forEach((dataHarry) => {
    const card = `<div class="box">
    <h3>Nombre: ${dataHarry.name}</h3>
    <p>Descripción: ${dataHarry.description}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('box-grid').innerHTML = templateList;
}
template(dataHarry);

data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(example);
console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))
