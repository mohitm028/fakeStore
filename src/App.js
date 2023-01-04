import LogIn from "./auth/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContainer from "./pages/dashboard/container/DashboardContainer";
import AddProductContainer from "./pages/product/container/AddProductContainer";
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
          <AddProductContainer />
        </Route>
        <Route exact path={"/:id/details"}>
          <DetailContainer />
        </Route>
        <Route exact path={"/:id/edit"}>
          <AddProductContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
