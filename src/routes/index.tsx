import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found';
import { HomePage } from '../pages/home';
import { SamplePage } from '../pages/sample';
import { SampleAlertsPage } from '../pages/sample-alerts';

const AppRoutes: FunctionComponent = () => {

  return (
    <Router>
      <Switch>
        <Route path="/sample-alerts" exact={true} component={SampleAlertsPage} />
        <Route path="/sample" exact={true} component={SamplePage} />
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;