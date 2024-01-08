import { createBrowserRouter, RouterProvider } from "react-router-dom";


function router() {
    return   <RouterProvider router={router} />
}


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
  ]);

  export default router;