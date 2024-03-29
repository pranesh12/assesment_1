import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../App";

const UserDetails = () => {
  const { users } = useContext(userContext);
  const lusers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : users;
  const { id } = useParams();
  const user = lusers.filter((user) => user.id == id);

  return (
    <div>
      <div className="container mt-5">
        <Link
          style={{ color: "#F05D0E", textDecoration: "none" }}
          className="pb-5"
          to="/"
        >
          <p>Go back to home</p>
        </Link>

        {user[0] && (
          <div className="card mb-3">
            <div className="mx-auto ">
              <img src={user[0].image} className="img-thumbnail" />
            </div>

            <div className="card-body">
              <h5 className="card-title">
                {user[0].firstName} {user[0].lastName}
              </h5>
              <p className="card-text">Email : {user[0].email}</p>
              <address>
                Address : {user[0].address.address},state:
                {user[0].address.state}, City : {user[0].address.city}
              </address>
              <p className="card-text">Company Name : {user[0].company.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
