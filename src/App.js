import LogIn from "./auth/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContainer from "./pages/dashboard/container/DashboardContainer";
import AddProductContainer from "./pages/addProduct/container/AddProductContainer";

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
      </Switch>
    </Router>
  );
}

export default App;
