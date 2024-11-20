import { WorkoutItem } from "./workoutItem";

export function Menu() {

    return (
        <>
            <h1 className="tekst">SAVED WORKOUTS</h1>
            <hr />
            <WorkoutItem title={"Leg day A"} />
            <WorkoutItem title={"Leg day B"} />
            <WorkoutItem title={"Leg day C"} />
        </>
    );
}