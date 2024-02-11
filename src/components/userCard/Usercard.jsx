import { Link } from "react-router-dom";

const Usercard = ({ user }) => {
  const { image, id, firstName, lastName, email, address, company } = user;
  return (
    <div>
      <div className="col">
        <div className="card shadow  bg-body-tertiary">
          <img src={image} className="card-img-top " />

          <div className="card-body">
            <Link
              style={{ textDecoration: "none", color: "orange" }}
              to={`/${id}`}
            >
              <h6 className="card-title">
                {firstName} {lastName}
              </h6>
            </Link>
            <p className="card-text">Email : {email}</p>
            <p className="card-text">
              Address : {address.address},state:
              {address.state}, City : {address.city}
            </p>
            <p>Company name : {company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
