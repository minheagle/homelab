import { createRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import ROUTER from "../constants/routes";
import DatabaseHome from "../pages/databases/DatabaseHome";

const databaseHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTER.DATABASE.ROOT,
  component: DatabaseHome,
});

export { databaseHomeRoute };
