import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found';
import { HomePage } from '../pages/home';

const AppRoutes: FunctionComponent = () => {

  return (
    <Router>
      <Switch>
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;