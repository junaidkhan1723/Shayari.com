import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top transition-all ${
        isScrolled 
          ? 'navbar-light bg-transparent shadow-lg py-2' 
          : 'navbar-dark bg-dark py-3'
      }`}>
        <div className="container">
          {/* Brand/Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
            <div className="brand-icon me-2 p-2 rounded-circle bg-primary">
              <i className="bi bi-heart-fill text-white"></i>
            </div>
            <span className="brand-text">
              <span className="text-primary">Shayari</span>
              <span className="text-light ms-1">Collection</span>
            </span>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler border-0 p-1" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-custom">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Main Navigation */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-semibold px-3" href="#home">
                  <i className="bi bi-house-fill me-2"></i>
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link fw-semibold px-3" href="#browse">
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Browse
                </a>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle fw-semibold px-3" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-tags-fill me-2"></i>
                  Categories
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow-lg border-0 mt-2">
                  <li>
                    <a className="dropdown-item py-2" href="#love">
                      <i className="bi bi-heart text-danger me-2"></i>
                      Love Shayari
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#friendship">
                      <i className="bi bi-people text-success me-2"></i>
                      Friendship
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#motivation">
                      <i className="bi bi-star text-warning me-2"></i>
                      Motivational
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#sad">
                      <i className="bi bi-cloud-rain text-info me-2"></i>
                      Sad Shayari
                    </a>
                  </li>
                  <li><hr className="dropdown-divider opacity-25" /></li>
                  <li>
                    <a className="dropdown-item py-2" href="#all-categories">
                      <i className="bi bi-grid me-2"></i>
                      View All Categories
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold px-3" href="#about">
                  <i className="bi bi-info-circle me-2"></i>
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold px-3" href="#contact">
                  <i className="bi bi-envelope me-2"></i>
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center gap-2">
              {/* Search Bar */}
              <form className="d-none d-lg-flex me-3" role="search">
                <div className="input-group">
                  <input 
                    className="form-control form-control-sm bg-dark border-secondary text-light" 
                    type="search" 
                    placeholder="Search shayari..." 
                    aria-label="Search"
                    style={{ minWidth: '200px' }}
                  />
                  <button className="btn btn-outline-primary btn-sm" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>

              {/* Mobile Search Button */}
              <button className="btn btn-outline-light d-lg-none me-2" data-bs-toggle="modal" data-bs-target="#searchModal">
                <i className="bi bi-search"></i>
              </button>

              {/* Language Selector */}
              <div className="dropdown me-2">
                <button 
                  className="btn btn-outline-light btn-sm dropdown-toggle border-0" 
                  type="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-globe me-1"></i>
                  <span className="d-none d-md-inline">EN</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow-lg border-0">
                  <li>
                    <a className="dropdown-item py-2" href="#">
                      <span className="me-2">🇺🇸</span>English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#">
                      <span className="me-2">🇮🇳</span>हिंदी
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#">
                      <span className="me-2">📝</span>اردو
                    </a>
                  </li>
                </ul>
              </div>

              {/* Post Shayari Button */}
              <a 
                href="#post" 
                className="btn btn-primary fw-semibold px-3 py-2"
              >
                <i className="bi bi-plus-circle me-2"></i>
                <span className="d-none d-sm-inline">Post Shayari</span>
                <span className="d-sm-none">Post</span>
              </a>

              {/* User Profile Dropdown (Optional) */}
              <div className="dropdown ms-2">
                <button 
                  className="btn btn-outline-light btn-sm rounded-circle p-2" 
                  type="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow-lg border-0">
                  <li>
                    <a className="dropdown-item py-2" href="#profile">
                      <i className="bi bi-person me-2"></i>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#my-shayaris">
                      <i className="bi bi-journal-text me-2"></i>
                      My Shayaris
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2" href="#favorites">
                      <i className="bi bi-heart me-2"></i>
                      Favorites
                    </a>
                  </li>
                  <li><hr className="dropdown-divider opacity-25" /></li>
                  <li>
                    <a className="dropdown-item py-2" href="#settings">
                      <i className="bi bi-gear me-2"></i>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-2 text-danger" href="#logout">
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border-0">
            <div className="modal-header border-secondary">
              <h5 className="modal-title text-light" id="searchModalLabel">
                <i className="bi bi-search me-2"></i>Search Shayari
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group">
                  <input 
                    type="search" 
                    className="form-control bg-dark border-secondary text-light" 
                    placeholder="Search for shayari, categories, or poets..."
                    autoFocus
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
                <div className="mt-3">
                  <small className="text-muted">Popular searches:</small>
                  <div className="mt-2">
                    <span className="badge bg-secondary me-2 mb-2">Love</span>
                    <span className="badge bg-secondary me-2 mb-2">Friendship</span>
                    <span className="badge bg-secondary me-2 mb-2">Motivational</span>
                    <span className="badge bg-secondary me-2 mb-2">Sad</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .brand-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        
        .brand-icon:hover {
          transform: scale(1.1);
        }
        
        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          background-color: rgba(13, 110, 253, 0.2);
          color: #fff !important;
        }
        
        .navbar-toggler-icon-custom {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 18px;
          cursor: pointer;
        }
        
        .line {
          width: 100%;
          height: 2px;
          background-color: #fff;
          margin: 2px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .navbar-toggler[aria-expanded="true"] .line-1 {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .navbar-toggler[aria-expanded="true"] .line-2 {
          opacity: 0;
        }
        
        .navbar-toggler[aria-expanded="true"] .line-3 {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .dropdown-menu {
          border-radius: 12px;
          padding: 8px;
        }
        
        .dropdown-item {
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        
        .btn {
          transition: all 0.3s ease;
        }
        
        .btn:hover {
          transform: translateY(-1px);
        }
        
        @media (max-width: 991.98px) {
          .navbar-nav {
            padding-top: 1rem;
          }
          
          .nav-link {
            padding: 0.75rem 1rem !important;
            margin: 0.25rem 0;
          }
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
      `}</style>
    </>
  );
}