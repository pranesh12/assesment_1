import { useContext, useState } from "react";
import { userContext } from "../../App";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const UserList = () => {
  const { users, setUsers } = useContext(userContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [SortBy, setSortBy] = useState(null);

  const seacrchData = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const handleSort = (key) => {
    console.log(key);
    const sortedUsers = [...users].sort((a, b) => a[key].localeCompare(b[key]));
    setUsers(sortedUsers);
    // setSortBy(key);
  };

  const usersData = searchQuery == "" ? users : seacrchData;
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="mt-5 mb-5">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ height: "3.5rem" }}
            className="form-control"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className=" mb-5">
          <select
            value={SortBy}
            onChange={(e) => handleSort([e.target.value])}
            className="form-control"
          >
            <option value="firstName">Name</option>
            <option value="email">email</option>
            <option value="company.name">Company Name</option>
          </select>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {usersData &&
            usersData.map((user) => {
              return (
                <div className="col" key={user.id}>
                  <div className="card shadow  bg-body-tertiary">
                    <Link to={`/${user.id}`}>
                      <img src={user.image} className="card-img-top" />
                    </Link>

                    <div className="card-body">
                      <h6 className="card-title">
                        {user.firstName} {user.lastName}
                      </h6>
                      <p className="card-text">Email : {user.email}</p>
                      <p className="card-text">
                        Address : {user.address.address},state:
                        {user.address.state}, City : {user.address.city}
                      </p>
                      <p>Company name : {user.company.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default UserList;
