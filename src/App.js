import React, { useState, useEffect } from "react";
import CRUDButtons from "./CRUDButtons";
import CRUDTable from "./CRUDTable";
import CRUDForm from "./CRUDForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    category: ""
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/read");
      const result = await response.json();
      console.log("Fetched Data: ", result);
      setData(result);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  const insertOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          price: formData.price,
          stock: formData.stock,
          category: formData.category,
        }),
      });

      const result = await response.json();
      console.log("Insert Result: ", result);

      if (result.id) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error("Error inserting data: ", error);
    }
  };

  const updateOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: formData.id,
          name: formData.name,
          price: formData.price,
          stock: formData.stock,
          category: formData.category,
        }),
      });

      const result = await response.json();
      console.log("Update Result: ", result);

      if (result.modifiedCount > 0) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };

  const deleteOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: formData.id,
        }),
      });

      const result = await response.json();
      console.log("Delete Result: ", result);

      if (result.deletedCount > 0) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">CRUD UI</h1>
      <div className="row">
        <CRUDForm formData={formData} handleChange={handleChange} />
        <CRUDTable data={data} />
      </div>
      <CRUDButtons
        insertOP={insertOP}
        updateOP={updateOP}
        deleteOP={deleteOP}
        readOP={fetchData}
      />
    </div>
  );
}

export default App;
