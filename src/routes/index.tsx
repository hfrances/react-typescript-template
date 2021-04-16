import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found';
import { HomePage } from '../pages/home';
import { MenuPage } from '../pages/menu';
import { SamplePage } from '../pages/sample';
import { SampleAlertsPage } from '../pages/sample-alerts';
import { SampleListPage } from '../pages/sample-list';

const AppRoutes: FunctionComponent = () => {

  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Switch>
        <Route path="/sample-list" exact={true} component={SampleListPage} />
        <Route path="/sample-alerts" exact={true} component={SampleAlertsPage} />
        <Route path="/sample" exact={true} component={SamplePage} />
        <Route path="/menu" exact={true} component={MenuPage} />
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;