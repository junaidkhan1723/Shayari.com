import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-glass sticky-top shadow-sm border-bottom w-100">
      <div className="container-fluid py-3">
        {/* Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
               className="bi bi-heart text-primary me-2" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 
              4.385.92 1.776 2.834 3.778 6.286 6.357 
              3.452-2.58 5.365-4.58 6.286-6.357.955-1.885.838-3.362.314-4.385C13.486.878 
              10.4.28 8.717 2.01L8 2.748z"/>
          </svg>
          <span className="h4 fw-bold text-gradient mb-0">Shayari.com</span>
        </Link>

        {/* Toggler button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="navbar-nav gap-2 mt-3 mt-lg-0">
            <Link to="/create" className="btn btn-outline-secondary btn-sm nav-item">
              <i className="bi bi-plus-circle me-1"></i> Write Shayari
            </Link>

            <Link to="/profile" className="btn btn-outline-secondary btn-sm nav-item">
              <i className="bi bi-person me-1"></i> Profile
            </Link>

            <Link to="/login" className="btn btn-outline-secondary btn-sm nav-item">
              Login
            </Link>

            <Link to="/signup" className="btn gradient-primary btn-sm text-white nav-item">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
