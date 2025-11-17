import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oooops...</h1>
      <h2>I did it again!</h2>
      <p>Something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Get out of here</Link>
    </div>
  );
}
