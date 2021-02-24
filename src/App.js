import SearchBar from "./components/SearchBar/SearchBar";
import PageContent from "./components/PageContent/PageContent";
import { Switch, Route, Redirect } from "react-router-dom";
import Timer from "./Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer></Timer>

      {/* <SearchBar></SearchBar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Gallery" />
        </Route>
        <Route path="/Gallery" render={() => <PageContent />}></Route>
      </Switch> */}
    </div>
  );
}

export default App;
