/*
1) DESCTRUCTURE ARRAY
 - Erstelle ein Array von Namen
 - Greife mittels Destructuring auf mehrere Elemente des Arrays zu und gebe sie in der Konsole aus.
   Verwende dabei keine Indizes!
*/

const names = ["Tim", "Laura", "Jenny", "Bob"]
const [name1, name2, ...remainder] = names
console.log(name1)
console.log(name2)
console.log(remainder)


/*
2) DESTRUCTURE OBJECT
 - Erstelle ein Personen-Objekt
 - Greife mittels Destructuring auf mehrere Attribute des Objekts zu und gebe sie in der Konsole aus.
   Verwende dabei keinen "."-Operetator, wie z.B. person.name!
 - Kopiere die Person in ein seperates Personen Objekt
 - Verändere zwei der Attribut während du die Kopie ersellst
*/

const person = {
    name: "Tilda",
    age: 23,
    country: "UK"
}

const {name, country: countryOfOrigin} = person
console.log(countryOfOrigin)

const person2 = {...person, name: "Tim", age: 22}
console.log(person2)

/*
3) DESCTRUCTURE METHOD PARAMS
 - Schreibe eine Methode, in die du ein Personen-Objekt übergibst, aber in den Methodenparametern mittels Destructuring nur auf einzelne Attribute zugreifst und diese ausgibst.
*/

function printAttributes({name, country}) {
    console.log(`Name: ${name}, country of origin: ${country}`)
}

printAttributes(person)



