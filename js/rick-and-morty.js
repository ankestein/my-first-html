console.clear()

const promise = fetch("https://rickandmortyapi.com/api/character")
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `error: ${response.status}`
    })
    .then(json => json.results)
    .then((json) => {
        console.log(getAliveHumans(json))
        console.log(getNames(json))
        console.log(getNameOrigin(json))
    })
    .catch((error)=>console.error(error))
    .finally(()=>(console.log("finally")));



/* Exercise 1 ------------------------------------------------------- */
function getAliveHumans(characters) {
    return characters.filter(character => character.status === "Alive" && character.species === "Human");
}

//console.log("Number of characters: ", characters.length);
//const charactersAlive = getAliveHumans(characters);
//console.log("Number of alive characters: ", charactersAlive.length);



/* Exercise 2 ------------------------------------------------------- */
function getNames(characters) {
   return characters.map(character => character.name);
}
//console.log(getNames(characters));



/* Exercise 3 ------------------------------------------------------- */
const getNameOrigin = (characters) =>
    characters.map(character => {
      return {
          name: character.name,
          origin: character.origin.name
      }
   });

//console.log(getNameOrigin(characters));

