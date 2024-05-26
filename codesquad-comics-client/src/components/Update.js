import React from "react";

const Update = () => {
    return (
        <div>About
            <div className="white-bg-bb">
        <div className="update-page">
            <div>
                <h1>UPDATE COMIC</h1>

            </div>

            <div className="update-form">
                <form action="#" id="update-form">
                    <div className="update-form-inputs">
                        <div className="update-category">
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" value="title value stored in database" />
                        </div>

                        <div className="update-category">
                            <label htmlFor="author">Author:</label>
                            <input type="text" name="author" id="author" value="author value stored in database" />
                        </div>

                        <div className="update-category">
                            <label htmlFor="publisher">Publisher:</label>
                            <select>
                                <option>BOOM! Box</option>
                                <option>DC Comics</option>
                                <option>Harry N. Abrams</option>
                                <option>Icon Books</option>
                                <option>Image Comics</option>
                                <option>Marvel</option>
                                <option>Simon & Schuster</option>
                                <option>Top Shelf Productions</option>
                                <option>VIZ Media LLC</option>
                                <option disabled selected hidden className="placeholder-option">publisher value stored in
                                    database</option>
                            </select>
                        </div>

                        <div className="update-category">
                            <label htmlFor="genre">Genre:</label>
                            <input type="text" name="genre" id="genre" value="genre data stored in database" />
                        </div>

                        <div className="update-category">
                            <label htmlFor="pages">Number of Pages:</label>
                            <input type="text" name="pages" id="pages" value="pages stored in database" />
                        </div>

                        <div className="update-category">
                            <label htmlFor="rating">Rating:</label>
                            <input type="number" name="rating" id="rating" min="1" max="5"
                                placeholder="rating stored in database" />
                        </div>

                        <div className="update-category">
                            <label htmlFor="synopsis">Synopsis:</label>
                            <textarea id="synopsis" name="synopsis">synopsis value stored in database</textarea>
                        </div>

                    </div>

                    <div>
                        <input type="button" value="Submit" action="#" className="submit-button" />
                    </div>


                </form>

            </div>


        </div>
    </div>
        </div>
    )
}

export default Update;