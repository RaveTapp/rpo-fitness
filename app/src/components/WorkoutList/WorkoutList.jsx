import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListCSS from "./WorkoutList.module.css";
import MenuCSS from "../WorkoutMenu/WorkoutMenu.module.css";
import CSS from "../../main.module.css";
import { PlusBtn } from "../plusBtn/plusBtn";
import { WorkoutItem } from "../WorkoutMenu/workoutItem";
import { Outlet } from "react-router-dom";
import { getTable } from "../WorkoutMenu/WorkoutMenu";
import ErrorBoundary, { getThrowAsyncError } from "../Error/ErrorBoundary";
import ErrorPage from "../Error/ErrorPage";

export function WorkoutList() {
  let { workoutId } = useParams();
  const throwAsyncError = getThrowAsyncError();

  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getTable("vaja", setData);
    getTable("vadba", setTitles);
  }, []);

  let exercisesList = [];
  let title = [];

  try {
    if (isNaN(workoutId) || workoutId < 1) {
      throw Error("WorkoutId is set incorrectly.");
    }

    if (data) {
      data.forEach((e, i) => {
        exercisesList.push(
          <li className={MenuCSS.item} key={e.ime + i + "1"}>
            <WorkoutItem
              title={e.ime}
              n={i + 1}
              isWorkout={false}
              key={e.ime + i + "2"}
            />
          </li>
        );
      });
    }

    if (titles.length != 0) {
      let titleName = titles[workoutId - 1].ime;
      title.push(
        <h1 className={`${CSS.tekst}`} key={titleName + "_title"}>
          {titleName}
        </h1>
      );
    }
  } catch (e) {
    throwAsyncError(e);
  }

  return (
    <div className={MenuCSS.menuContainer}>
      <div className={ListCSS.menu}>
        <div className={ListCSS.mainTitle}>{title}</div>
        <hr className={ListCSS.hr} />
        <ul>{exercisesList}</ul>
        <PlusBtn isWorkout={false} />
      </div>

      <Outlet />
    </div>
  );
}
