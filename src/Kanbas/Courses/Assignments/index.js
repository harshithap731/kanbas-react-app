/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiGridVertical } from "react-icons/bi";
import "./assignments.css";
import {
  AiFillCaretDown,
  AiFillCheckCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa";
import { assignmentDataDetails } from "./AssignmentData";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, updateAssignment } from "./AssignmentReducer";
function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course_id == courseId
  );

  // const URL = "http://localhost:4000/api/courses";
  // const findCourseById = async (courseId) => {
  //   const response = await axios.get(`${URL}/${courseId}`);
  //   setCourse(response.data);
  // };
  // useEffect(() => {
  //   findCourseById(courseId);
  // }, [courseId]);

  const assignmentId = new Date().getTime().toString();
  console.log("courseAssignments", courseAssignments);
  console.log("assignments", assignments, courseId, assignmentId);
  console.log("CID", courseId);
  console.log("AID", assignmentId);
  return (
    // <div style={{ overflowY: "hidden" }}>
    <div className="d-flex w-100">
      <div className="d-flex flex-column w-100 my-3">
        {/* <div className="mx-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <i
                className="fa-solid fa-bars fa-xl"
                style={{ color: "#b52828" }}
              ></i>
              <div
                className="wd-account-profile-text"
                style={{ color: "#b52828", marginLeft: "30px" }}
              >
                CS5610.11550.202410
              </div>
              <i
                className="fa-solid fa-chevron-right mx-3"
                style={{ color: "#2d3b45" }}
              ></i>
              <div
                style={{ color: "#2d3b45", fontSize: "18px", fontWeight: 500 }}
              >
                Assignments
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <span>
                <i className="fa-solid fa-glasses"></i>
              </span>
              Student View
            </button>
          </div>
          <hr className="mx-4" /> */}
        {/* <div className="d-flex"> */}
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
                <li className="wd-nav-list-group-item mb-3 px-4">
                  <a
                    href="../Home/index.html"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Home
                  </a>
                </li>
                <li className="wd-nav-list-group-item mb-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Modules
                  </a>
                </li>

                <li className="wd-nav-list-group-item my-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Piazza
                  </a>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Zoom Meetings
                  </a>
                </li>
                <li
                  className="wd-nav-list-group-item my-3 px-2"
                  style={{
                    marginLeft: "14px",
                    borderLeft: "2px solid #2d3b45",
                  }}
                >
                  <a
                    href="index.html"
                    className="wd-nav-list-group-item-active wd-nav-list-group-item-text"
                  >
                    Assignments
                  </a>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
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
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    People
                  </a>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Panopto Video
                  </a>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Discussions
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Announcements
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Pages
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Files
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Rubrics
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Outcomes
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Collaborations
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
                    Syllabus
                  </a>
                  <i className="fa-regular fa-eye-slash"></i>
                </li>
                <li className="wd-nav-list-group-item my-3 px-4">
                  <a
                    href="#"
                    className="text-danger wd-nav-list-group-item-text"
                  >
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
        <div className="me-4" style={{ marginLeft: "30px" }}>
          <div className="">
            <div className="d-flex justify-content-between">
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search for assignment"
                />
              </div>
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                >
                  {/* <i className="fa-solid fa-plus"></i> */}
                  <AiOutlinePlus />
                  <span style={{ marginLeft: "5px" }}>Group</span>
                </button>
                <Link
                  type="button"
                  className="btn btn-sm d-flex align-items-center text-light mx-1"
                  style={{ backgroundColor: "#b52828" }}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`}
                >
                  <AiOutlinePlus />
                  <span style={{ marginLeft: "5px" }}>Assignment</span>
                </Link>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary px-1"
                    type="button"
                    id="action-menu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
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
            </div>
            <hr />
            <div style={{ overflowY: "auto", height: "75vh" }}>
              <ul className="list-group">
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <BiGridVertical
                        style={{ height: "20px", width: "20px" }}
                      />
                      <AiFillCaretDown />
                      {/* <i className="fa-solid fa-caret-down ms-2"></i> */}
                      <div className="ms-2" style={{ fontWeight: 500 }}>
                        Assignments
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span
                        className="border border-secondary px-2 py-1"
                        style={{ borderRadius: "15px" }}
                      >
                        40% 0f total
                      </span>
                      <AiOutlinePlus
                        className="mx-2"
                        style={{
                          color: "#2d3b45",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <BsThreeDotsVertical
                        // className="me-3"
                        style={{
                          color: "#2d3b45",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      {/* <i
                        className="fa-solid fa-plus mx-2"
                        style={{ color: "#2d3b45" }}
                      ></i> */}
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy To...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move To...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Send To...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {courseAssignments.map((data, index) => (
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-grip-vertical"></i>
                        <BiGridVertical
                          style={{
                            height: "20px",
                            width: "20px",
                          }}
                        />
                        <FaFileSignature
                          className="mx-3"
                          style={{
                            color: "#1f990c",
                            height: "20px",
                            width: "20px",
                          }}
                        />
                        <div className="">
                          <div style={{ fontWeight: 500 }}>
                            <Link
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              to={`/Kanbas/Courses/${courseId}/Assignments/${data._id}`}
                              onClick={() => dispatch(updateAssignment(data))}
                            >
                              {data.title}
                            </Link>
                          </div>
                          <div
                            style={{ fontSize: "14px", fontWeight: "normal" }}
                          >
                            {data.description}
                          </div>
                          <div
                            style={{ fontWeight: "normal", fontSize: "14px" }}
                          >
                            <span style={{ fontWeight: 500 }}>Due </span>
                            {data.due}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => dispatch(deleteAssignment(data._id))}
                        >
                          Delete
                        </button>
                        <AiFillCheckCircle
                          className="me-3"
                          style={{
                            color: "#1f990c",
                            height: "20px",
                            width: "20px",
                          }}
                        />
                        <div className="dropdown">
                          <button
                            className="btn shadow-none p-0 d-flex align-items-center"
                            type="button"
                            id="title-assignment-action-menu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
                            <BsThreeDotsVertical
                              style={{
                                color: "#2d3b45",
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="title-assignment-action-menu"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to={`/Kanbas/Courses/${courseId}/Assignments/${data._id}`}
                              >
                                Edit
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <BiGridVertical
                        style={{
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <FaFileSignature
                        className="mx-3"
                        style={{
                          color: "#1f990c",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A1 SETUP
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <AiFillCheckCircle
                        className="me-3"
                        style={{
                          color: "#1f990c",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0 d-flex align-items-center"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                          <BsThreeDotsVertical
                            style={{
                              color: "#2d3b45",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <i
                        className="fa-solid fa-file-signature mx-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A2 HTML
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-circle-check me-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <i
                        className="fa-solid fa-file-signature mx-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A3 CSS
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-circle-check me-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <i
                        className="fa-solid fa-file-signature mx-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A4 BOOTSTRAP
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-circle-check me-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <i
                        className="fa-solid fa-file-signature mx-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A5 JAVASCRIPT
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-circle-check me-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-grip-vertical"></i>
                      <i
                        className="fa-solid fa-file-signature mx-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="">
                        <div style={{ fontWeight: 500 }}>
                          <a
                            href="edit.html"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            A6 ERACT
                          </a>
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          Week 0 - SETUP - Week starting on Monday September 5th
                          (9/5/2022) Module |
                        </div>
                        <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                          <span style={{ fontWeight: 400 }}>Due </span>Sep 18,
                          2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-circle-check me-3"
                        style={{ color: "#1f990c" }}
                      ></i>
                      <div className="dropdown">
                        <button
                          className="btn shadow-none p-0"
                          type="button"
                          id="title-assignment-action-menu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="title-assignment-action-menu"
                        >
                          <li>
                            <a className="dropdown-item" href="edit.html">
                              Edit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
}

export default Assignments;
