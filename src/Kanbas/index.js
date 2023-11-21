import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
// import { courses } from "./Dashboard/CardData";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
  const [coursesList, setCoursesList] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCoursesList(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCoursesList([response.data, ...coursesList]);
    setCourse({ name: "" });
  };
  const deleteCourse = async (course) => {
    await axios.delete(`${URL}/${course._id}`);
    setCoursesList(coursesList.filter((c) => c._id !== course._id));
  };

  const addNewCourse = () => {
    setCoursesList([...coursesList, { ...course, _id: new Date().getTime() }]);
  };
  // const deleteCourse = (courseId) => {
  //   setCoursesList(courses.filter((course) => course._id !== courseId));
  // };
  const updateCourse = async (course) => {
    console.log("COURSE", course);
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCoursesList(
      coursesList.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  // const updateCourse = () => {
  //   setCoursesList(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<Account />} /> */}
          <Route
            path="Dashboard"
            element={
              <Dashboard
                coursesList={coursesList}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses coursesList={coursesList} />}
          />
          {/* <Route path="Calendar" element={<h1>Calendar</h1>} /> */}
        </Routes>
        {/* </div> */}
      </div>
    </Provider>
  );
}
export default Kanbas;
