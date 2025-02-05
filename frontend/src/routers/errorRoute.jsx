import { NotFoundRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import NotFound from "../pages/errors/NotFound";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
});

export { notFoundRoute };
