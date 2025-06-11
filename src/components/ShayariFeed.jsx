import { useState } from "react";
import axios from "axios";

export default function ShayariCard({ shayari, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(shayari.content || "");
  const [showFull, setShowFull] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this shayari?")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      await axios.delete(`https://shayari-com-0te7.onrender.com/api/shayari/${shayari._id}`);
      onUpdate();
    } catch (error) {
      console.error("Error deleting shayari:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async () => {
    if (editContent.trim() === "") {
      return;
    }
    
    setIsUpdating(true);
    try {
      await axios.put(`https://shayari-com-0te7.onrender.com/api/shayari/${shayari._id}`, { 
        content: editContent.trim() 
      });
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error("Error updating shayari:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const toggleReadMore = () => setShowFull(!showFull);

  const contentPreview = shayari.content?.slice(0, 120);

  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card h-100 shadow-lg border-0 overflow-hidden position-relative">
        {/* Gradient Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-10 pointer-events-none" 
             style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        </div>
        
        {/* Card Header */}
        <div className="card-header bg-white border-0 position-relative">
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle p-2 me-3">
              <i className="bi bi-person-fill text-white"></i>
            </div>
            <div className="flex-grow-1">
              <h6 className="mb-0 fw-bold text-dark">
                {shayari.name || "Anonymous"}
              </h6>
              <small className="text-muted d-flex align-items-center mt-1">
                <i className="bi bi-tag-fill me-1"></i>
                {shayari.category || "General"}
              </small>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body position-relative flex-grow-1 d-flex flex-column">
          {isEditing ? (
            <>
              <div className="mb-3 flex-grow-1">
                <label className="form-label fw-semibold text-dark">
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Shayari
                </label>
                <textarea
                  className="form-control border-2 resize-none"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={6}
                  placeholder="Edit your shayari..."
                  style={{ resize: 'none' }}
                />
              </div>
              <div className="d-flex gap-2 mt-auto">
                <button 
                  className="btn btn-success flex-fill fw-semibold"
                  onClick={handleEdit}
                  disabled={isUpdating || editContent.trim() === ""}
                >
                  {isUpdating ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Updating...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-lg me-2"></i>
                      Update
                    </>
                  )}
                </button>
                <button 
                  className="btn btn-outline-secondary flex-fill fw-semibold"
                  onClick={() => {
                    setIsEditing(false);
                    setEditContent(shayari.content || "");
                  }}
                  disabled={isUpdating}
                >
                  <i className="bi bi-x-lg me-2"></i>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Shayari Content */}
              <div className="mb-3 flex-grow-1">
                <div className="position-relative">
                  <i className="bi bi-quote position-absolute text-primary opacity-25" 
                     style={{ fontSize: '2rem', top: '-10px', left: '-5px' }}>
                  </i>
                  <blockquote className="blockquote mb-0 ps-4">
                    <p className="fw-medium text-dark lh-base" 
                       style={{ 
                         whiteSpace: "pre-wrap", 
                         wordWrap: "break-word",
                         fontSize: '0.95rem',
                         fontStyle: 'italic'
                       }}>
                      {showFull || shayari.content?.length <= 120
                        ? shayari.content
                        : `${contentPreview}...`}
                    </p>
                  </blockquote>
                </div>
                
                {/* Read More/Less Button */}
                {shayari.content?.length > 120 && (
                  <button
                    className="btn btn-link p-0 mt-2 text-primary fw-semibold"
                    onClick={toggleReadMore}
                    style={{ fontSize: "0.85rem", textDecoration: 'none' }}
                  >
                    <i className={`bi bi-chevron-${showFull ? 'up' : 'down'} me-1`}></i>
                    {showFull ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="border-top pt-3 mt-auto">
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-outline-primary flex-fill fw-semibold"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="bi bi-pencil me-2"></i>
                    Edit
                  </button>
                  <button 
                    className="btn btn-outline-danger flex-fill fw-semibold"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Deleting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-trash me-2"></i>
                        Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Decorative Bottom Border */}
        <div className="position-absolute bottom-0 start-0 w-100" 
             style={{ height: '3px', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}>
        </div>
      </div>
    </div>
  );
}