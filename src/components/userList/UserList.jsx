import { useContext } from "react";
import { userContext } from "../../App";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users } = useContext(userContext);

  console.log(users);
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {users &&
          users.map((user) => {
            return (
              <div className="col" key={user.id}>
                <div className="card">
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
  );
};

export default UserList;
