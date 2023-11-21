import "./modules.css";
import {
  AiOutlineCheckCircle,
  AiOutlinePlus,
  AiFillCaretDown,
  AiFillCheckCircle,
  AiFillCaretRight,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { displayType } from "../Home/CourseTableData";
import { ModuleData } from "./ModuleTableData";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { updateModule } from "./ModulesReducer";
import {
  createModule,
  deleteModule,
  findModulesForCourse,
  updateModule,
} from "./client";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Modules() {
  const { courseId } = useParams();
  const [isActiveSection, setIsActiveSection] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [modules, setModules] = useState([]);
  const modulesList = useSelector((state) => state.modulesReducer.modules);
  // const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [module, setModule] = useState({
    displayText: "",
    description: "",
    _id: "",
    type: displayType.TITLE,
  });
  // const [modulesList, setModulesList] = useState(ModuleData);
  // const [module, setModule] = useState({
  //   displayText: "New Module",
  //   description: "New Description",
  //   _id: courseId,
  //   type: displayType.TITLE,
  // });
  const getModulesForCourse = async (courseId) => {
    const res = await findModulesForCourse(courseId);
    setModules(res);
  };
  const addNewModule = async (courseId, newModule) => {
    const response = await createModule(courseId, newModule);
    console.log("response", response);
    // console.log("response", response);
    setModules([response, ...modules]);
    setModule({
      displayText: "",
      description: "",
    });
  };
  const deleteModuleFromList = async (moduleId) => {
    await deleteModule(moduleId);
    getModulesForCourse(courseId);
    // console.log("response", response);
    // setModules(response, ...modules);
    // setCourse({ name: "" });
  };
  // const deleteCourse = async (course) => {
  //   await axios.delete(`${URL}/${course._id}`);
  //   consoe
  //   // setCoursesList(coursesList.filter((c) => c._id !== course._id));
  // };
  const updateModuleInList = async (newModule) => {
    await updateModule(newModule);
    getModulesForCourse(courseId);
  };

  useEffect(() => {
    getModulesForCourse(courseId);
  }, [courseId]);
  // const addModule = (module) => {
  //   setModulesList([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modulesList,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModulesList(modulesList.filter((module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModulesList(
  //     modulesList.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="w-100 my-3">
      <div className="d-flex">
        <div className="row w-100 me-4" style={{ marginLeft: "30px" }}>
          <div className="col-12">
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
                <li className="list-group-item d-flex align-items center">
                  <input
                    className="form-control me-3"
                    value={module.displayText}
                    // onChange={(e) =>
                    //   setModule({
                    //     ...module,
                    //     displayText: e.target.value,
                    //   })
                    // }
                    onChange={(e) =>
                      setModule({ ...module, displayText: e.target.value })
                    }
                  />
                  <textarea
                    className="form-control"
                    value={module.description}
                    // onChange={(e) =>
                    //   setModule({
                    //     ...module,
                    //     description: e.target.value,
                    //   })
                    // }
                    onChange={(e) =>
                      setModule({ ...module, description: e.target.value })
                    }
                  />
                </li>
                <div className="d-flex mt-2">
                  <button
                    className="btn btn-sm btn-primary me-3"
                    // onClick={updateModule}
                    onClick={() =>
                      // dispatch(updateModule(module))
                      updateModuleInList(module)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    // onClick={() => {
                    //   addModule(module);
                    // }}
                    onClick={() =>
                      // dispatch(addModule({ ...module, course: courseId }))
                      addNewModule(courseId, module)
                    }
                  >
                    Add
                  </button>
                </div>
                {modules &&
                  modules.map((data, index) =>
                    data.type === displayType.TITLE ? (
                      <>
                        <li
                          className="list-group-item mt-5"
                          style={{
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #aba89f",
                            borderRadius: "5px",
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <BiGridVertical />
                              <div
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setIsActiveSection(!isActiveSection);
                                  setCurrentId(data._id);
                                }}
                              >
                                {isActiveSection && data._id === currentId ? (
                                  <AiFillCaretDown />
                                ) : (
                                  <AiFillCaretRight />
                                )}
                                <div
                                  className="ms-2"
                                  style={{ fontWeight: 500 }}
                                >
                                  {data.displayText}
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                className="btn btn-sm btn-danger me-2"
                                // onClick={() => deleteModule(data._id)}
                                onClick={() =>
                                  // dispatch(deleteModule(data._id))
                                  deleteModuleFromList(data._id)
                                }
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-sm btn-primary me-2"
                                // onClick={(event) => {
                                //   setModule(data);
                                // }}
                                onClick={() => setModule(data)}
                              >
                                Edit
                              </button>
                              <AiFillCheckCircle
                                style={{
                                  color: "#1f990c",
                                  height: "20px",
                                  width: "20px",
                                }}
                              />
                              {isActiveSection && data._id === currentId ? (
                                <AiFillCaretDown
                                  style={{ cursor: "pointer" }}
                                  className="ms-2"
                                  onClick={() => {
                                    setIsActiveSection(!isActiveSection);
                                    setCurrentId(data._id);
                                  }}
                                />
                              ) : (
                                <AiFillCaretRight
                                  style={{ cursor: "pointer" }}
                                  className="ms-2"
                                  onClick={() => {
                                    setIsActiveSection(!isActiveSection);
                                    setCurrentId(data._id);
                                  }}
                                />
                              )}
                              <AiOutlinePlus
                                className="mx-2"
                                style={{ color: "#2d3b45" }}
                              />
                              <BsThreeDotsVertical />
                            </div>
                          </div>
                        </li>
                        {isActiveSection && data._id === currentId && (
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: "#f5f5f5",
                              border: "1px solid #aba89f",
                              borderTop: "0px",
                              borderBottomLeftRadius: "5px",
                              borderBottomRightRadius: "5px",
                            }}
                          >
                            {data.description}
                          </li>
                        )}
                      </>
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
          {/* <div className="col-3" style={{ paddingRight: "0px" }}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Modules;
