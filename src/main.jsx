import React from "react";
import ReactDOM from "react-dom/client";
import { WorkoutMenu } from "./components/WorkoutMenu/WorkoutMenu";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <WorkoutMenu />
      <WorkoutList />
    </React.StrictMode>
  );