import { useContext, useState } from "react";
import { userContext } from "../../App";
import Navbar from "../navbar/Navbar";
import Usercard from "../userCard/Usercard";

const UserList = () => {
  const { users, setUsers } = useContext(userContext);
  const [renderBySort, setRenderBySort] = useState(false);
  const Lusers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : users;

  const [searchQuery, setSearchQuery] = useState("");
  const [SortBy, setSortBy] = useState(null);

  const seacrchData = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const handleSort = (key) => {
    setRenderBySort(true);
    const sortedUsers = [...users].sort((a, b) => a[key].localeCompare(b[key]));
    setUsers(sortedUsers);
    setSortBy(key);
  };

  const handleSearch = (e) => {
    setRenderBySort(false);
    setSearchQuery(e.target.value);
  };

  const usersData = searchQuery == "" ? Lusers : seacrchData;
  return (
    <>
      <Navbar />

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

        <div className=" mb-5">
          <select
            value={SortBy}
            onChange={(e) => handleSort([e.target.value])}
            className="form-control"
          >
            <option value="firstName">Name</option>
            <option value="email">Email</option>
            <option value="company.name">Company Name</option>
          </select>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {renderBySort
            ? users.map((user) => {
                return <Usercard key={user.id} user={user} />;
              })
            : usersData.map((user) => {
                return <Usercard key={user.id} user={user} />;
              })}
        </div>
      </div>
    </>
  );
};

export default UserList;
