import React from "react";

function CRUDForm({ formData, handleChange }) {
  return (
    <div className="col-4">
      <label>ID</label>
      <input
        type="text"
        id="id"
        value={formData.id}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Price</label>
      <input
        type="text"
        id="price"
        value={formData.price}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Stock</label>
      <input
        type="text"
        id="stock"
        value={formData.stock}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Category</label>
      <input
        type="text"
        id="category"
        value={formData.category}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default CRUDForm;
