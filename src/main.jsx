import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceList from "./Component/ServiceList.jsx";
import About from "./Component/About.jsx";
import ContactForm from "./Component/ContactForm.jsx";
import HeroSection from "./Component/HeroSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HeroSection /> },
      { path: "/service-list", element: <ServiceList /> },
      { path: "/about", element: <About /> },
      { path: "/service-list", element: <ServiceList /> },
      { path: "/contact-us", element: <ContactForm /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
