import { Outlet, Route, Routes } from "react-router-dom";
import { adminRoutes, publicRoutes } from "./routePaths";

const PrivateRoute = () => {
  return <Outlet />;
  // if (isAuthenticated) {
  //   return <Outlet />;
  // }
  // return <Navigate to="/" replace />;
};

const Routing = () => (
  <Routes>
    {adminRoutes.map((route, index) => {
      if (route.children) {
        const Children = () => {
          return (
            <Routes>
              {route?.children?.map((child, index) => {
                return (
                  <Route key={`${index}-xxx`} element={<PrivateRoute />}>
                    <Route
                      path={child.path}
                      key={`${index}-sss`}
                      index={child.index}
                      element={child.element}
                    />
                  </Route>
                );
              })}
            </Routes>
          );
        };

        return (
          <Route
            key={`${index}-yyy`}
            path={route.path}
            element={<Children />}
          />
        );
      }

      return (
        <Route key={`${index}-xxx`} element={<PrivateRoute />}>
          <Route
            key={Math.random()}
            path={route.path}
            element={route.element}
          />
        </Route>
      );
    })}

    {publicRoutes.map((publicRoute) => {
      if (publicRoute.children) {
        const Children = () => {
          return (
            <Routes>
              {publicRoute?.children?.map((child, index) => {
                return (
                  <Route
                    path={child.path}
                    key={index}
                    index={child.index}
                    element={child.element}
                  />
                );
              })}
            </Routes>
          );
        };
        return (
          <Route
            key={Math.random()}
            path={publicRoute.path}
            element={<Children />}
          />
        );
      }

      return (
        <Route
          key={Math.random()}
          path={publicRoute.path}
          element={publicRoute.element}
        />
      );
    })}
  </Routes>
);

export default Routing;
