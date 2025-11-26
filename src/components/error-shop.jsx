import { Link, useRouteError } from "react-router-dom";

export default function ErrorShop() {
  const error = useRouteError();

  return (
    <div>
      <p>We are working on this page. Please come back later</p>
      <br />
      <p>
        <i>{error.status || error.message}</i>
      </p>
      {error.status && <p>Status: {error.status}</p>}
      <Link to="/" className="danger">
        Home
      </Link>
    </div>
  );
}
