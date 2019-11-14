const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
console.log(" ")

console.log(books.map(x => x.rented).every((currentValue) => currentValue > 0));

console.log(" ")
console.log("Quel est livre le plus emprunté ?")
console.log(" ")

var best_book = books.forEach(book => {
    (book.rented === Math.max(...books.map(x => x.rented))) ? console.log(book) : false
});

console.log(" ")
console.log("Quel est le livre le moins emprunté ?")
console.log(" ")

var less_book = books.forEach(book => {
  (book.rented === Math.min(...books.map(x => x.rented))) ? console.log(book) : false
});

console.log(" ")
console.log("Trouve le livre avec l'ID: 873495")
console.log(" ")

var book = books.forEach(book => {
  (book.id === 873495) ? console.log(book) : false
});

console.log(" ")
console.log("Supprime le livre avec l'ID: 133712")
console.log(" ")

console.log(books.shift())

console.log(" ")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
console.log(" ")

console.log(books.map(x => x.title).sort(function (a,b) {
  return a.localeCompare(b);
}));