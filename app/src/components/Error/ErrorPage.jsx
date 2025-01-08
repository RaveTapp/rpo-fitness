import { useRouteError } from "react-router";

export default function ErrorPage(){
    const error = useRouteError()

    return (
        <div>
            <h2>Error</h2>
            <p>{error.message}</p>
        </div>
    )
}