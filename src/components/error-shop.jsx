import { Link, useRouteError } from "react-router-dom";

export default function ErrorShop() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <p>We are working on this page. Please come back later</p>
      <br />
      <p>{error.status && <i> Status: {error.status} </i>}</p>
      {error.status && <p>Status: {error.statusText}</p>}

      <Link to="/" className="danger">
        Home
      </Link>
    </div>
  );
}
