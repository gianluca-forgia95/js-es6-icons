// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
/*
<!-- <div>
  <i class="fas fa-cat"></i>
  <div class="title">CAT</div>
</div> -->
*/
//Functions

//Funzione per stampare le icone in pagina con due parametri
function printIcons(place, icons) {

  place.html('');
  icons.forEach(( icon ) => {
    const {name, prefix, family, color} = icon;
    const page = `
     <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
    </div>
    `;

    place.append(page);
  });
}

const Icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

const IconsPage = $('.icons');
//Aggiungo le icons nella pagina


//Coloro le icone per tipo
const Colors = [ 'red', 'yellow', 'orange'];
const Categories = [];

Icons.forEach((item, i) => {
  if ( Categories.includes(item.category) == false ) {
    Categories.push(item.category);
  }
});

//console.log(Categories);
//console.log(Colors);

const IconsColored = Icons.map((icon) => {
  let categoryIndex = Categories.indexOf(icon.category);
  let colorItem = Colors[categoryIndex];

  icon.color = colorItem;

  return icon;

  //console.log(Colors[categoryIndex]);
});
//console.log(IconsColored);
//Aggiungo i colori alle icone nella pagina
IconsColored.forEach(( icon ) => {
  printIcons(IconsPage, IconsColored);
});

//Creo una select con i tipi di icone
const select = $('#type');
Categories.forEach((item) => {

  let option = ` <option value="${item}">${item}</option>  `;
  select.append(option);

});

select.change(
  function () {
    const optSelected = $(this).val();

    let iconFilter = IconsColored.filter((icon) =>  {
       return icon.category == optSelected;
     });
     //Svuoto l'html per poi riempirlo con solo le cose che ho filtrato
     if (iconFilter.length == 0 ) {
       iconFilter = IconsColored;
     }
     printIcons(IconsPage, iconFilter);
  }
);
