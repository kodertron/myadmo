import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import * as Pages   from '@/pages'
import * as Layouts from "./layouts";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"           element={<Pages.Home  />} />
        <Route element={<Layouts.FeedLayout />}>
          <Route path="/posts"    element={<Pages.Posts />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App