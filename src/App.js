import "./App.css";

import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
