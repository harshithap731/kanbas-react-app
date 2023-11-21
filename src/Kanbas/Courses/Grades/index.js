/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
import "./grades.css";
import { AiFillSetting } from "react-icons/ai";
import { GradesData, inputFieldList } from "./GradesTableData";

function Grades() {
  return (
    <div className="w-100" style={{ overflowY: "hidden" }}>
      <div className="my-3" style={{ width: "95%" }}>
        <div className="w-100 me-4" style={{ marginLeft: "30px" }}>
          <div className="">
            <div className="d-flex justify-content-end">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                >
                  {/* <i className="fa-solid fa-file-import"></i> */}
                  <FaFileImport />
                  <span style={{ marginLeft: "5px" }}>Import</span>
                </button>
                <div className="dropdown mx-2">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center"
                    type="button"
                    id="action-menu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <i className="fa-solid fa-file-export"></i> */}
                    <FaFileExport />
                    <span style={{ marginLeft: "5px" }}>Export</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="action-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        PDF
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CSV
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        XLSX
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                >
                  {/* <i className="fa-solid fa-gear"></i> */}
                  <AiFillSetting />
                </button>
              </div>
            </div>
            <form className="w-100 row">
              <div className="form-group col">
                <label for="assignment-group" style={{ fontWeight: 500 }}>
                  Student Names
                </label>
                <select
                  className="form-select mt-1"
                  aria-label="assignment-group"
                >
                  <option selected>John</option>
                  <option value="1">Daniel</option>
                </select>
              </div>
              <div className="form-group col pe-0">
                <label for="assignment-group" style={{ fontWeight: 500 }}>
                  Assignment Names
                </label>
                <select
                  className="form-select mt-1"
                  aria-label="assignment-group"
                >
                  <option selected>Assignment 1</option>
                  <option value="Daniel">Assignment 2</option>
                </select>
              </div>
            </form>

            <button
              type="button"
              className="btn btn-outline-secondary d-flex align-items-center my-3"
            >
              {/* <i className="fa-solid fa-filter"></i> */}
              <FaFilter />
              <span style={{ marginLeft: "5px" }}>Apply Filters</span>
            </button>

            <div style={{ overflowY: "auto", height: "60vh" }}>
              <table className="table table-bordered">
                <thead>
                  <tr
                    className="text-center p-2"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <th style={{ fontWeight: 500 }} className="p-0">
                      Student Name
                    </th>
                    <th style={{ fontWeight: 500 }} className="p-0">
                      A1 SETUP <br />
                      Out of 100
                    </th>
                    <th style={{ fontWeight: 500 }} className="p-0">
                      A2 HTML
                      <br />
                      Out of 100
                    </th>
                    <th style={{ fontWeight: 500 }} className="p-0">
                      A3 CSS
                      <br />
                      Out of 100
                    </th>
                    <th style={{ fontWeight: 500 }} className="p-0">
                      A4 BOOTSTRAP
                      <br />
                      Out of 100
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {GradesData.map((data) => (
                    <tr>
                      <td className="wd-student-name">{data.studentName}</td>
                      <td className="wd-table-row-width">
                        {data.selectedInputField === inputFieldList.A1 ? (
                          <div className="form-group d-flex justify-content-center">
                            <input
                              type="number"
                              className="form-control w-50 text-center"
                              style={{ padding: 0 }}
                              id="A1marks"
                              placeholder="Edit marks"
                              value={data.a1Marks}
                            />
                          </div>
                        ) : (
                          data.a1Marks
                        )}
                      </td>
                      <td>
                        {data.selectedInputField === inputFieldList.A2 ? (
                          <div className="form-group d-flex justify-content-center">
                            <input
                              type="number"
                              className="form-control w-50 text-center"
                              style={{ padding: 0 }}
                              id="A1marks"
                              placeholder="Edit marks"
                              value={data.a2Marks}
                            />
                          </div>
                        ) : (
                          data.a2Marks
                        )}
                      </td>
                      <td className="">
                        {data.selectedInputField === inputFieldList.A3 ? (
                          <div className="form-group d-flex justify-content-center">
                            <input
                              type="number"
                              className="form-control w-50 text-center"
                              style={{ padding: 0 }}
                              id="A1marks"
                              placeholder="Edit marks"
                              value={data.a3Marks}
                            />
                          </div>
                        ) : (
                          data.a3Marks
                        )}
                      </td>
                      <td>
                        {data.selectedInputField === inputFieldList.A4 ? (
                          <div className="form-group d-flex justify-content-center">
                            <input
                              type="number"
                              className="form-control w-50 text-center"
                              style={{ padding: 0 }}
                              id="A1marks"
                              placeholder="Edit marks"
                              value={data.a4Marks}
                            />
                          </div>
                        ) : (
                          data.a4Marks
                        )}
                      </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td className="wd-student-name">John Doe</td>
                    <td className="wd-table-row-width">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="number"
                          className="form-control w-50 text-center"
                          style={{ padding: 0 }}
                          id="A1marks"
                          placeholder="Edit marks"
                          value="99"
                        />
                      </div>
                    </td>
                    <td>80</td>
                    <td>99</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td className="wd-student-name">Emma Greens</td>
                    <td>86</td>
                    <td>50</td>
                    <td className="w-25">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="number"
                          className="form-control w-50 text-center"
                          style={{ padding: 0 }}
                          id="A1marks"
                          placeholder="Edit marks"
                          value="78"
                        />
                      </div>
                    </td>
                    <td>32</td>
                  </tr>
                  <tr>
                    <td className="wd-student-name">Jonathan Brown</td>
                    <td>90</td>
                    <td>34</td>
                    <td>67</td>
                    <td className="wd-table-row-width">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="number"
                          className="form-control w-50 text-center"
                          style={{ padding: 0 }}
                          id="A1marks"
                          placeholder="Edit marks"
                          value="87"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="wd-student-name">Robert Dowery Jr.</td>
                    <td className="wd-table-row-width">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="number"
                          className="form-control w-50 text-center"
                          style={{ padding: 0 }}
                          id="A1marks"
                          placeholder="Edit marks"
                          value="23"
                        />
                      </div>
                    </td>
                    <td>89</td>
                    <td>87</td>
                    <td>56</td>
                  </tr>
                  <tr>
                    <td className="wd-student-name">Stuart Little</td>
                    <td>80</td>
                    <td className="wd-table-row-width">
                      <div className="form-group d-flex justify-content-center">
                        <input
                          type="number"
                          className="form-control w-50 text-center"
                          style={{ padding: 0 }}
                          id="A1marks"
                          placeholder="Edit marks"
                          value="48"
                        />
                      </div>
                    </td>
                    <td>98</td>
                    <td>22</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grades;
