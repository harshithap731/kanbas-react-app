/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrChatOption } from "react-icons/gr";
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./dashboard.css";

function DashboardCard(props) {
  const { courseData } = props;

  return (
    <div className="m-4">
      <div
        className="card wd-card-design position-relative"
        style={{ width: "260px" }}
      >
        <img
          className="card-img-top"
          src="../../images/card_image.jpg"
          alt="Card image cap"
        />
        <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
          <BsThreeDotsVertical
            className="fa-lg position-absolute"
            style={{ color: "#fff" }}
          />
          {/* <i
              className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
              style={{ color: "#fff" }}
            ></i> */}
        </button>
        <div className="card-body card-link">
          <Link
            className="text-decoration-none"
            to={`/Kanbas/Courses/${courseData._id}`}
          >
            <div className="card-text wd-card-text">
              {/* CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL] */}
              {courseData.name}
            </div>
            <div className="wd-card-text" style={{ color: "#677179" }}>
              {/* CS5610.11550.202410 */}
              {courseData.number}
            </div>
            <div className="wd-card-text" style={{ color: "#677179" }}>
              {/* 202410_2 Fall 2023 Semester Full Term Grad */}
              {courseData.text}
            </div>
          </Link>
          <div className="d-flex mb-3 mt-4 align-items-center">
            {/* <FontAwesomeIcon
                    icon="fa-solid fa-comments fa-lg"
                    style={{ color: "#2d3b45" }}
                  /> */}
            {/* <BiUserCircle /> */}
            {/* <i
                className="fa-solid fa-file-signature fa-lg mx-5"
                style={{ color: "#2d3b45" }}
              ></i> */}
            <TfiPencilAlt
              className="fa-2xl"
              style={{ height: "1.3em", width: "1.3em", color: "#2d3b45" }}
            />
            <GrChatOption
              className="fa-lg mx-4"
              style={{ height: "1.3em", width: "1.3em", color: "#2d3b45" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
