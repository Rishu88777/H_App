import { useNavigate } from "react-router-dom";
import "./Notfind.scss";
export const Notfind = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};
