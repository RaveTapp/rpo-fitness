import PlusBtnCSS from "./plusBtn.module.css";

async function sendWorkoutToDB(msg) {
  try {
    const response = await fetch("http://localhost:3000/addWorkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: msg,
        user: 1,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

async function sendExerciseToDB(msg) {
  try {
    const response = await fetch("http://localhost:3000/addExercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: msg,
        desc: "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

function plusPrompt(props) {
  let p = prompt("Vnesi naslov:");

  if (p != null && p != "") {
    if (props.isWorkout) {
      sendWorkoutToDB(p);
    } else {
      sendExerciseToDB(p);
    }
    window.location.reload();
  }
}

export function PlusBtn(props) {
  return (
    <div className={PlusBtnCSS.container}>
      <div className={PlusBtnCSS.btn} onClick={() => plusPrompt(props)}>
        <svg
          className={PlusBtnCSS.plus}
          fill="#EEEEEE"
          viewBox="0 0 349.03 349.031"
        >
          <path d="M349.03,141.226v66.579c0,5.012-4.061,9.079-9.079,9.079H216.884v123.067c0,5.019-4.067,9.079-9.079,9.079h-66.579 c-5.009,0-9.079-4.061-9.079-9.079V216.884H9.079c-5.016,0-9.079-4.067-9.079-9.079v-66.579c0-5.013,4.063-9.079,9.079-9.079 h123.068V9.079c0-5.018,4.069-9.079,9.079-9.079h66.579c5.012,0,9.079,4.061,9.079,9.079v123.068h123.067 C344.97,132.147,349.03,136.213,349.03,141.226z"></path>
        </svg>
      </div>
    </div>
  );
}
