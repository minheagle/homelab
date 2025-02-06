import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../layouts/RootLayout";

const rootRoute = createRootRoute({
  component: RootLayout,
});

export default rootRoute;
