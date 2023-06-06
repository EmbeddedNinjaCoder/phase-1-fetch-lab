function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));    
}

  // // To pass the tests, don't forget to return your fetch!
  // fetch("https://anapioficeandfire.com/")
	//   .then(function (response) {
	//     //console.log(response);
	//     return response.json();
	//   })
	//   .then(renderBooks (data)
	//     //console.log(data);
	//   );


  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
