import React from "react";
import ReactDOM from "react-dom/client";
import { WorkoutMenu } from "./components/WorkoutMenu/WorkoutMenu";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";
import { ExerciseShowcase } from "./components/ExerciseShowcase/ExerciseShowcase";
import { OptionsMenu } from "./components/OptionsMenu/OptionsMenu";
import { OptionsWindow } from "./components/OptionsWindow/OptionsWindow";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <WorkoutMenu />
      <WorkoutList />
      <ExerciseShowcase title="Barbell Lunge" exerText="Kinda annoyingly long text that is passed through props and ends up here, you know" />
      <OptionsMenu />
      <OptionsWindow title="Weekly Sessions" />

    </React.StrictMode>
  );