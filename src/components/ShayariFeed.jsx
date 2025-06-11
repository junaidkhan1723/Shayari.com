import { useState } from "react";
import axios from "axios";

export default function ShayariCard({ shayari, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(shayari.content || "");
  const [showFull, setShowFull] = useState(false);

  const handleDelete = async () => {
    await axios.delete(`https://shayari-com-0te7.onrender.com/api/shayari/${shayari._id}`);
    onUpdate();
  };

  const handleEdit = async () => {
    await axios.put(`https://shayari-com-0te7.onrender.com/api/shayari/${shayari._id}`, { content: editContent });
    setIsEditing(false);
    onUpdate();
  };

  const toggleReadMore = () => setShowFull(!showFull);

  const contentPreview = shayari.content?.slice(0, 50); 

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
      <div className="card p-3 shadow-sm mt-3 w-100">
        <div className="mb-2">
          <h6 className="mb-1 fw-bold">Name Of Shayar :: {shayari.name || "N/A"}</h6>
          <p className="mb-2 text-muted">Shayari Category :: <i>{shayari.category || "N/A"}</i></p>
        </div>

        {isEditing ? (
          <>
            <textarea
              className="form-control"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={4}
            />
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-success btn-sm" onClick={handleEdit}>Update</button>
              <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p className="text-wrap" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {showFull || shayari.content.length <= 100
                ? shayari.content
                : `${contentPreview}...`}
            </p>
            {shayari.content.length > 100 && (
              <button
                className="btn btn-link p-0 text-primary"
                onClick={toggleReadMore}
                style={{ fontSize: "0.9rem" }}
              >
                {showFull ? "Show less" : "Read more"}
              </button>
            )}

            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
