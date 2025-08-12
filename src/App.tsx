import { Link, Route, Switch } from "wouter";
import Home from "./screens/Home";
import MarkedHome from "./screens/Markedhome";

const App = () => (
  <>

    {/* 
      Routes below are matched exclusively -
      the first matched route gets rendered
    */}
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marked" component={MarkedHome} />
      
      

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  </>
);

export default App;