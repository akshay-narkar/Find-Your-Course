import { Route, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import Error from '../Components/Error';
import Login from '../Containers/Login';
import Signup from '../Containers/Signup';
import Signout from '../Components/Signoutmessage';

export default function Routes() {
  return (
    <>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Signout} />

        {/* <Route path = "/course/:id" component = {Course}></Route> */}
        {/* <Route path = ":user_id/favs/:id" component = {Favs}></Route> */}
        <Route component={Error} />
      </Switch>
    </>
  );
}
