/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NotificationBody from "../Notification/NotificationBody";

const HeaderNav = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="#" className="logo">
          <img src="img/logo.png" width="40" height="40" alt="" />
        </a>
      </div>

      <a id="toggle_btn" href="#">
        <i className="la la-bars"></i>
      </a>

      <div className="page-title-box pull-left">
        <h3>Focus Technologies</h3>
      </div>

      <a id="mobile_btn" className="mobile_btn pull-left" href="#sidebar">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>

      <ul className="nav navbar-nav navbar-right user-menu pull-right">
        <li className="dropdown hidden-xs">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o"></i>{" "}
            <span className="badge bg-purple pull-right">3</span>
          </a>
          <NotificationBody />
        </li>

        <li className="dropdown hidden-xs">
          <a href="#" id="open_msg_box" className="hasnotifications">
            <i className="fa fa-comment-o"></i>{" "}
            <span className="badge bg-purple pull-right">8</span>
          </a>
        </li>

        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle user-link"
            data-toggle="dropdown"
            title="Admin"
          >
            <span className="user-img">
              <img
                className="img-circle"
                src="img/user.jpg"
                width="40"
                alt="Admin"
              />

              <span className="status online"></span>
            </span>
            <span>Admin</span>
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Edit Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="dropdown mobile-user-menu pull-right">
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <ul className="dropdown-menu pull-right">
          <li>
            <a href="#">My Profile</a>
          </li>
          <li>
            <a href="#">Edit Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
