import React from "react";
import {FaFileImport} from "react-icons/fa6";
import {CgImport} from "react-icons/cg";
import {AiOutlineAim} from "react-icons/ai";
import {VscGraph} from "react-icons/vsc";
import {LiaBullhornSolid} from "react-icons/lia";
import {BsBell, BsDot} from "react-icons/bs";
import {FcHighPriority} from "react-icons/fc";

const HomeSideMenuHeader = () => {
  return (
    <div>
      <button class="btn btn-secondary">Unpublish</button>
      <button class="btn btn-success">Published</button>
      <div class="mt-4 mb-4">
      <ul class="list-group">
          <li class="list-group-item"><FaFileImport/> Import Existing Content</li>
          <li class="list-group-item"><CgImport/> Import From Commons</li>
          <li class="list-group-item"><AiOutlineAim/> Choose Home Page</li>
          <li class="list-group-item"><VscGraph/> View Course Stream</li>
          <li class="list-group-item"><LiaBullhornSolid/> New Announcement</li>
          <li class="list-group-item"><VscGraph/> New Anyalytics</li>
          <li class="list-group-item"><BsBell/> View Course Notifications</li>
        </ul>
        </div>
      <strong>To Do</strong><br/>
      <hr/>
      <FcHighPriority/> Grade A1 - ENV + HTML<br/>
      <sub> 100 points <BsDot/> Sept 18, 2023</sub> 
    </div>
  );
};

export default HomeSideMenuHeader;
