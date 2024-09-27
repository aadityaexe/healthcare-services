import { Outlet } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
