import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { logoutUser } from "../../redux/actions/authActions";
import "./nav.css";

const Nav = (props) => {
    const auth = useSelector((state) => state.auth);

    const logout = () => {
      logoutUser();
    }

    return (
      <div>
          { auth.email &&
            <div>
              Authenticated User:
              <strong> {auth.email} </strong>
            </div>
          }
          <div className="nav-strip">
              <Link to={"/order"} className="nav-link">
                  <div className="nav-link-style">
                      <label className="nav-label">Order Form</label>
                  </div>
              </Link>
              <Link to={"/view-orders"} className="nav-link" id="middle-link">
                  <div className="nav-link-style">
                      <label className="nav-label">View Orders</label>
                  </div>
              </Link>
              <Link
                onClick={() => logout()}
                to={"/login"}
                className="nav-link"
              >
                  <div className="nav-link-style">
                      <label className="nav-label">Log Out</label>
                  </div>
              </Link>
          </div>
      </div>
    );
}

export default Nav;
