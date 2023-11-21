import "./home.css";
import { useLocation, useParams } from "react-router";
import { courses } from "../../Dashboard/CardData";
import {
  AiOutlineCheckCircle,
  AiOutlinePlus,
  AiFillCaretDown,
  AiFillCheckCircle,
  AiOutlineStop,
  AiFillHome,
} from "react-icons/ai";
import {
  BsCalendarDate,
  BsFillBarChartFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { BiGridVertical, BiSolidBarChartAlt2 } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";

import { BsLink45Deg } from "react-icons/bs";
import { TableData, displayType } from "./CourseTableData";
import { FaFileImport, FaFileUpload } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home() {
  return (
    <div className="w-100 my-3">
      {/* <div className="mx-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <RxHamburgerMenu size="1.5em" style={{ color: "#b52828" }} />
          <div
            className="wd-account-profile-text"
            style={{ color: "#b52828", marginLeft: "30px" }}
          >
            CS5610.11550.202410
          </div>
          <AiOutlineRight className="mx-3" style={{ color: "#2d3b45" }} />
          <div style={{ color: "#2d3b45", fontSize: "18px", fontWeight: 500 }}>
            Home
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary btn-sm">
          <span>
            <FaGlasses className="me-2" />
          </span>
          Student View
        </button>
      </div>
      <hr className="mx-4" /> */}
      <div className="d-flex">
        {/* <div className="wd-account-nav bg-white pb-4">
          <ul
            className="wd-nav-list-group"
            style={{ maxHeight: "82vh", overflowY: "auto" }}
          >
            <div
              className="mx-4 mb-3"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "12px",
                color: "#2d3b45",
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              202330_2 Spring 2023 Semester Full Term Grad
            </div>
            {courseNavList.map((item) => (
              <li
                className={`wd-nav-list-group-item  ${
                  pathname.includes(item.to) ? "px-2 my-3" : "px-4 mb-3"
                }`}
                style={{
                  marginLeft: pathname.includes(item.to) && "14px",
                  borderLeft: pathname.includes(item.to) && "2px solid #2d3b45",
                }}
              >
                <Link
                  className={`wd-nav-list-group-item-text ${
                    pathname.includes(item.to)
                      ? "wd-nav-list-group-item-active"
                      : "text-danger"
                  }`}
                  to={item.to}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li
              className="wd-nav-list-group-item my-3 px-2"
              style={{ marginLeft: "14px", borderLeft: "2px solid #2d3b45" }}
            >
              <a
                href="index.html"
                className="wd-nav-list-group-item-active wd-nav-list-group-item-text"
              >
                Home
              </a>
            </li>
            <li className="wd-nav-list-group-item mb-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Modules
              </a>
            </li>

            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Piazza
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Zoom Meetings
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a
                href="../Assignments/index.html"
                className="text-danger wd-nav-list-group-item-text"
              >
                Assignments
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Quizzes
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a
                href="../Grades/index.html"
                className="text-danger wd-nav-list-group-item-text"
              >
                Grades
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                People
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Panopto Video
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Discussions
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Announcements
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Pages
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Files
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Rubrics
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Outcomes
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Collaborations
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Syllabus
              </a>
              <i className="fa-regular fa-eye-slash"></i>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a href="#" className="text-danger wd-nav-list-group-item-text">
                Progress Reports (EAB Navigate)
              </a>
            </li>
            <li className="wd-nav-list-group-item my-3 px-4">
              <a
                href="../Settings/CourseDetails/index.html"
                className="text-danger wd-nav-list-group-item-text"
              >
                Settings
              </a>
            </li>
          </ul>
        </div> */}
        <div className="row w-100 me-4" style={{ marginLeft: "30px" }}>
          <div className="col-9">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                Student View
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mx-1"
              >
                View Progress
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle btn-sm d-flex align-items-center"
                  type="button"
                  id="action-menu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineCheckCircle
                    style={{ color: "#1f990c", height: "20px", width: "20px" }}
                  />
                  <span style={{ marginLeft: "5px" }}>Publish All</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="action-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Publish All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Course
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-sm d-flex align-items-center text-light mx-1"
                style={{ backgroundColor: "#b52828" }}
              >
                {/* <i className="fa-solid fa-plus"></i> */}
                <AiOutlinePlus />
                <span style={{ marginLeft: "5px" }}>Module</span>
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                  id="action-menu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical />
                </button>
                <ul className="dropdown-menu" aria-labelledby="action-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Speed Grader
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Duplicate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div style={{ overflowY: "auto", height: "75vh" }}>
              <ul className="list-group">
                {TableData.map((data, index) =>
                  data.type === displayType.TITLE ? (
                    <li
                      className="list-group-item"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          {/* <i className="fa-solid fa-grip-vertical"></i> */}
                          <BiGridVertical />
                          <AiFillCaretDown />
                          <div className="ms-2" style={{ fontWeight: 500 }}>
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <AiFillCaretDown className="ms-2" />
                          <AiOutlinePlus
                            className="mx-2"
                            style={{ color: "#2d3b45" }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.HEADING ? (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical />
                          <div className="ms-2" style={{ fontWeight: 500 }}>
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.SUBSECTION ? (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical />
                          <div
                            className="ms-2 ps-5"
                            style={{ fontWeight: 500 }}
                          >
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.SLIDES ? (
                    <li
                      className="list-group-item"
                      style={{ color: "#b52828" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical style={{ color: "#2d3b45" }} />
                          <a
                            href="#"
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <BsLink45Deg
                              className="mx-2"
                              style={{
                                color: "#1f990c",
                                height: "20px",
                                width: "20px",
                              }}
                            />
                            <div className="" style={{ fontWeight: 500 }}>
                              {data.displayText}
                            </div>
                            <BiLinkExternal className="ms-2" />
                          </a>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical style={{ color: "#2d3b45" }} />
                        </div>
                      </div>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-3" style={{ paddingRight: "0px" }}>
            <div style={{ color: "#2d3b45", fontWeight: "500" }}>
              Course Status
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary d-flex align-items-center"
              >
                <AiOutlineStop />
                <span className="ms-2">Unpublish</span>
              </button>
              <button
                type="button"
                className="btn btn-success disabled d-flex align-items-center"
              >
                {/* <i className="fa-solid fa-circle-check me-2"></i> */}
                <AiFillCheckCircle />
                <span className="ms-2">Success</span>
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-3 text-start btn-sm d-flex align-items-center"
            >
              <FaFileImport />
              <span className="ms-2">Import from Contact</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <FaFileUpload />
              <span className="ms-2">Import from Commons</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <AiFillHome />
              <span className="ms-2">Choose Home Page</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <BsFillBarChartFill />
              <span className="ms-2">View Course Stream</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <HiSpeakerphone />
                <span className="ms-2">New Announcement</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <BiSolidBarChartAlt2 />
                <span className="ms-2">New Analytics</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <IoNotificationsSharp />
                <span className="ms-2">View Course Notifications</span>
              </div>
            </button>
            <div className="mt-3" style={{ overflowY: "auto", height: "33vh" }}>
              <div>
                <div
                  className=""
                  style={{ color: "#2d3b45", fontSize: "12px" }}
                >
                  To do
                </div>
                <hr className="my-1" />
                <div className="d-flex align-items-baseline">
                  <div
                    className="text-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#b52828",
                      width: "17px",
                      height: "17px",
                      fontSize: "12px",
                    }}
                  >
                    1
                  </div>
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Grade 1 - ENV + HTML
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      100 points · Sep 18 at 11:59pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className=""
                    style={{ color: "#2d3b45", fontSize: "12px" }}
                  >
                    Coming Up
                  </div>
                  <div className="d-flex align-items-center">
                    <BsCalendarDate className="me-2" />
                    <span style={{ color: "#b52828", fontSize: "12px" }}>
                      View Calendar
                    </span>
                  </div>
                </div>
                <hr className="mt-1 mb-2" />
                <div className="d-flex align-items-baseline">
                  <BsCalendarDate />
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Lecture
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      CS5610.11550.202410
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      Sep 11 at 7pm
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-baseline mt-3">
                  <BsCalendarDate />
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Lecture
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      CS5610.11550.202410
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      Sep 11 at 7pm
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-baseline mt-3">
                  <div
                    style={{
                      color: "#b52828",
                      fontWeight: "500",
                      fontSize: "14px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "150px",
                    }}
                  >
                    12 more in the next week to complete before deadline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
