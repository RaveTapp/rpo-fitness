import React from "react";
import ReactDOM from "react-dom/client";
import { WorkoutMenu } from "./components/WorkoutMenu/WorkoutMenu";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";
import { ExerciseShowcase } from "./components/ExerciseShowcase/ExerciseShowcase";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <WorkoutMenu />
      <WorkoutList />
      <ExerciseShowcase title="Barbell Lunge" exerText="Kinda annoyingly long text that is passed through props and ends up here, you know" />
    </React.StrictMode>
  );