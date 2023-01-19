import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./auth/LogIn";
import DashboardContainer from "./pages/dashboard/container/DashboardContainer";
import CommonProductContainer from "./pages/product/container/CommonProductContainer";
import DetailContainer from "./pages/product/container/DetailContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <LogIn />
        </Route>
        <Route exact path={"/dashboard"}>
          <DashboardContainer />
        </Route>
        <Route exact path={"/addproduct"}>
          <CommonProductContainer />
        </Route>
        <Route exact path={"/:id/details"}>
          <DetailContainer />
        </Route>
        <Route exact path={"/:id/edit"}>
          <CommonProductContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
