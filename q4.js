// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


const books = [
    { title: "Book C", author: "Author C", year: 2020 },
  { title: "Book A", author: "Author A", year: 2021 },
  { title: "Book B", author: "Author B", year: 2023 },
  { title: "Book D", author: "Author D", year: 2022 }
];


function callback(titles) {
    const sortedtitles = titles.sort();
    sortedtitles.forEach((title) => {
        console.log(title);
    });
}
function getBooks(books) {
    const titles = books.map((book)=>book.title);
   return callback (titles)
}

getBooks(books);


function logtitles(titles) {
    titles.sort();
    console.log(titles.join(","));
}
function Extratitles(books,callback) {
    const titles = books.map((book) =>book.title)
    return callback(titles);
}
Extratitles(books,logtitles);










