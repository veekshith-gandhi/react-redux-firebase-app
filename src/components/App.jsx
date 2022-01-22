import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { store } from "../store";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { Provider } from "react-redux";

import Dashboard from "./dashboard/Dashboard";
import Navbar from "./layout/Navbar";
import CreateProject from "./projects/CreateProject";
import ProjectDetails from "./projects/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/createproject" component={CreateProject} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
