import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Admin = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    setBook(booksData);
  }, []);

  // add in-line styling here
  // const inlineStyling = {
  // "overflow-x": "auto"}
  return (
    <div className="white-bg-bb admin-page">
      <div>
        <h1> Admin Page </h1>
        <input
          type="button"
          value="Add New Comic"
          action="#"
          className="yellow-button button"
          />
      </div>

      <div key={book._id} className="admin-bottom" style="overflow-x:auto;">
        <table>
          <thead>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </thead>

          <tbody>
            <tr>
              <td>Batman: The Dark Knight Returns</td>
              <td>
                <input
                  type="button"
                  value="Edit"
                  action="#"
                  className="edit-button"
                />
              </td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  action="#"
                  className="delete-button"
                />
              </td>
            </tr>

            {book.map((book) => (
              <tr key={book._id} className="admin-bottom">
                <td>{book.title}</td>
                <td>
                  <input
                    type="button"
                    value="Edit"
                    action="#"
                    className="edit-button"
                  ></input>
                </td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    action="#"
                    className="delete-button"
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
