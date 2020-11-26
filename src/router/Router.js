import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from "../components/NavBar";
import Signup from "../pages/Signup";
import Signin from '../pages/Signin';



function AppRouter() {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/register" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        </Router>
    );
}

export default AppRouter;