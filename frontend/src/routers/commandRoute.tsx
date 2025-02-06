import { createRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import CommandHome from "../pages/commands/CommandHome";
import TerminalPage from "../pages/commands/TerminalPage";
import ROUTER from "../constants/routes";

const commmandHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTER.COMMAND.ROOT,
  component: CommandHome,
});

const commandTerminalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTER.COMMAND.TERMINAL,
  component: TerminalPage,
});

commmandHomeRoute.addChildren([commandTerminalRoute]);

export { commmandHomeRoute };
