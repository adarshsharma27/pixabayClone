import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Description from "./components/Description";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/description/:id" exact component={Description} />
                <Search />
            </Switch>
        </Router>
    );
}

export default App;
