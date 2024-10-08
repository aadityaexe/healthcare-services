import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link
              to={"/"}
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/service-list"} className="nav-link" href="#">
              Service List
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/about"} className="nav-link" href="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact-us"} className="nav-link" href="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
