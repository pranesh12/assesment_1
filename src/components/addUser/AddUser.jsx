import { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { userContext } from "../../App";
import { v4 as uuidv4 } from "uuid";

export const AddUser = () => {
  const { users, setUsers } = useContext(userContext);
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    address: {
      address: "",
      state: "",
      city: "",
    },
    company: {
      name: "",
    },
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [nestedField, nestedProperty] = name.split(".");
      setFormData((prevUser) => ({
        ...prevUser,
        [nestedField]: {
          ...prevUser[nestedField],
          [nestedProperty]: value,
        },
      }));
    } else {
      setFormData((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(),
      image: formData.image,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: {
        address: formData.address.address,
        state: formData.address.state,
        city: formData.address.city,
      },
      company: {
        name: formData.company.name,
      },
    };

    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {formData.image && (
          <div className="mt-5 mb-5 d-flex justify-content-center">
            <img
              style={{ width: "250px", height: "250px" }}
              className="img-fluid"
              src={formData.image}
              alt="image"
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            className="mb-4 form-control"
            name="image"
            placeholder="Avatar"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
            required
          />
          <input
            className="mb-4 form-control"
            name="firstName"
            onChange={handleOnChange}
            placeholder="First Name"
            type="text"
            required
          />
          <input
            className="mb-4 form-control"
            name="lastName"
            onChange={handleOnChange}
            placeholder="Last Name"
            type="text"
            required
          />
          <input
            className="mb-4 form-control"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="mb-4 form-control"
            name="address.address"
            onChange={handleOnChange}
            placeholder="Street"
            type="text"
            required
          />
          <input
            className="mb-4 form-control"
            name="address.state"
            onChange={handleOnChange}
            placeholder="State"
            type="text"
            required
          />
          <input
            className="mb-4 form-control"
            name="address.city"
            onChange={handleOnChange}
            placeholder="City"
            type="text"
            required
          />
          <input
            className="mb-4 form-control"
            name="company.name"
            onChange={handleOnChange}
            placeholder="Company Name"
            type="text"
            required
          />

          <button className="form-control btn-success">Add User</button>
        </form>
      </div>
    </>
  );
};
