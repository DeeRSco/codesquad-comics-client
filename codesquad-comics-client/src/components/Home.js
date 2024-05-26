import React from "react";
import booksData from "../data/books";

const Home = () => {
  return (
    <div>
      Home
      <div className="index-page">
        <div className="white-bg-bb">
          <h1>CodeSquad Comics</h1>
          <p>
            CodeSquad Comics is a collection of graphic novels read by Deanna.
            The site is intended to display comic book covers along with
            information about each book, including the author, a rating, and
            other details about the graphic novel. Browse through the complete
            collection below. Click on the cover image or the Details link to
            see even more information about each graphic novel including the
            publisher, genre, number of pages, and a brief synopsis. The About
            page includes meta information about this collection. Login is only
            available to the site administrator at this time.
          </p>
        </div>

        <div className="white-bg-bb">
          <div className="index-page-bottom">
            <h2>Complete Collection</h2>
            <div className="index-card-display">
              <div className="index-cards">
                <p>
                  {booksData.map((book) => (
                    <div>
                      <a href="#">
                        <img
                          src={`./images/${book.image}`}
                          alt={`${book.title} cover`}
                        />
                      </a>
                      <br></br>
                      <em>{book.title}</em>
                      <br></br>
                      by: {book.author}
                      <br></br>
                      {book.rating} stars
                      <br></br>
                      <a href="#">Details</a>
                    </div>
                  ))}
                </p>
              </div>

              <br></br>
            </div>

            <div>
              <input
                type="submit"
                value="Display More"
                class="display-more-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
