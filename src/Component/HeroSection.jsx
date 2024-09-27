import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/image.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      className="bg-dark text-light d-flex justify-content-center align-items-center hero-section"
      style={{
        height: "100vh",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-black">
        <h1 className="display-3">Compassionate Care for Everyone</h1>
        <p className="lead">
          Your health is our priority. We offer comprehensive healthcare
          services with personalized attention.
        </p>
        <Link to={"/service-list"} className="btn btn-primary btn-lg mt-4">
          Service List
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
