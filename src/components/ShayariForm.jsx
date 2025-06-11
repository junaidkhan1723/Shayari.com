import { useState } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";

export default function ShayariForm({ onPost }) {
  const [formData, setFormData] = useState({ name: "", category: "", content: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/shayari", formData);
    onPost();
    setFormData({ name: "", category: "", content: "" });
  };

  return (<>
   <Navbar/>
    <form className="container row my-3 min-vw-100 d-flex">
      <div className="col-3"></div>
      <div className="card col-6 p-4">
        <h4>Post a Shayari</h4>
        <input type="text" className="form-control my-2" name="name" placeholder="Your Name"    value={formData.name} onChange={handleChange} required/>
        <input type="text" className="form-control my-2" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required/>
        <textarea className="form-control my-3" name="content" placeholder="Your Shayari"       value={formData.content} onChange={handleChange} required></textarea>
        <button className="btn btn-primary" onClick={handleSubmit}>Post</button>
      </div>
      <div className="col-3"></div>

    </form>
    </>
  );
}
