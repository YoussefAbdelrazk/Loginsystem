document.getElementById('userName').innerHTML = localStorage.getItem('userName');



document.getElementById('logBtn').addEventListener('click', function () {
    localStorage.removeItem('userName');
})


// var xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=pizza', true);


// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {

//     var data = JSON.parse(xhr.responseText);
//     var recipes = data.recipes;
//     var recipesContainer = document.getElementById('recipes');


//     recipesContainer.innerHTML = '';


//     recipes.forEach(function(recipe) {
//       var html = `
//         <div class="col-md-4 ">
//             <div class="card mb-4 shadow-sm">
//                 <img src="${recipe.image_url}" class="card-img-top " alt="${recipe.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${recipe.title}</h5>
//                     <p class="card-text">Publisher: ${recipe.publisher}</p>
//                     <a href="${recipe.source_url}" target="_blank" class="btn btn-primary">View Recipe</a>
//                 </div>
//             </div>
//         </div>`;
//       recipesContainer.innerHTML += html;
//     });
//   } else {

//     console.error('Request failed. Status:', xhr.status);
//   }
// };


// xhr.onerror = function () {
//   console.error('Request failed.');
// };


// xhr.send();



async function getRecipe(){
  let res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
  let data = await res.json()
  let recipes = data.recipes

  var recipesContainer = document.getElementById('recipes');
  recipesContainer.innerHTML = '';
  recipes.forEach((recipe)=> {
    var html = `
      <div class="col-lg-4 d-flex align-items-stretch ">
          <div class="card mb-4 shadow-sm ">
              <img src="${recipe.image_url}" class="card-img-top w-100 " alt="${recipe.title}">
              <div class="card-body">
                  <h5 class="card-title">${recipe.title}</h5>
                  <p class="card-text">Publisher: ${recipe.publisher}</p>
                  <a href="${recipe.source_url}" target="_blank" class="btn btn-primary">View Recipe</a>
              </div>
          </div>
      </div>`;
    recipesContainer.innerHTML += html;
  });
}
  
  

getRecipe();

