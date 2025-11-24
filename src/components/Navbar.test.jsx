import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { prettyDOM } from "@testing-library/dom";

describe("navbar silly test", () => {
  test("links in navigation", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    console.log(prettyDOM(container));
    console.log("\n New \n");
    screen.debug();
  });
});
