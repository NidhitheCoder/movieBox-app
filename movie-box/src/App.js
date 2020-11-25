import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Bookmark from "./pages/bookmark/bookmark.component";
import Details from "./pages/details/detailsPage.component";
import Dashboard from "./pages/dashboard/dashboard.component";

const App =() =>{
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route  path="/home" component={Home} />
        <Route path="/bookmark" component={Bookmark} />
        <Route path="/details" component={Details} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
