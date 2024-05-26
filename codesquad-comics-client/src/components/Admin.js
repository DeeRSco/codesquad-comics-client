import React from "react";

const Admin = () => {
    return (
        <div>Admin
            <div className="white-bg-bb" className="admin-page">
        <div className="admin-top">
            <h1> Admin Page </h1>
            <input type="button" value="Add New Comic" action="#" className="yellow-button" className="button" />
        </div>

        <div className="admin-bottom" style="overflow-x:auto;">
            <table>
                <thead>
                    <th>COMIC TITLE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Batman: The Dark Knight Returns</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Black Panther: A Nation Under Our Feet Book 1</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Fun Home: A Family Tragicomic</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Hunter X Hunter Vol.1</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Lumberjanes Vol. 1</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>March: Book One</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>One Piece, Vol. 1: Romance Dawn</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Parable of the Sower</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Queer: A Graphic History</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>

                    <tr>
                        <td>Watchmen</td>
                        <td><input type="button" value="Edit" action="#" className="edit-button" /></td>
                        <td><input type="button" value="Delete" action="#" className="delete-button" /></td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
        </div>
    )
}

export default Admin;