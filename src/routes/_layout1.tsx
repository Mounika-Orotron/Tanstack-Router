import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout1")({
  component: Layout1,
});

function Layout1() {
  return (
    <div>
      _layout1
      <div>
        <Outlet />
      </div>
    </div>
  );
}
