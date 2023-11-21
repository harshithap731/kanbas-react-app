/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import { courseNavList } from "./CourseNavData";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function CourseNav() {
  const { pathname } = useLocation();
  return (
    <div className="wd-account-nav bg-white pb-4">
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
            className={`wd-nav-list-group-item ${
              pathname.includes(item.to) ? "px-2 my-3" : "px-4 mb-3"
            } ${
              item.eyeIcon &&
              "d-flex align-items-center justify-content-between"
            }`}
            style={{
              marginLeft: pathname.includes(item.to) && "14px",
              borderLeft: pathname.includes(item.to) && "2px solid #2d3b45",
            }}
          >
            <Link
              className={`wd-nav-list-group-item-text text-wrap ${
                pathname.includes(item.to)
                  ? "wd-nav-list-group-item-active"
                  : "text-danger"
              }`}
              to={item.to}
            >
              {item.title}
            </Link>
            {item.eyeIcon && (
              <AiOutlineEyeInvisible
                style={{ height: "20px", width: "20px" }}
              />
            )}
          </li>
        ))}
        {/* <li className="wd-nav-list-group-item my-3 px-4 d-flex align-items-center justify-content-between">
          <a href="#" className="text-danger wd-nav-list-group-item-text">
            Collaborations
          </a>
          <i className="fa-regular fa-eye-slash"></i>
        </li>
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
        </li> */}
      </ul>
    </div>
  );
}

export default CourseNav;
