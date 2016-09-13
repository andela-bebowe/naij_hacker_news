import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Container from './containers/Container.js';
import App from './components/App.js';

// The container component should grab the param from its props (from router) and send it to the body, to be displayed

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Container} />
      <Route path="/all" component={Container}></Route>
      <Route path="/sports" component={Container}></Route>
      <Route path="/tech" component={Container}></Route>
      <Route path="/politics" component={Container}></Route>
      <Route path="/arts" component={Container}></Route>
    </Route>
);

export default routes;
