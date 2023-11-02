// Author: Harshitha Prabhu
import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsHeader from "./AssignmentsHeader";
import { AiOutlinePlus, AiFillCheckCircle} from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiPencilAlt } from 'react-icons/tfi'; 
import "./AssignmentsHeader/index.css"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="col col-11">
      <AssignmentsHeader />
      <div className="list-group">
      <div className="list-group">
        <div className="list-group-item wd-assignment-type">
          <HiOutlineEllipsisVertical />
          <strong>ASSIGNMENTS</strong>
          <div className="wd-assignment-type-right-text float-end">
            <span className="wd-assignment-type-weightage me-2">
              40% of Total
            </span>
            <AiOutlinePlus />
            <HiOutlineEllipsisVertical />
          </div>
        </div></div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <HiOutlineEllipsisVertical />
            <TfiPencilAlt color="green" />
            <span className="wd-assignment-title ms-2">{assignment.title}</span><br/>
            <sub>Mutiple Modules | <strong>Due</strong> 18th Sept, 2023 | 100 Points</sub>
            <span class="wd-check-ellipse-button-float-end float-end">
              <AiFillCheckCircle color="green" />
              <HiOutlineEllipsisVertical />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
