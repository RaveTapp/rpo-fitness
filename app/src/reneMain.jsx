import React from "react";
import { Routes, Route } from "react-router-dom";
import { WorkoutMenu } from "./components/WorkoutMenu/WorkoutMenu";
import { WorkoutList } from "./components/WorkoutList/WorkoutList";
import { ExerciseShowcase } from "./components/ExerciseShowcase/ExerciseShowcase";
import { Layout } from "./components/Layout/Layout";
import ErrorPage from "./components/Error/ErrorPage";
import ErrorBoundary from "./components/Error/ErrorBoundary";

export default function ReneMain() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<WorkoutMenu />} />
          <Route path=":workoutId" element={<WorkoutList />}>
            <Route path="exercise/:exerciseId" element={<ExerciseShowcase />} />
          </Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
