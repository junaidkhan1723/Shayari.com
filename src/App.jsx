import { useEffect, useState } from "react";
import axios from "axios";
import ShayariForm from "./components/ShayariForm";
import ShayariCard from "./components/ShayariFeed";

function App() {
  const [shayaris, setShayaris] = useState([]);

  const fetchShayaris = async () => {
    const res = await axios.get("http://localhost:5000/api/shayari");
    setShayaris(res.data.reverse()); 
  };

  useEffect(() => {
    fetchShayaris();
  }, []);

  return (
    <>
    
      <ShayariForm onPost={fetchShayaris} />
      <div className="container mt-4">
  <div className="row">

      {shayaris.map((s) => (
        <ShayariCard key={s._id} shayari={s} onUpdate={fetchShayaris} />
      ))}
      </div>
      </div>
    </>
  );
}

export default App;
