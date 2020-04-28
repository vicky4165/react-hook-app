import React from "react";

const NotificationBody = () => {
  return (
    <div className="dropdown-menu notifications">
      <div className="topnav-dropdown-header">
        <span>Notifications</span>
      </div>
      <div className="drop-scroll">
        <ul className="media-list">
          <li className="media notification-message">
            <a href="activities.html">
              <div className="media-left">
                <span className="avatar">
                  <img
                    alt="John Doe"
                    src="img/user.jpg"
                    className="img-responsive img-circle"
                  />
                </span>
              </div>
              <div className="media-body">
                <p className="m-0 noti-details">
                  <span className="noti-title">John Doe</span> added new task{" "}
                  <span className="noti-title">
                    Patient appointment booking
                  </span>
                </p>
                <p className="m-0">
                  <span className="notification-time">4 mins ago</span>
                </p>
              </div>
            </a>
          </li>
          <li className="media notification-message">
            <a href="activities.html">
              <div className="media-left">
                <span className="avatar">V</span>
              </div>
              <div className="media-body">
                <p className="m-0 noti-details">
                  <span className="noti-title">Tarah Shropshire</span> changed
                  the task name{" "}
                  <span className="noti-title">
                    Appointment booking with payment gateway
                  </span>
                </p>
                <p className="m-0">
                  <span className="notification-time">6 mins ago</span>
                </p>
              </div>
            </a>
          </li>
          <li className="media notification-message">
            <a href="activities.html">
              <div className="media-left">
                <span className="avatar">L</span>
              </div>
              <div className="media-body">
                <p className="m-0 noti-details">
                  <span className="noti-title">Misty Tison</span> added{" "}
                  <span className="noti-title">Domenic Houston</span> and{" "}
                  <span className="noti-title">Claire Mapes</span> to project{" "}
                  <span className="noti-title">Doctor available module</span>
                </p>
                <p className="m-0">
                  <span className="notification-time">8 mins ago</span>
                </p>
              </div>
            </a>
          </li>
          <li className="media notification-message">
            <a href="activities.html">
              <div className="media-left">
                <span className="avatar">G</span>
              </div>
              <div className="media-body">
                <p className="m-0 noti-details">
                  <span className="noti-title">Rolland Webber</span> completed
                  task{" "}
                  <span className="noti-title">
                    Patient and Doctor video conferencing
                  </span>
                </p>
                <p className="m-0">
                  <span className="notification-time">12 mins ago</span>
                </p>
              </div>
            </a>
          </li>
          <li className="media notification-message">
            <a href="activities.html">
              <div className="media-left">
                <span className="avatar">V</span>
              </div>
              <div className="media-body">
                <p className="m-0 noti-details">
                  <span className="noti-title">Bernardo Galaviz</span> added new
                  task <span className="noti-title">Private chat module</span>
                </p>
                <p className="m-0">
                  <span className="notification-time">2 days ago</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="topnav-dropdown-footer">
        <a href="activities.html">View all Notifications</a>
      </div>
    </div>
  );
};

export default NotificationBody;
