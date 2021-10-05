import "./App.scss";
import { Route } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import ApplicationPage from "./Pages/ApplicationPage/ApplicationPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <HomePage />} />
      <Route
        path="/application/form"
        render={() => <ApplicationPage />}
      ></Route>
    </div>
  );
}

export default App;
