export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-auto">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-4">
              <h4 className="fw-bold text-white mb-3">
                <i className="bi bi-heart-fill text-danger me-2"></i>
                Shayari.Com
              </h4>
              <p className="text-light opacity-75 mb-4">
                A beautiful platform where hearts meet through poetry. Share
                your emotions, thoughts, and feelings through the timeless art
                of Shayari.
              </p>

              {/* Social Media Links */}
              <div className="d-flex gap-3">
                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BEUrjUvvcTtOpg5xQvPY1eQ%3D%3D"
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  title="Follow us on Linkdin"
                >
                  <i class="bi bi-linkedin"></i>{" "}
                </a>
                <a
                  href="https://github.com/junaidkhan1723"
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  title="Follow us on GitHub"
                >
                  <i class="bi bi-github"></i>{" "}
                </a>
                <a
                  href="mailto:pathanjunaid7888@gmail.com"
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  title="Contact Us on Email "
                >
                  <i class="bi bi-envelope-at"></i>
                </a>
                <a
                  href=""
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  title="Currently not on the Instagram"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-chevron-right me-2"></i>Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-chevron-right me-2"></i>Browse Shayari
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-chevron-right me-2"></i>Post Shayari
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-chevron-right me-2"></i>Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-heart me-2"></i>Love
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-people me-2"></i>Friendship
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-star me-2"></i>Motivation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-moon me-2"></i>Sad
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-sun me-2"></i>Happy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-12 col-md-6 col-lg-2">
            <h6 className="fw-bold text-white mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-question-circle me-2"></i>Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-shield-check me-2"></i>Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-file-text me-2"></i>Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none opacity-75 hover-opacity-100"
                >
                  <i className="bi bi-envelope me-2"></i>Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-12 col-lg-2">
            <h6 className="fw-bold text-white mb-3">Stay Connected</h6>
            <p
              className="text-light opacity-75 mb-3"
              style={{ fontSize: "0.9rem" }}
            >
              Get the latest shayaris delivered to your inbox
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Your email"
                style={{ fontSize: "0.85rem" }}
              />
              <button className="btn btn-primary btn-sm" type="button">
                <i className="bi bi-send"></i>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-4">
              <div className="row g-2 text-center">
                <div className="col-6">
                  <div className="bg-primary bg-opacity-10 rounded p-2">
                    <div className="fw-bold text-white">1K+</div>
                    <small className="text-light opacity-75">Shayaris</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-primary bg-opacity-10 rounded p-2">
                    <div className="fw-bold text-white">500+</div>
                    <small className="text-light opacity-75">Poets</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="container">
        <hr className="text-light opacity-25 my-0" />
      </div>

      {/* Bottom Footer */}
      <div className="bg-black bg-opacity-25">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="mb-0 text-light opacity-75">
                © {currentYear} Shayari.Com Made with
                <i className="bi bi-heart-fill text-danger mx-1"></i>
                for shayari & poetry lovers :: ©Junaid Khan
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end mt-2 mt-md-0">
              <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                <span
                  className="text-light opacity-75"
                  style={{ fontSize: "0.9rem" }}
                >
                  <i className="bi bi-globe me-1"></i>
                  Available in:
                </span>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-light opacity-75"
                    style={{ fontSize: "0.8rem" }}
                  >
                    हिंदी
                  </button>
                  <button
                    className="btn btn-sm btn-outline-light opacity-75"
                    style={{ fontSize: "0.8rem" }}
                  >
                    اردو
                  </button>
                  <button
                    className="btn btn-sm btn-light text-dark"
                    style={{ fontSize: "0.8rem" }}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="btn btn-primary position-fixed bottom-0 end-0 m-3 rounded-circle shadow-lg"
        style={{ zIndex: 1000 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
      >
        <i className="bi bi-chevron-up"></i>
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        .hover-opacity-100:hover {
          opacity: 1 !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }

        footer a:hover {
          color: #ffffff !important;
        }

        .btn-outline-light:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        .social-hover:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </footer>
  );
}
