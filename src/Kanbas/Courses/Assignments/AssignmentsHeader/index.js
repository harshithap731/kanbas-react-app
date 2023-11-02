import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import "./index.css";

const AssignmentsHeader = () => {
  return (
    <div>
      <div class="wd-assignments-header mt-2">
        <input
          class="form-control w-25 float-start"
          type="text"
          placeholder="Search for Assignment"
        />
        <div class="buttons float-end">
          <button class="btn wd-bg-lightgray">
            <AiOutlinePlus />
            Group
          </button>
          <button class="btn btn-danger">
            <AiOutlinePlus />
            Assignment
          </button>
          <button class="btn wd-bg-lightgray">
            <HiOutlineEllipsisVertical />
          </button>
        </div>
      </div>
    <br/>
    <br/>
    <br/>
    </div>
  );
};

export default AssignmentsHeader;
