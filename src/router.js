import React from 'react';
import { router } from 'dva';
// import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Count from './routes/Count';

const { Router, Route, Switch } = router;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={props => <IndexPage {...props}></IndexPage>} />
        <Route path="/products" exact component={props => <Products {...props}></Products>} />
        <Route path="/count" exact component={props => <Count {...props}></Count>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
