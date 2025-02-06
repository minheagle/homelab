import { createRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import Home from "../pages/home/Home";
import ROUTER from "../constants/routes";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTER.HOME.ROOT,
  component: Home,
});

export { homeRoute };
