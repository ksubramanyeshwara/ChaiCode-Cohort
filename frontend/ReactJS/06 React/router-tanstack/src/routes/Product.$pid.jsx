import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Product/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  return (
    <>
      <h1>Hello "/Product/$pid"!</h1>
      <h2>This is my pid: {pid}</h2>
    </>
  );
}
