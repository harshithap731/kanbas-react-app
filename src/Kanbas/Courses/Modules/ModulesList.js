import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModuleListData } from "./ModuleTableData";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./ModulesReducer";
import * as client from "./client";
import { useDispatch } from "react-redux";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const [modules, setModules] = useState(ModuleListData);
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
            <button onClick={handleAddModule}>Add</button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
