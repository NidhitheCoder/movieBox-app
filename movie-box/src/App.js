import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Bookmark from "./pages/bookmark/bookmark.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookmark" component={Bookmark} />
      </Switch>
    </div>
  );
}

export default App;
