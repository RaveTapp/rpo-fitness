import React from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./ErrorPage.module.css";

export default function ErrorPage(props) {
  const navigate = useNavigate();

  return (
    <div className={CSS.wrapper}>
      <h2>Error</h2>
      <p>{props.error}</p>
      <button onClick={() => navigate(-1)} className={CSS.button} >Go Back</button>
    </div>
  );
}
