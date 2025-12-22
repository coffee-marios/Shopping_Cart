import { render, screen } from "@testing-library/react";
import {
  RouterProvider,
  BrowserRouter,
  createMemoryRouter,
} from "react-router-dom";
import Home from "../pages/Home";

describe("Home page renders link", () => {
  test("link in home", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <Home />,
          loader: async () => {
            return { title: "Home page" };
          },
        },
      ],
      {
        initialEntries: ["/"],
      }
    );
    render(<RouterProvider router={router} />);

    expect(
      await screen.findByRole("link", { name: /shop with style/i })
    ).toBeInTheDocument();
  });
});
