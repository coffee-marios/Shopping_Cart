import { useRouteError, Link } from "react-router-dom";
import "../styles/errorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="errorPage">
      <h1>Oooops...</h1>
      <br />
      <h2>There is nothing here</h2>
      <br />
      <p>Something went wrong.</p>
      <br />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to="/" className="danger">
        Get me out of here
      </Link>
    </div>
  );
}
