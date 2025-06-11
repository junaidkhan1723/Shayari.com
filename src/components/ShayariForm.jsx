import { useState } from "react";
import axios from "axios";

export default function ShayariForm({ onPost }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    content: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name.trim() !== "" && 
           formData.category.trim() !== "" && 
           formData.content.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("https://shayari-com-0te7.onrender.com/api/shayari", formData);
      onPost();
      setFormData({ name: "", category: "", content: "" });
    } catch (error) {
      console.error("Error posting shayari:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container-fluid py-5 bg-light min-vh-100 mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white text-center py-4">
                <h3 className="mb-0 fw-bold">
                  <i className="bi bi-pen me-2"></i>
                  Post Your Shayari
                </h3>
                <p className="mb-0 mt-2 opacity-75">Share your beautiful thoughts with the world</p>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold text-dark">
                      <i className="bi bi-person me-2"></i>Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-2"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="category" className="form-label fw-semibold text-dark">
                      <i className="bi bi-tags me-2"></i>Category
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-2"
                      id="category"
                      name="category"
                      placeholder="e.g., Love, Friendship, Motivation"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="content" className="form-label fw-semibold text-dark">
                      <i className="bi bi-journal-text me-2"></i>Your Shayari
                    </label>
                    <textarea
                      className="form-control form-control-lg border-2"
                      id="content"
                      name="content"
                      rows="6"
                      placeholder="Write your beautiful shayari here..."
                      value={formData.content}
                      onChange={handleChange}
                      required
                      style={{ resize: 'vertical' }}
                    ></textarea>
                    <div className="form-text text-muted">
                      <small>Express your emotions through beautiful words</small>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className={`btn btn-lg py-3 fw-bold ${
                        isFormValid() ? 'btn-primary' : 'btn-secondary'
                      }`}
                      disabled={!isFormValid() || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Posting...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Post Shayari
                        </>
                      )}
                    </button>
                  </div>
                  
                  {!isFormValid() && (
                    <div className="alert alert-warning mt-3 mb-0">
                      <small>
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Please fill in all fields to post your shayari
                      </small>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}