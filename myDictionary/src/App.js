import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import NotFound from "./component/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          {/* 없는주소는 not-found로 연결되도록 */}
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
