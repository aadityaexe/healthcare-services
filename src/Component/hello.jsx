import { useState } from "react";
import Card from "./Card";

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
    <div>
      <h1>Healthcare Services</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={serviceForm.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Service Description"
          value={serviceForm.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Service Price"
          value={serviceForm.price}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editingIndex !== null ? "Update" : "Add"} Service
        </button>
      </form>

      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <Card
              name={service.name}
              description={service.description}
              price={service.price}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
