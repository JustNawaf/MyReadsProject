import logo from "./logo.svg";
import "./css/tailwind.css";
import Init from "./components/Init";
import Index from "./pages/Index";
import { Route } from "react-router";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      {/* <Init time={5000}/> */}
      <Route exact path="/" component={Index} />
      <Route exact path="/Search" component={Search} />
    </div>
  );
}

export default App;
