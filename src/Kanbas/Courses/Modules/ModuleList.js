import { React } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <input
                className="form-control m-1"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
            <div className="col">
              <input
                className="form-control m-1"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
            <div className="col">
              <button
                className="m-1 btn btn-secondary"
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
              >
                <AiOutlinePlus /> Add
              </button>
              <button
                className="m-1 btn btn-secondary"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
            </div>
          </div>
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div className="row">
                <div className="col col-4">
                  <h5>{module.name}</h5>
                </div>
                <div className="col col-4">
                  <p>{module.description}</p>
                </div>
                <div className="col col-4 d-flex justify-content-end">
                  <button
                    className="m-1 btn btn-secondary"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    <TiDeleteOutline/> Delete
                  </button>
                  <button
                    className="m-1 btn btn-secondary"
                    onClick={() => dispatch(setModule(module))}
                  >
                    <FiEdit2/> Edit
                  </button>
                </div>
                <div className="col"></div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;
