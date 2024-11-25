import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link
        to="/search"
        search={{
          limit: 10,
          query: "Mounika",
        }}
      >
        {" "}
        Search Something
      </Link>
    </div>
  );
}
