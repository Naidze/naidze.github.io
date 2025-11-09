import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.less";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidenav when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when sidenav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Top Bar */}
      <nav className="navigation-desktop">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="menu-icon">
          <svg viewBox="0 0 18 15" width="24px" height="24px">
            <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z" />
          </svg>
        </span>
      </button>

      {/* Mobile Side Navigation Overlay */}
      {isOpen && (
        <div
          className="sidenav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Side Navigation */}
      <nav className={`sidenav ${isOpen ? "sidenav-open" : ""}`}>
        <div className="sidenav-header">
          <h2 className="sidenav-title">Menu</h2>
          <button
            className="sidenav-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="sidenav-content">
          <Link to="/" className="sidenav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="sidenav-link" onClick={closeMenu}>
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
