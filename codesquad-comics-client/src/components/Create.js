import React from "react";

const Create = () => {
    return (
        <div>Create

<div className="white-bg-bb">
        <div className="create-page">
            <div>
                <h1>Create New Comic</h1>
            </div>

            <div className="create-form">

                <form action="#" className="new-entry">
                    <div className="create-form-inputs">

                        <div className="create-category">
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </div>

                        <div className="create-category">
                            <label htmlFor="author">Author:</label>
                            <input type="text" name="author" id="author" placeholder="Author" />
                        </div>

                        <div className="create-category">
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
                                <option selected>Select</option>
                            </select>
                        </div>

                        <div className="create-category">
                            <label htmlFor="genre">Genre:</label>
                            <input type="text" name="genre" id="genre" placeholder="Genre" />
                        </div>

                        <div className="create-category">
                            <label htmlFor="pages">Number of Pages:</label>
                            <input type="text" name="pages" id="pages" placeholder="Number of Pages" />
                        </div>

                        <div className="create-category">
                            <label for="rating">Rating:</label>
                            <input type="number" name="rating" id="rating" min="1" max="5" placeholder="number (0-5)" />
                        </div>

                        <div className="create-category">
                            <label for="synopsis">Synopsis:</label>
                            <textarea id="synopsis" name="synopsis" placeholder="Synopsis"></textarea>
                        </div>

                    </div>

                    <div>
                        <input type="button" value="Submit" action="#" class="submit-button" />
                    </div>
                
                </form>
            </div>
        </div>






    </div>
        </div>
    )
}

export default Create;