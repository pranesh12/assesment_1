import { useState } from "react";
import Navbar from "../navbar/Navbar";

export const AddUser = () => {
  const [formData, setFormData] = useState({
    avatar: "",
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
    setFormData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = () => {};
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData.avatar(URL.createObjectURL(file));
  //     setFormData({...formData,})
  //   }
  // };

  console.log(formData);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          {/* <input
            className="mb-4 form-control"
            name="avatar"
            placeholder="Avatar"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
          /> */}
          <input
            className="mb-4 form-control"
            name="firstName"
            onChange={handleOnChange}
            placeholder="First Name"
            type="text"
          />
          <input
            className="mb-4 form-control"
            name="lastName"
            onChange={handleOnChange}
            placeholder="Last Name"
            type="text"
          />
          <input
            className="mb-4 form-control"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
            type="email"
          />
          <input
            className="mb-4 form-control"
            name="address.address"
            onChange={handleOnChange}
            placeholder="Street"
            type="text"
          />
          <input
            className="mb-4 form-control"
            name="address.state"
            onChange={handleOnChange}
            placeholder="State"
            type="text"
          />
          <input
            className="mb-4 form-control"
            name="address.city"
            onChange={handleOnChange}
            placeholder="City"
            type="text"
          />
          <input
            className="mb-4 form-control"
            name="company.name"
            onChange={handleOnChange}
            placeholder="Company Name"
            type="text"
          />

          <button className="form-control btn-success">Add User</button>
        </form>
      </div>
    </>
  );
};
