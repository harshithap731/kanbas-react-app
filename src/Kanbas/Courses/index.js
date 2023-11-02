import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import CourseHeader from "./CourseHeader";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <CourseHeader course={course} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route
              path="Piazza"
              element={
                <div className="mt-4">
                  <h2>Piazza</h2>
                </div>
              }
            />
            <Route
              path="ZoomMeetings"
              element={
                <div className="mt-4">
                  <h2>Zoom Meetings</h2>
                </div>
              }
            />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route
              path="Quizzes"
              element={
                <div className="mt-4">
                  <h2>Quizzes</h2>
                </div>
              }
            />
            <Route path="Grades" element={<Grades />} />
            <Route
              path="People"
              element={
                <div className="mt-4">
                  <h2>People</h2>
                </div>
              }
            />
            <Route
              path="PanoptoVideo"
              element={
                <div className="mt-4">
                  <h2>Panopto Video</h2>
                </div>
              }
            />
            <Route
              path="Discussions"
              element={
                <div className="mt-4">
                  <h2>Discussions</h2>
                </div>
              }
            />
            <Route
              path="Announcements"
              element={
                <div className="mt-4">
                  <h2>Announcements</h2>
                </div>
              }
            />
            <Route
              path="Pages"
              element={
                <div className="mt-4">
                  <h2>Pages</h2>
                </div>
              }
            />
            <Route
              path="Files"
              element={
                <div className="mt-4">
                  <h2>Files</h2>
                </div>
              }
            />
            <Route
              path="Rubrics"
              element={
                <div className="mt-4">
                  <h2>Rubrics</h2>
                </div>
              }
            />
            <Route
              path="Outcomes"
              element={
                <div className="mt-4">
                  <h2>Outcomes</h2>
                </div>
              }
            />
            <Route
              path="Collobarations"
              element={
                <div className="mt-4">
                  <h2>Collobarations</h2>
                </div>
              }
            />
            <Route
              path="Syllabus"
              element={
                <div className="mt-4">
                  <h2>Syllabus</h2>
                </div>
              }
            />
            <Route
              path="Settings"
              element={
                <div className="mt-4">
                  <h2>Settings</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
