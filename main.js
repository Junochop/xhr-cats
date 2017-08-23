var catCrap = [
{name: "Fluffy", color: "Green", url: "http://static.boredpanda.com/blog/wp-content/uploads/2014/12/green-cat-varna-bulgaria-11.jpg"},
{name: "Dom", color: "White", url: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/Ragdoll1.jpg"},
{name: "Keanu", color: "Red", url: "http://static2.businessinsider.com/image/57236227dd0895d0028b45e3/keanu-exploits-the-internets-obsession-with-cats--and-it-pretty-much-works.jpg"}
];


function domString() {
  var catString = "";
  for(var i = 0; i < catCrap.length; i++) {
    catString += `<div class="cat">`
    catString += `<div>${catCrap[i].name}"</div>`
    catString += `<div>${catCrap[i].color}" </div>`
    catString += `<div>${catCrap[i].url}"</div>`
    catString += `</div>`

  }

  return catString;
}

function writeToDom() {
  for (var i = 0; i < catCrap.length; i++) {
    
   getElementByID("kat-koral").innerHTML = domString();

  }

}


domString(cats);