import React from "react";
import { Routes, Route } from "react-router-dom";
import { WorkoutMenu } from "./components/WorkoutMenu/WorkoutMenu";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";
import { ExerciseShowcase } from "./components/ExerciseShowcase/ExerciseShowcase";
import { OptionsMenu } from "./components/OptionsMenu/OptionsMenu";
import { OptionsWindow } from "./components/OptionsWindow/OptionsWindow";
import { Layout } from "./components/Layout/Layout";

export default function ReneMain() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WorkoutMenu />} />
        <Route path=":workoutId" element={<WorkoutList />} > 
          <Route index element={<ExerciseShowcase title="Barbell Lunge" exerText="Kinda annoyingly long text that is passed through props and ends up here, you know" />} />
        </Route>
        <Route path="options" element={<OptionsMenu />} > 
          <Route index element={<OptionsWindow title="Weekly Sessions" />} />
        </Route>
      </Route>
    </Routes>
  );
}