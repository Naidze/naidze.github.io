import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./Header.less";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <Link to="/" className="site-title" rel="author">
          MN.
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
