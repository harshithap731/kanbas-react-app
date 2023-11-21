import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNav from "./CourseNav";
import Home from "./Home";
import Modules from "./Modules";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineRight } from "react-icons/ai";
import { FaGlasses } from "react-icons/fa";
import { courses } from "../Dashboard/CardData";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { assignmentDataDetails } from "./Assignments/AssignmentData";
import { useEffect, useState } from "react";
import Grades from "./Grades";
import axios from "axios";
// import CourseNavigation from "./CourseNavigation";

function Courses() {
  const [assignmentId, setAssignmentId] = useState("");
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  // const courseDetails = coursesList.find(
  //   (course) => course._id === parseInt(courseId)
  // );
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const assignmentDetails = assignmentDataDetails.find(
    (assignment) => assignment._id === parseInt(assignmentId)
  );
  const currentPage = pathname.includes("Home")
    ? "Home"
    : pathname.includes("Assignments")
    ? "Assignment"
    : pathname.includes("Grades")
    ? "Grades"
    : pathname.includes("Modules")
    ? "Modules"
    : pathname.includes("Settings")
    ? "Settings"
    : "";

  // console.log("COMING ", courseDetails);
  //   const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="w-100 my-3">
      <div className="mx-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <RxHamburgerMenu size="1.5em" style={{ color: "#b52828" }} />
          <div
            className={`wd-account-profile-text ${
              pathname.includes(`Assignments/${assignmentId}`) && "w-25"
            }`}
            style={{
              color: "#b52828",
              marginLeft: "30px",
              overflow:
                pathname.includes(`Assignments/${assignmentId}`) && "hidden",
              textOverflow:
                pathname.includes(`Assignments/${assignmentId}`) && "ellipsis",
              whiteSpace:
                pathname.includes(`Assignments/${assignmentId}`) && "nowrap",
            }}
          >
            {course.number}
          </div>
          <AiOutlineRight className="mx-3" style={{ color: "#2d3b45" }} />
          <div
            style={{
              color: pathname.includes(`Assignments/${assignmentId}`)
                ? "#b52828"
                : "#2d3b45",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {currentPage}
          </div>
          {pathname.includes(`Assignments/${assignmentId}`) && (
            <>
              <AiOutlineRight className="mx-3" style={{ color: "#2d3b45" }} />
              <div
                className="w-25"
                style={{
                  color: "#2d3b45",
                  fontSize: "18px",
                  fontWeight: 500,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {assignmentDetails && assignmentDetails?.title}
              </div>
            </>
          )}
        </div>
        {pathname.includes("Home") ||
          (pathname.includes(`Assignments/${assignmentId}`) && (
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <span>
                <FaGlasses className="me-2" />
              </span>
              Student View
            </button>
          ))}
      </div>
      <hr className="mx-4" />
      <div className="d-flex" style={{ maxHeight: "85vh" }}>
        <CourseNav />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor setAssignmentId={setAssignmentId} />}
          />
          <Route path="Grades" element={<Grades />} />
          <Route path="Settings" element={<h1>Assignments</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;
