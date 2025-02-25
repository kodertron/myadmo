import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import * as Pages   from '@/pages'
import * as Layouts from "./layouts";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"           element={<Pages.Home  />} />
      
        {/* WITH PADDING */}
        <Route element={<Layouts.FeedLayout />}>
          <Route element={<Layouts.PostLayout />}>
            <Route path="/posts"    element={<Pages.Posts />} />
            <Route path="/post"     element={<Pages.Post  />} />
          </Route>
          <Route path="/live"           element={<Pages.LiveVideos />} />
          <Route path="/live/group"     element={<Pages.LiveGroup  />} />
          <Route path="/explore"        element={<Pages.Explore    />} />
        </Route>

        {/* WITHOUT PADDING */}
        <Route element={<Layouts.FeedLayout padding={false} />}>
          <Route path="/messages"       element={<Pages.Messages   />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App