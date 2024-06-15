import React, {useState, useEffect} from "react";
import booksData from "../data/books"

const Update = () => {
  const handleUpdateSubmit (event) => {
    console.log("The Update form has been submitted");
    console.log(`Updated information for Book #${book.id}:
        Title: ${book.title}
        Author: ${book.author}
        Publisher: ${book.publisher}
        Genre: ${book.genre}
        Pages: ${book.pages}
        Rating: ${book.rating}
        Synopsis: ${book.synopsis}`);
  };


// Create a variable name id and assign one of the IDs of the books from the books data
const id = book.id

// Create a state using useState to hold data for "book". Create the setter function and initialize it to an empty object
const [book, setBook] = useState({});

// Create a useEffect function. In the callback section, find a book from the books data where the ID matches.
// Create a new variable and assign the found book to the variable. Use the setter function of the book state to set the value of the book to the new found book.
// Add a dependency array and make it so that this useEffect runs only once at the render.
useEffect(([]) => {
    const foundBook = booksData.find((book)=> book.id === id);
    setBook(foundBook)
});


    return (
    <div>
      About
      <div className="white-bg-bb">
        <div className="update-page">
          <div>
            <h1>UPDATE COMIC</h1>
          </div>

          <div className="update-form">
            <form action="#" id="update-form" onSubmit={handleUpdateSubmit}>
              <div className="update-form-inputs">
                <div className="update-category">
                  <label htmlFor="title">Title:</label>
                  <input
                  required  
                  type="text"
                    name="title"
                    id="title"
                    value="title value stored in database"
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="author">Author:</label>
                  <input
                    required
                    type="text"
                    name="author"
                    id="author"
                    value="author value stored in database"
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="publisher">Publisher:</label>
                  <select required>
                    <option>BOOM! Box</option>
                    <option>DC Comics</option>
                    <option>Harry N. Abrams</option>
                    <option>Icon Books</option>
                    <option>Image Comics</option>
                    <option>Marvel</option>
                    <option>Simon & Schuster</option>
                    <option>Top Shelf Productions</option>
                    <option>VIZ Media LLC</option>
                    <option
                      disabled
                      selected
                      hidden
                      className="placeholder-option"
                    >
                      publisher value stored in database
                    </option>
                  </select>
                </div>

                <div className="update-category">
                  <label htmlFor="genre">Genre:</label>
                  <input
                    required
                    type="text"
                    name="genre"
                    id="genre"
                    value="genre data stored in database"
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="pages">Number of Pages:</label>
                  <input
                    required
                    type="text"
                    name="pages"
                    id="pages"
                    value="pages stored in database"
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="rating">Rating:</label>
                  <input
                    required
                    type="number"
                    name="rating"
                    id="rating"
                    min="1"
                    max="5"
                    placeholder="rating stored in database"
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="synopsis">Synopsis:</label>
                  <textarea required id="synopsis" name="synopsis">
                    synopsis value stored in database
                  </textarea>
                </div>
              </div>

              <div>
                <input
                  type="button"
                  value="Submit"
                  action="#"
                  className="submit-button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
