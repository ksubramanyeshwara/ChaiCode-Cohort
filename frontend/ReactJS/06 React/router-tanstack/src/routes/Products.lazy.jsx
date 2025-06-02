import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/Products"!
      <br />
      <Link to="/product/1">Product 1</Link>
      <br />
      <Link to="/product/2">Product 2</Link>
      <br />
      <Link to="/product/3">Product 3</Link>
    </div>
  );
}
