import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top transition-all ${
          isScrolled
            ? "navbar-transparent bg-light shadow-lg py-2"
            : "navbar-dark bg-dark py-3"
        }`}
      >
        <div className="container-fluid">
          {/* Brand/Logo */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="#home"
          >
            <div className="brand-icon me-2 p-2 rounded-circle bg-primary">
              <i className="bi bi-heart-fill text-white"></i>
            </div>
            <span id="home" className="brand-text">
              <span className="text-primary">Shayari</span>
              <span className="text-light ms-1">.Com</span>
            </span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler bg-primary border-0 p-1"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-custom">
              <span
                className={`line line-1 ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`line line-2 ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`line line-3 ${isMenuOpen ? "active" : ""}`}
              ></span>
            </span>
          </button>

          {/* Navbar Content */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            {/* Main Navigation */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item rounded ${
                  activeLink === "home" ? "bg-primary" : ""
                }`}
              >
                <a
                  className={`nav-link fw-semibold px-3 ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  href="/"
                  onClick={() => setActiveLink("home")}
                >
                  <i className="bi bi-house-fill me-2"></i>
                  Home
                </a>
              </li>

              <li
                className={`nav-item rounded ${
                  activeLink === "browse" ? "bg-primary" : ""
                }`}
              >
                <a
                  className={`nav-link fw-semibold px-3 ${
                    activeLink === "browse" ? "active" : ""
                  }`}
                  href="#browse"
                  onClick={() => setActiveLink("browse")}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Browse
                </a>
              </li>

              <li
                className={`nav-item rounded ${
                  activeLink === "contact" ? "bg-primary" : ""
                }`}
              >
                <a
                  className={`nav-link fw-semibold px-3 ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => setActiveLink("contact")}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center gap-2">
              {/* Search Bar */}
              <div className="d-none d-lg-flex me-3">
                <div className="input-group">
                  <input
                    className="form-control form-control-sm bg-light border-primary text-dark"
                    type="search"
                    placeholder="Search shayari..."
                    aria-label="Search"
                    style={{ minWidth: "200px" }}
                  />
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              {/* Mobile Search Button */}
              <button className="btn btn-outline-primary d-lg-none me-2">
                <i className="bi bi-search"></i>
              </button>

              {/* Post Shayari Button */}
              <a href="post" className="btn btn-primary fw-semibold px-3 py-2">
                <i className="bi bi-plus-circle me-2"></i>
                <span className="d-none d-sm-inline">Post Shayari</span>
                <span className="d-sm-none">Post</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
