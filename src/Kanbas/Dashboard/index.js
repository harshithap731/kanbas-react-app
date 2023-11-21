/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { courses } from "./CardData";
import DashboardCard from "./card";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard({
  coursesList,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column w-100 my-3">
        <div className="mx-4 d-flex align-items-center">
          <div className="wd-account-profile-text">Dashboard</div>
        </div>
        <hr className="mx-4 mt-2 mb-4" />
        <div className="mx-4 d-flex align-items-center">
          <div style={{ fontSize: "20px", color: "#2d3b45", fontWeight: 500 }}>
            Published Courses (24)
          </div>
        </div>
        <hr className="mx-4 mt-1" />
        <div className="mx-4 row">
          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control col"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course?.number}
            className="form-control col ms-5"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
        <div className="mx-4 row mt-2">
          <input
            value={course.startDate}
            className="form-control col"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
            type="date"
          />
          <input
            value={course.endDate}
            className="form-control col ms-4"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            type="date"
          />
        </div>
        <div className="d-flex mx-4 mt-2">
          <button
            className=" btn btn-sm btn-success me-2"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className=" btn btn-sm btn-primary"
            // onClick={() => updateCourse()}
            onClick={(event) => {
              event.preventDefault();
              updateCourse(course);
            }}
          >
            Update
          </button>
        </div>
        <div
          // className="d-flex flex-wrap"
          className="mt-3"
          style={{ overflowY: "auto", height: "50vh" }}
        >
          <ul className="list-group">
            {coursesList &&
              coursesList.map((course) => (
                // <DashboardCard id={course._id} courseData={course} />

                <li className="list-group-item mx-4 d-flex justify-content-between">
                  <Link
                    className="text-decoration-none"
                    style={{ color: "#2d3b45" }}
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                  >
                    {course.name}
                  </Link>
                  <div className="d-flex">
                    <button
                      className=" btn btn-sm btn-warning me-2"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      className=" btn btn-sm btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course);
                      }}

                      // onClick={addNewCourse}
                    >
                      Delete
                    </button>
                  </div>
                </li>

                // <Link
                //   key={course._id}
                //   to={`/Kanbas/Courses/${course._id}`}
                //   className="list-group-item mx-4"
                // >
                //   {course.name}
                // </Link>

                // <div className="mx-4">{course.name}</div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
