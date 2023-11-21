/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate, useParams } from "react-router";
import "./edit.css";
import { assignmentDataDetails } from "../AssignmentData";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
  setAssignment,
} from "../AssignmentReducer";
import { useEffect } from "react";

function AssignmentEditor(props) {
  const { setAssignmentId } = props;
  const { assignmentId } = useParams();
  setAssignmentId(assignmentId);
  // const assignmentData = assignmentDataDetails.find(
  //   (assignment) => assignment._id === parseInt(assignmentId)
  // );
  const dispatch = useDispatch();
  const assignmentData = useSelector(
    (state) => state.assignmentReducer.assignment
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(addAssignment({ ...assignmentData, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="w-100" style={{ overflowY: "hidden" }}>
      {/* <div className="d-flex"> */}
      <div className="d-flex flex-column w-100 my-3">
        <div className="d-flex">
          <div className="row w-100 me-4" style={{ marginLeft: "30px" }}>
            <div className="col">
              <div className="d-flex justify-content-end align-items-center">
                <AiFillCheckCircle
                  style={{
                    color: "#1f990c",
                    height: "20px",
                    width: "20px",
                  }}
                />
                <div
                  style={{ color: "#1f990c", fontWeight: 500 }}
                  className="mx-2"
                >
                  Published
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary px-1"
                    type="button"
                    id="action-menu"
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
                <form className="pe-2">
                  <div className="form-group">
                    <label for="assignmentName">Assignment Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="assignmentName"
                      aria-describedby="assignmentName"
                      placeholder="Edit assignment name"
                      value={assignmentData.title}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignmentData,
                            title: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      id="assignmentDescription"
                      rows="3"
                      value={assignmentData.description}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignmentData,
                            description: e.target.value,
                          })
                        )
                      }
                    ></textarea>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className="form-group d-flex align-items-center justify-content-center w-50 mt-3">
                      <label for="assignmentPoints" className="w-50">
                        Points
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="assignmentPoints"
                        aria-describedby="assignmentPoints"
                        placeholder="points"
                        value="88"
                      />
                    </div>
                    {/* <div className="form-group d-flex align-items-center w-50 mt-3">
                      <label for="assignment-group" className="w-50">
                        Assignment Group
                      </label>
                      <select
                        className="form-select"
                        aria-label="assignment-group"
                      >
                        <option selected>ASIGNMENTS</option>
                        <option value="1">EXAMS</option>
                      </select>
                    </div>
                    <div className="form-group d-flex align-items-center w-50 mt-3">
                      <label for="assignment-group" className="w-50">
                        Display Grade as
                      </label>
                      <select
                        className="form-select"
                        aria-label="assignment-group"
                      >
                        <option selected>Percentage</option>
                        <option value="1">CGPA</option>
                      </select>
                    </div>
                    <div className="form-group d-flex align-items-center w-50 mt-3">
                      <label for="assignment-group" className="w-25"></label>
                      <input
                        type="checkbox"
                        className="form-check-input ms-5"
                        id=""
                      />
                      <label
                        className="form-check-label ms-2"
                        style={{ fontSize: "13px" }}
                        for="exampleCheck1"
                      >
                        Do not count this assignment towards the final grade
                      </label>
                    </div>
                    <div className="form-group d-flex align-items-start w-50 mt-3">
                      <label for="Submission-type" className="w-50">
                        Submission Type
                      </label>
                      <div
                        className="p-3 w-100"
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "4px",
                        }}
                      >
                        <select
                          className="form-select w-75"
                          aria-label="Submission-type"
                        >
                          <option selected>Online</option>
                          <option value="1">In person</option>
                        </select>
                        <label className="my-2" style={{ fontWeight: 500 }}>
                          Online Entry Options
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="online-options"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="onlineOption1"
                          >
                            Text entry
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="online-options"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="onlineOption2"
                          >
                            Website URL
                          </label>
                        </div>
                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="online-options"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="onlineOption3"
                          >
                            Media Recordings
                          </label>
                        </div>

                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="online-options"
                          />
                          <label
                            className="form-check-label"
                            for="onlineOption4"
                          >
                            Student Annotation
                          </label>
                        </div>

                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="online-options"
                          />
                          <label
                            className="form-check-label"
                            for="onlineOption5"
                          >
                            File Uploads
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group d-flex align-items-start w-50 mt-3">
                      <label for="Submission-type" className="w-50">
                        Assign
                      </label>
                      <div
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "4px",
                        }}
                      >
                        <div className="p-3 w-100">
                          {/* <div className="form-group">
                            <label for="assignTo" style={{ fontWeight: 500 }}>
                              Assign To
                            </label>
                            <select className="form-control" id="assignTo">
                              <option>Everyone</option>
                              <option>Students</option>
                            </select>
                          </div> */}
                          <div className="form-group mt-2">
                            <label
                              for="assignmentDueDate"
                              style={{ fontWeight: 500 }}
                            >
                              Due
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="assignmentDueDate"
                              value={assignmentData.due}
                              onChange={(e) =>
                                dispatch(
                                  setAssignment({
                                    ...assignmentData,
                                    due: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-group mt-2">
                              <label
                                for="assignmentAvailable"
                                style={{ fontWeight: 500 }}
                              >
                                Available from
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="assignmentAvailable"
                                value={assignmentData.availableFrom}
                                onChange={(e) =>
                                  dispatch(
                                    setAssignment({
                                      ...assignmentData,
                                      availableFrom: e.target.value,
                                    })
                                  )
                                }
                              />
                            </div>
                            <div className="form-group mt-2 ms-2">
                              <label
                                for="assignmentAvailableUntil"
                                style={{ fontWeight: 500 }}
                              >
                                Until
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="assignmentAvailableUntil"
                                value={assignmentData.availableTill}
                                onChange={(e) =>
                                  dispatch(
                                    setAssignment({
                                      ...assignmentData,
                                      availableTill: e.target.value,
                                    })
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                        {/* <button
                          type="button"
                          className="btn btn-outline-secondary d-flex align-items-center w-100 justify-content-center mt-2"
                          style={{
                            backgroundColor: "#ced4da",
                            border: "none",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px",
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                          <span style={{ marginLeft: "5px" }}>Add</span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <hr className="mt-5 mb-2" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-group d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="contentNotification"
                      />
                      <label
                        className="form-check-label ms-2"
                        for="contentNotification"
                      >
                        Do not count this assignment towards the final grade
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm d-flex align-items-center text-light mx-2"
                        style={{ backgroundColor: "#b52828" }}
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <hr className="mt-3 mb-2" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AssignmentEditor;
