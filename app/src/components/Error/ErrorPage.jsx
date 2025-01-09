import { useNavigate } from "react-router-dom";

export default function ErrorPage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Error</h2>
      <p>{props.error}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
