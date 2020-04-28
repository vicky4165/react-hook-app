import React from "react";
import { Route, Switch } from "react-router-dom";
import { CommonLayout } from "./Layouts/Common/CommonLayout";
import { AdminLayout } from "./Layouts/Admin/index";
import { ProtectedRoute } from "./protected.routes";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <CommonLayout>
      <Switch>
        <ProtectedRoute exact path="/" component={AdminLayout} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </CommonLayout>
  );
}

export default App;
