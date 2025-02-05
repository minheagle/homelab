import { RouterProvider } from "@tanstack/react-router";
import router from "./routers/router.js";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
