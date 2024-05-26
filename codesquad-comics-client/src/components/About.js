import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-page">
        <div className="about-top">
          <h1>ABOUT CODESQUAD COMICS</h1>
          <p>
            CodeSquad Comics is a collection of graphic novels read by Deanna.
            Copyrighted images are used for review purposes only. Meta
            information about this collection can be found below. A detailed
            list of all the graphic novels in this collection can be found on
            the homepage. Additional details about each comic book, including
            the author, genre, number of pages, and a brief synopsis, can be
            found by navigating to the homepage and clicking the image of the
            book cover or the Details link for the desired graphic novel.
          </p>
        </div>

        <div className="about-bottom">
          <h2>COLLECTION DETAILS</h2>
          <ul>
            <li>total comic books: 12</li>
            <li>latest additions: 12</li>
            <li>5-star ratings: 5</li>
            <li>publishers: 9</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
