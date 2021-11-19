import useIsScrollFromTop from "../../hooks/useIsScrollFromTop";
import "./navbar.scss";

const Navbar = ({ displaySignIn, signedIn }) => {

    const [isScroll, setIsScroll] = useIsScrollFromTop(100);

    return (
        <div className={`navbar ${isScroll ? "navbar-active" : ""}`}>
            <div className="navbar__container">
                <a href="/" className="navbar__logo-container">
                    <img src="../images/netflix-logo.png" alt="" className="navbar__logo" />
                </a>
                {signedIn ?
                    (<div className="navbar__menu">
                        <ul>
                            <li className="navbar__menu-item">
                                <a href="/home">Home</a>
                            </li>
                            <li className="navbar__menu-item">
                                <a href="/home">Tv Shows</a>
                            </li>
                            <li className="navbar__menu-item">
                                <a href="/home">Movies</a>
                            </li>
                            <li className="navbar__menu-item">
                                <a href="/home">My List</a>
                            </li>
                        </ul>
                    </div>) : <></>
                }
                <select className="navbar__language-select" name="languages" id="languages">
                    <option value="english">English</option>
                    <option value="espanol">Español</option>
                </select>
                {displaySignIn ? <a href="/login" className="navbar__sign-in">Sign In</a> : ""}

            </div>
        </div>
    )
}

Navbar.defaultProps = {
    displaySignIn: true,
    signedIn: false
}

export default Navbar

