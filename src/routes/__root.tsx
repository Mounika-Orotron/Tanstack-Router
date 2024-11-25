import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <ul>
          <li>
            <Link
              to="/"
              className="[&.active]:font-bold"
              activeProps={activeProps}
            >
              <p>Home</p>
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/about"
              className="[&.active]:font-bold"
              activeProps={activeProps}
            >
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/pokemon" activeProps={activeProps}>
              <p>Pokemons</p>
            </Link>{" "}
          </li>
          <li>
            <Link to="/searching" activeProps={activeProps}>
              <p>Searching</p>
            </Link>{" "}
          </li>
          <li>
            <Link to="/first-level" activeProps={activeProps}>
              First level
            </Link>{" "}
          </li>
          <li>
            <Link to="/layouts/visibleLayout" activeProps={activeProps}>
              Layouts
            </Link>{" "}
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
