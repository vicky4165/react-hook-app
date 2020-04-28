/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SideMenu = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="active">
              <a href="/">
                <i className="la la-dashboard"></i> <span>Dashboard</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user"></i> <span> Employees</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#">All Employees</a>
                </li>
                <li>
                  <a href="#">Holidays</a>
                </li>
                <li>
                  <a href="#">
                    Leave Requests{" "}
                    <span className="badge bg-primary pull-right">1</span>
                  </a>
                </li>
                <li>
                  <a href="#">Attendance</a>
                </li>
                <li>
                  <a href="#">Departments</a>
                </li>
                <li>
                  <a href="#">Designations</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="la la-users"></i> <span>Clients</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-rocket"></i> <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-tasks"></i> <span>Tasks</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-phone"></i> <span> Calls</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#">Voice Call</a>
                </li>
                <li>
                  <a href="#">Video Call</a>
                </li>
                <li>
                  <a href="#">Incoming Call</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="la la-book"></i> <span>Contacts</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-user-secret"></i> <span>Leads</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o"></i> <span> Accounts </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#">Estimates</a>
                </li>
                <li>
                  <a href="#">Invoices</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Expenses</a>
                </li>
                <li>
                  <a href="#">Provident Fund</a>
                </li>
                <li>
                  <a href="#">Taxes</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money"></i> <span> Payroll </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#"> Employee Salary </a>
                </li>
                <li>
                  <a href="#"> Payslip </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="la la-clock-o"></i> <span>Timing Sheet</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-building"></i> <span> Jobs </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#"> Manage Jobs </a>
                </li>
                <li>
                  <a href="#"> Applied Candidates </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="la la-ticket"></i> <span>Tickets</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-calendar"></i> <span>Events</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-at"></i> <span>Email</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-comments"></i> <span>Chat</span>{" "}
                <span className="badge bg-primary pull-right">5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-object-ungroup"></i> <span>Assets</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-bell"></i> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-user-plus"></i> <span>Users</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart"></i> <span> Reports </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#"> Expense Report </a>
                </li>
                <li>
                  <a href="#"> Invoice Report </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="la la-cog"></i> <span>Settings</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns"></i> <span> Pages </span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="#"> Login </a>
                </li>
                <li>
                  <a href="#"> Register </a>
                </li>
                <li>
                  <a href="#"> Forgot Password </a>
                </li>
                <li>
                  <a href="#"> Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-share-alt"></i> <span>Multi Level</span>{" "}
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: "none" }}>
                <li className="submenu">
                  <a href="#">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="#">
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a href="#">
                        {" "}
                        <span> Level 2</span>{" "}
                        <span className="menu-arrow"></span>
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="#">Level 3</a>
                        </li>
                        <li>
                          <a href="#">Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
