import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/ModulesReducer";
import assignmentReducer from "../Courses/Assignments/AssignmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
  },
});

export default store;
