import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/image.png";
function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={img} alt="About Us" className="img-fluid rounded mb-4" />
        </div>
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            At [Your Healthcare Company], our mission is to provide exceptional
            and compassionate healthcare services to our community. We believe
            in treating each patient with respect and dignity.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Why Choose Us?</h3>
        <p>
          We are dedicated to ensuring the highest quality of care with a
          personalized approach. Our experienced staff is here to support you in
          your health journey.
        </p>
        <a href="#services" className="btn btn-primary btn-lg">
          Learn More About Our Services
        </a>
      </div>
    </div>
  );
}
export default About;
