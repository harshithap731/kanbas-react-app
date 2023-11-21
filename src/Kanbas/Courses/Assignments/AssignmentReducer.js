import { createSlice } from "@reduxjs/toolkit";
import { assignmentDataDetails } from "./AssignmentData";

const initialState = {
  assignments: assignmentDataDetails,
  assignment: {
    _id: "",
    course_id: 1,
    title: "Assignment 1 TEST",
    description:
      "Week 5 - MAKE AN APP - Week starting on Monday September 20th (9/5/2022) Module |",
    due: "Sep 30, 2022 at 11:59pm | 100 pts",
    availableFrom: "2/2/2000",
    availableTill: "2/2/2000",
    to: "#",
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      console.log("SADASDASD", action.payload._id);
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
