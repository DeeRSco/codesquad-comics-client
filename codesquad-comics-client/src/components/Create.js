import React, { useState, useEffect } from "react";

const Create = () => {
  const [book, setBook] = useState([]);
  const handleCreateSubmit = (event)=>{
    event.preventDefault();
    console.log("The prevent default method has run.")
    console.log(`Submitted: Title ${book.title}, Author: ${book.author}, Publisher: ${book.publisher}, Genre: ${book.genre}`)
  }
  
    return (
    <div>
      Create
      <div className="create-page">
        <h1>Create New Comic</h1>

        <div className="create-form">
          <form onSubmit={handleCreateSubmit} action="#" className="new-entry">
            <div className="create-form-inputs">
              <div className="create-category">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  required
                />
              </div>

              <div className="create-category">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Author"
                  required 
                />
              </div>

              <div className="create-category">
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
                  <option selected>Select</option>
                </select>
              </div>

              <div className="create-category">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  placeholder="Genre"
                  required
                />
              </div>

              <div className="create-category">
                <label htmlFor="pages">Number of Pages:</label>
                <input
                  type="text"
                  name="pages"
                  id="pages"
                  placeholder="Number of Pages"
                  required
                />
              </div>

              <div className="create-category">
                <label for="rating">Rating:</label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  min="1"
                  max="5"
                  placeholder="number (0-5)"
                  required
                />
              </div>

              <div className="create-category">
                <label for="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  placeholder="Synopsis"
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <input
                type="button"
                value="Submit"
                action="#"
                class="submit-button"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
