/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { NavLinks } from "../../Data/NavLinks";
function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div className="vh-100 wd-nav">
      <ul className="wd-nav-list-group text-light">
        <img
          src="../../images/neu_logo.png"
          height="60px"
          className="w-full"
          style={{ marginLeft: "6px" }}
        />
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link.href}`}
            className={`list-group-item py-1`}
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${
                pathname.includes(link.href) && "wd-active"
              }`}
            >
              {link.icon}
              <div
                className={`${
                  pathname.includes(link.href) && "wd-active-title"
                }`}
              >
                {link.title}
              </div>
            </div>
          </Link>
        ))}
        {/* <li className="wd-nav-list-group-item py-2">
          <a href="../Account/Profile/index.html" className="text-light"></a>
        </li>
        <li className="wd-nav-list-group-item py-1 wd-active">
          <a href="../../Dashboard/index.html" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <AiOutlineDashboard
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div className="wd-active-title">Dashboard</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="../Courses/Home/index.html" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <LiaBookSolid
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>Courses</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="#" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <FaRegCalendarAlt
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>Calendar</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="#" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <HiMiniInboxArrowDown
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>Inbox</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="#" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <BsClockHistory
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>History</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="#" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <HiOutlinePresentationChartLine
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>Studio</div>
            </div>
          </a>
        </li>
        <li className="wd-nav-list-group-item py-1">
          <a href="#" className="text-light">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <BiHelpCircle
                className="wd-nav-icon"
                style={{ height: "2em", width: "2em" }}
              />
              <div>Help</div>
            </div>
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
