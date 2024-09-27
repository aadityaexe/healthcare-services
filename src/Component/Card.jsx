/* eslint-disable react/prop-types */

const Card = ({
  name,
  description,
  price,
  handleEdit,
  handleDelete,
  index,
}) => {
  return (
    <div className="card mb-3 shadow-sm" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{name}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="card-text font-weight-bold">${price}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
