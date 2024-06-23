import React, {useState, useEffect} from "react";
import booksData from "../data/books"
import { useParams } from "react-router-dom";

const Update = () => {
  const {bookId} = useParams();
  // FIRST - Create a state using useState to hold data for "book". Create the setter function and initialize it to an empty object
  const [book, setBook] = useState({});

  // NEXT - Create a variable name id and assign one of the IDs of the books from the books data
  // const id = book._id; inactive since added line 6

  // THEN - Create a useEffect function. In the callback section, find a book from the books data where the ID matches.
  // Create a new variable and assign the found book to the variable. Use the setter function of the book state to set the value of the book to the new found book.
  // Add a dependency array and make it so that this useEffect runs only once at the render.
   useEffect(()=>{
    const foundBook = booksData.find((book)=> book.id === id);
    setBook(foundBook)
  }, [id]);
  

  
  const handleUpdateSubmit = (event) => {
    const body = {
      title: event.target.title.value,
      author: event.target.author.value,
      publisher: event.target.publisher.value,
      genre: event.target.genre.value,
      pages: event.target.pages.value,
      rating: event.target.rating.value,
      synopsis: event.target.synopsis.value
    }
    event.preventDefault();
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


    return (
    <div>
      About
      <div className="white-bg-bb">
        <div className="update-page">
          <div>
            <h1>UPDATE COMIC</h1>
          </div>

          <div className="update-form">
            <form id="update-form" onSubmit={handleUpdateSubmit}>
              <div className="update-form-inputs">
                <div className="update-category">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={book.title}
                    required 
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="author">Author:</label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    defaultValue={book.author}
                    required
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
                      defaultValue={book.publisher}
                    >
                      
                    </option>
                  </select>
                </div>

                <div className="update-category">
                  <label htmlFor="genre">Genre:</label>
                  <input

                    type="text"
                    name="genre"
                    id="genre"
                    defaultValue={book.genre}
                    required
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="pages">Number of Pages:</label>
                  <input
                    type="text"
                    name="pages"
                    id="pages"
                    defaultValue={book.pages}
                    required
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="rating">Rating:</label>
                  <input

                    type="number"
                    name="rating"
                    id="rating"
                    min="1"
                    max="5"
                    defaultValue={book.rating}
                    required
                  />
                </div>

                <div className="update-category">
                  <label htmlFor="synopsis">Synopsis:</label>
                  <textarea 
                  className="text-area-label" 
                  name="synopsis" 
                  id="synopsis" 
                  defaultValue={book.synopsis}
                  required>
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
