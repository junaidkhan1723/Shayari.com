/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from "axios";
import './NavBAr.css'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showFirstTimeModal, setShowFirstTimeModal] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show first time modal
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setTimeout(() => {
        setIsAuthModalOpen(true);
        setAuthMode('login');
      }, 1500); // Show after 1.5 seconds
    }
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search modal
  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  // Handle authentication modal
  const toggleAuthModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
    if (!isAuthModalOpen) {
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        rememberMe: false
      });
    }
  };

  // Switch between login and signup
  const switchAuthMode = (mode) => {
    setAuthMode(mode);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      rememberMe: false
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
 const handleLogin = async (email, password) => {
  try {
    const res = await axios.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setIsAuthenticated(true);
  } catch (err) {
    console.error(err.response?.data?.msg || 'Login error');
  }
     // Mock authentication success
    setIsAuthenticated(true);
    setIsAuthModalOpen(false);
    localStorage.setItem('hasVisited', 'true');
    
    alert(`${authMode === 'login' ? 'Login' : 'Sign up'} successful!`);
  };

  // Handle logout
 const handleLogout = () => {
  localStorage.removeItem('token');
  setIsAuthenticated(false);
  
};
  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top transition-all ${
        isScrolled 
          ? 'navbar-transparent bg-light shadow-lg py-2' 
          : 'navbar-dark bg-dark py-3'
      }`}>
        <div className="container-fluid">
          {/* Brand/Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
            <div className="brand-icon me-2 p-2 rounded-circle bg-primary">
              <i className="bi bi-heart-fill text-white"></i>
            </div>
            <span className="brand-text">
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
              <span className={`line line-1 ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`line line-2 ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`line line-3 ${isMenuOpen ? 'active' : ''}`}></span>
            </span>
          </button>

          {/* Navbar Content */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            {/* Main Navigation */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item bg-primary rounded">
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('categories');
                  }}
                  aria-expanded={activeDropdown === 'categories'}
                >
                  <i className="bi bi-tags-fill me-2"></i>
                  Categories
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark shadow-lg border-0 mt-2 ${
                  activeDropdown === 'categories' ? 'show' : ''
                }`}>
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
              <div className="d-none d-lg-flex me-3">
                <div className="input-group">
                  <input 
                    className="form-control form-control-sm bg-light border-primary text-dark" 
                    type="search" 
                    placeholder="Search shayari..." 
                    aria-label="Search"
                    style={{ minWidth: '200px' }}
                  />
                  <button className="btn btn-outline-primary btn-sm" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              {/* Mobile Search Button */}
              <button 
                className="btn btn-outline-primary d-lg-none me-2" 
                onClick={toggleSearchModal}
              >
                <i className="bi bi-search"></i>
              </button>

              {/* Language Selector */}
              <div className="dropdown me-2">
                <button 
                  className="btn btn-outline-primary btn-sm dropdown-toggle border-0" 
                  type="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('language');
                  }}
                  aria-expanded={activeDropdown === 'language'}
                >
                  <i className="bi bi-globe"></i>
                  <span className="d-none d-md-inline">EN</span>
                </button>
                <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-light shadow-lg border-0 ${
                  activeDropdown === 'language' ? 'show' : ''
                }`}>
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

              {/* Authentication Section */}
              {!isAuthenticated ? (
                <button 
                  className="btn btn-outline-primary btn-sm p-2 me-2" 
                  type="button" 
                  onClick={toggleAuthModal}
                  title="Login / Sign Up"
                >
                  <i className="bi bi-person-plus"></i>
                  <span className="d-none d-sm-inline ms-2">Login</span>
                </button>
              ) : (
                <div className="dropdown ms-2">
                  <button 
                    className="btn btn-primary btn-sm p-2 me-1" 
                    type="button" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('profile');
                    }}
                    aria-expanded={activeDropdown === 'profile'}
                  >
                    <i className="bi bi-person-circle"></i>
                  </button>
                  <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-dark shadow-lg border-0 ${
                    activeDropdown === 'profile' ? 'show' : ''
                  }`}>
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
                      <button className="dropdown-item py-2 text-danger border-0 bg-transparent w-100 text-start" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}

              {/* Post Shayari Button */}
              <a 
                href="#post" 
                className="btn btn-primary fw-semibold px-3 py-2"
              >
                <i className="bi bi-plus-circle me-2"></i>
                <span className="d-none d-sm-inline">Post Shayari</span>
                <span className="d-sm-none">Post</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Authentication Modal */}
      {isAuthModalOpen && (
        <div 
          className="modal fade show d-block auth-modal" 
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleAuthModal();
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark border-0 shadow-lg">
              <div className="modal-header border-secondary pb-0">
                <div className="w-100 text-center">
                  <h4 className="modal-title text-light mb-1">
                    <i className={`bi ${authMode === 'login' ? 'bi-box-arrow-in-right' : 'bi-person-plus'} me-2 text-primary`}></i>
                    {authMode === 'login' ? 'Welcome Back!' : 'Join Shayari.Com'}
                  </h4>
                  <p className="text-muted small mb-3">
                    {authMode === 'login' 
                      ? 'Sign in to your account to continue' 
                      : 'Create your account to start sharing'}
                  </p>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute end-0 top-0 mt-3 me-3" 
                  onClick={toggleAuthModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleLogin}>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      <i className="bi bi-envelope me-2"></i>Email
                    </label>
                    <input 
                      type="email" 
                      className="form-control bg-dark border-secondary text-light" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label text-light">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <div className="input-group">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control bg-dark border-secondary text-light" 
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        required
                      />
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    {authMode === 'signup' && (
                      <small className="text-muted">Password must be at least 8 characters long</small>
                    )}
                  </div>

                  {/* Confirm Password Field (Only for signup) */}
                  {authMode === 'signup' && (
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label text-light">
                        <i className="bi bi-lock-fill me-2"></i>Confirm Password
                      </label>
                      <div className="input-group">
                        <input 
                          type={showConfirmPassword ? "text" : "password"} 
                          className="form-control bg-dark border-secondary text-light" 
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          required={authMode === 'signup'}
                        />
                        <button 
                          className="btn btn-outline-secondary" 
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Remember Me / Terms (Login / Signup) */}
                  <div className="mb-4">
                    {authMode === 'login' ? (
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label text-light" htmlFor="rememberMe">
                          Remember me
                        </label>
                        <a href="#forgot-password" className="text-primary text-decoration-none float-end">
                          Forgot Password?
                        </a>
                      </div>
                    ) : (
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms" required />
                        <label className="form-check-label text-light" htmlFor="terms">
                          I agree to the <a href="#terms" className="text-primary text-decoration-none">Terms of Service</a> and <a href="#privacy" className="text-primary text-decoration-none">Privacy Policy</a>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold mb-3">
                    <i className={`bi ${authMode === 'login' ? 'bi-box-arrow-in-right' : 'bi-person-check'} me-2`}></i>
                    {authMode === 'login' ? 'Sign In' : 'Create Account'}
                  </button>

                  {/* Divider */}
                  <div className="text-center mb-3">
                    <span className="text-muted">or</span>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="d-grid gap-2 mb-3">
                    <button type="button" className="btn btn-outline-light">
                      <i className="bi bi-google me-2"></i>Continue with Google
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      <i className="bi bi-facebook me-2"></i>Continue with Facebook
                    </button>
                  </div>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-secondary pt-0">
                <div className="w-100 text-end">
                  <p className="text-muted mb-0">
                    {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <button 
                      type="button" 
                      className="btn btn-link text-primary text-decoration-none p-0 ms-1"
                      onClick={() => switchAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    >
                      {authMode === 'login' ? 'Sign up here' : 'Sign in here'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search Modal */}
      {isSearchModalOpen && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleSearchModal();
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark border-0">
              <div className="modal-header border-secondary">
                <h5 className="modal-title text-light">
                  <i className="bi bi-search me-2"></i>Search Shayari
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={toggleSearchModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="input-group">
                    <input 
                      type="search" 
                      className="form-control bg-dark border-secondary text-light" 
                      placeholder="Search for shayari, categories, or poets..."
                      autoFocus
                    />
                    <button className="btn btn-primary" type="button">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
}