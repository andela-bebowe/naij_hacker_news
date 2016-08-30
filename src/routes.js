import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Body from './Body.js';
import App from './App.js';

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Body} />
      <Route path="/all" component={Body}></Route>
      <Route path="/sports" component={Body}></Route>
      <Route path="/tech" component={Body}></Route>
      <Route path="/politics" component={Body}></Route>
      <Route path="/arts" component={Body}></Route>
    </Route>
);

export default routes;
