import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";

export const NavLinks = [
  {
    title: "Account",
    href: "#",
    icon: (
      <BiUserCircle
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Dashboard",
    href: "Dashboard",
    icon: (
      <AiOutlineDashboard
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Courses",
    href: "Courses",
    icon: (
      <LiaBookSolid
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Calendar",
    href: "#",
    icon: (
      <FaRegCalendarAlt
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Inbox",
    href: "#",
    icon: (
      <HiMiniInboxArrowDown
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "History",
    href: "#",
    icon: (
      <BsClockHistory
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Studio",
    href: "#",
    icon: (
      <HiOutlinePresentationChartLine
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
  {
    title: "Help",
    href: "#",
    icon: (
      <BiHelpCircle
        className="wd-nav-icon"
        style={{ height: "2em", width: "2em" }}
      />
    ),
  },
];
