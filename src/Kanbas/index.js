import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course Name",
    number: "New Course Number",
    startDate: "2023-10-10",
    endDate: "2023-12-12",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Account"
            element={
              <div>
                <h1>Account</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses"
            element={
              <div>
                <h1>Courses</h1>
                <p>Please navigate to a course via the Dashboard tab...</p>
              </div>
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
          <Route
            path="Calendar"
            element={
              <div>
                <h1>Calendar</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Inbox"
            element={
              <div>
                <h1>Inbox</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="History"
            element={
              <div>
                <h1>History</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Studio"
            element={
              <div>
                <h1>Studio</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Commons"
            element={
              <div>
                <h1>Commons</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          \
          <Route
            path="Help"
            element={
              <div>
                <h1>Help</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
