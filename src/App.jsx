import { useEffect, useState } from "react";
import axios from "axios";
import ShayariForm from "./components/ShayariForm";
import ShayariCard from "./components/ShayariFeed";
import NavBar from "../src/components/NavBar"
import Footer from "../src/components/Footer";


function App() {
  const [shayaris, setShayaris] = useState([]);

  const fetchShayaris = async () => {
    const res = await axios.get("https://shayari-com-0te7.onrender.com/api/shayari");
    setShayaris(res.data.reverse()); 
  };

  useEffect(() => {
    fetchShayaris();
  }, []);

  return (
   <>
   <NavBar/>
  <ShayariForm onPost={fetchShayaris} />
  
  {/* Shayari Feed Section */}
  <div className="bg-light py-5 " id="Shayaripage">
    <div className="container">
      {/* Section Header */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="display-6 fw-bold text-dark mb-3">
            <i className="bi bi-heart-fill text-danger me-3"></i>
            Shayari Collection
            <i className="bi bi-heart-fill text-danger ms-3"></i>
          </h2>
          <p className="lead text-muted mb-0">
            Discover beautiful thoughts and emotions expressed through shayari & poetry ✨
          </p>
          <div className="mt-3">
            <span className="badge bg-primary fs-6 px-3 py-2">
              {shayaris.length} Beautiful Shayaris
            </span>
          </div>
        </div>
      </div>

      {/* //Shayari Cards Grid */}
      <div className="row g-4">
        {shayaris.length > 0 ? (
          shayaris.map((s) => (
            <ShayariCard key={s._id} shayari={s} onUpdate={fetchShayaris} />
          ))
        ) : (
          /* Empty State */
          <div className="col-12">
            <div className="text-center py-5">
              <div className="mb-4">
                <i className="bi bi-journal-text text-muted" style={{ fontSize: '4rem' }}></i>
              </div>
              <h4 className="text-muted mb-3">Server is Loading <i class="bi bi-arrow-clockwise"></i></h4>
              <h4 className="text-muted mb-3">No Shayaris Yet</h4>
              <p className="text-muted mb-4">
                Be the first to share your beautiful thoughts and emotions
              </p>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <i className="bi bi-plus-circle me-2"></i>
                Post Your First Shayari ❤
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Load More Button (if you implement pagination) */}
      {shayaris.length > 0 && ( 
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="border-top pt-4">
              <p className="text-muted mb-3">
                <i className="bi bi-infinity me-2"></i>
                End of current collection
              </p>
              <button 
                className="btn btn-outline-primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <i className="bi bi-arrow-up me-2"></i>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  <Footer/>
</>
  );
}

export default App;
