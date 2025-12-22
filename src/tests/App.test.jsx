// App.test.js
import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ErrorPage from "../components/error-page";
import Navbar from "../components/Navbar";
import { routesJSX } from "../router";

describe("App routing", () => {
  test("renders App with Home route", async () => {
    const router = createMemoryRouter(createRoutesFromElements(routesJSX), {
      initialEntries: ["/"],
    });

    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading test route…</div>}
      />
    );
    screen.debug();
    expect(
      await screen.findByRole("link", { name: /shop with style/i })
    ).toBeInTheDocument();
  });

  test("renders shop at /shop", async () => {
    const router = createMemoryRouter(createRoutesFromElements(routesJSX), {
      initialEntries: ["/shop"],
    });
    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading test route…</div>}
      />
    );
    screen.debug();
    expect(await screen.findByText(/LINEUP/i)).toBeInTheDocument();
  });
});
