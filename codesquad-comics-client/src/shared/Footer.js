import React from "react";

const Footer = () => {
    return (
        <div>Footer

<footer>
        <div className="footer">

            <div className="footer-address">
                <h3>Visit Us</h3>
                CodeSquad Comics<br></br>
                123 Dorchester Avenue<br></br>
                Boston, MA 02124

            </div>

            <div className="footer-links">
                <h3>Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>

                </ul>

            </div>

            <div className="footer-socials">
                <h3>Follow Us</h3>
                <div className="footer-social-icons">
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>

                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>

                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>

                </div>

            </div>

            <div className="footer-logo">
                <h3>A Product Of</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://www.codesquad.org"><img
                        src="images/CodeSquad-logo.png" /></a>

            </div>

        </div>

    </footer>
        </div>
    )
}

export default Footer;