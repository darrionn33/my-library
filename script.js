const showFormButton = document.querySelector("body > button");
const addBookButton = document.querySelector("form > button");
const backdrop = document.querySelector(".backdrop");
const formContainer = document.querySelector(".form-container");
const bookArray = [];
showFormButton.onclick = () => {
  backdrop.style.display = "block";
  formContainer.style.display = "flex";
  setTimeout(() => {
    backdrop.style.opacity = "1";
    formContainer.style.transform = "translateX(0%)";
  }, 100);
};
const hideForm = () => {
  backdrop.style.opacity = "0";
  formContainer.style.transform = "translateX(-100%)";
  setTimeout(() => {
    backdrop.style.display = "none";
    formContainer.style.display = "none";
  }, 500);
};
backdrop.onclick = () => {
  hideForm();
};

function book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}
const displayBooks = () => {
  document.querySelector(".books-container").replaceChildren();
  bookArray.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book");
    const button = document.createElement("button");
    button.title = "Delete";
    const h3 = document.createElement("h3");
    h3.textContent = book.title;
    const p1 = document.createElement("p");
    p1.textContent = book.author;
    const p2 = document.createElement("p");
    p2.textContent = book.read;
    p2.setAttribute("data-read", book.read);
    bookItem.setAttribute("data-index", index);
    bookItem.appendChild(h3);
    bookItem.appendChild(p1);
    bookItem.appendChild(p2);
    bookItem.appendChild(button);
    document.querySelector(".books-container").appendChild(bookItem);

    button.onclick = () => {
      bookArray.splice(index, 1);
      displayBooks();
    };
  });
};

addBookButton.onclick = (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let read = document.querySelector('input[name="read-or-unread"]:checked');
  if (title.value !== "" && author.value !== "") {
    bookArray.push(new book(title.value, author.value, read.id));
    displayBooks();
    hideForm();
    title.value = "";
    author.value = "";
  } else {
    alert("Fill all the fields, please.");
  }
};
