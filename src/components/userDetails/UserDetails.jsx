import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../App";

const UserDetails = () => {
  const { users } = useContext(userContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);
  const { image, firstName, lastName, email, address } = user[0];

  return (
    <div>
      <div className="container mt-5">
        {user[0] && (
          <div className="card">
            <img src={image} className="card-img-top" />
            {/* 
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
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
