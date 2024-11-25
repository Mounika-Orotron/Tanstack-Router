import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$username")({
  component: User,
});

function User() {
  const { username } = Route.useParams();

  return <div>User - {username}</div>;
}
