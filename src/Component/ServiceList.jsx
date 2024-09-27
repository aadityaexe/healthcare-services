import { useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setServiceForm({
      ...serviceForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceForm.name && serviceForm.description && serviceForm.price) {
      if (editingIndex !== null) {
        const updatedServices = services.map((service, index) =>
          index === editingIndex ? serviceForm : service
        );
        setServices(updatedServices);
        setEditingIndex(null);
      } else {
        setServices([...services, serviceForm]);
      }
      setServiceForm({ name: "", description: "", price: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleEdit = (index) => {
    setServiceForm(services[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Healthcare Services</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Service Name"
              value={serviceForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Service Description"
              value={serviceForm.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Service Price"
              value={serviceForm.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary">
            {editingIndex !== null ? "Update" : "Add"} Service
          </button>
        </div>
      </form>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card
              name={service.name}
              description={service.description}
              price={service.price}
              handleEdit={() => handleEdit(index)}
              handleDelete={() => handleDelete(index)}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
