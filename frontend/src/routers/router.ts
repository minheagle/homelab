import { createRouter } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { commmandHomeRoute } from "./commandRoute";
import { homeRoute } from "./homeRoute";
import { databaseHomeRoute } from "./databaseRoute";

const routeTree = rootRoute.addChildren([
  homeRoute,
  commmandHomeRoute,
  databaseHomeRoute,
]);

const router = createRouter({
  routeTree,
});

export default router;
