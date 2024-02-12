import { useContext, useState, useEffect } from "react";
import { userContext } from "../../App";
import Usercard from "../userCard/Usercard";
import { AddUser } from "../addUser/AddUser";

const UserList = () => {
  const { users, setUsers } = useContext(userContext);
  const [renderBySort, setRenderBySort] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const localUsers = JSON.parse(localStorage.getItem("users")) || users;

  const seacrchData = localUsers.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (key) => {
    setRenderBySort(true);
    const sortedUsers = [...localUsers].sort((a, b) => {
      const isNested = key.includes(".");
      if (isNested) {
        const getProperty = (obj, path) =>
          path.split(".").reduce((acc, val) => acc[val], obj);
        return getProperty(a, key).localeCompare(getProperty(b, key));
      } else {
        return a[key].localeCompare(b[key]);
      }
    });

    setUsers(sortedUsers);
    setSortBy(key);
  };

  const handleSearch = (e) => {
    setRenderBySort(false);
    setSearchQuery(e.target.value);
  };

  // Reset sort state when search query changes
  useEffect(() => {
    setSortBy(null);
  }, [searchQuery]);

  const mainData = searchQuery === "" ? localUsers : seacrchData;

  return (
    <div className="container mt-5">
      <div className="mt-5 mb-5">
        <input
          value={searchQuery}
          onChange={handleSearch}
          style={{ height: "3.5rem" }}
          className="form-control"
          type="text"
          placeholder="Search"
        />
      </div>

      <label className="mb-3 pr-5">Sort by</label>
      <div className="mb-5">
        <select
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
          className="form-control"
        >
          <option value="firstName">Name</option>
          <option value="email">Email</option>
          <option value="company.name">Company Name</option>
        </select>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {renderBySort
          ? users.map((user) => <Usercard key={user.id} user={user} />)
          : mainData.map((user) => <Usercard key={user.id} user={user} />)}
      </div>
      <AddUser />
    </div>
  );
};

export default UserList;
