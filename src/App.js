import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Intro from "./components/Intro/Intro";
import Discover from "./components/Discover/Discover";
import Develop from "./components/Develop/Develop";
import User from "./components/User/User";
import Code from "./components/Code/Code";
import Resources from "./components/Resources/Resources";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <Intro {...routerProps} />}
          />
          <Route
            path="/discover"
            render={(routerProps) => <Discover {...routerProps} />}
          />
          <Route
            path="/develop"
            render={(routerProps) => <Develop {...routerProps} />}
          />
          <Route
            path="/user-details"
            render={(routerProps) => <User {...routerProps} />}
          />
          <Route
            path="/the-code"
            render={(routerProps) => <Code {...routerProps} />}
          />
          <Route
            path="/resources"
            render={(routerProps) => <Resources {...routerProps} />}
          />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
