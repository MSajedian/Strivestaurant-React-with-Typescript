import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Router>
        <MyNav title="Strivestaurant" />
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Home {...routerProps} title="Strivestaurant" />
          )}
        />
        <Route path="/reservations" component={Reservations} />
        <Route path="/menu" component={Menu} />
      </Router>
    </div>
  );
};

export default App;


// import { RouteComponentProps } from "react-router-dom";

// interface FunctionalComponentProps {}

// interface MyOwnProps {
//   title: string;
// }
// type DetailComponentProps = RouteComponentProps & MyOwnProps;

// const App = (prop: RouteComponentProps) => {
// const App = (routerProps: RouteComponentProps) => {

// const App: React.FunctionComponent<DetailComponentProps> = () => {


// export interface AppProps {}

// const App: React.SFC<AppProps> = () => {
// const App: React<AppProps> = () => {
//   return (  );
// }

// export default App;
