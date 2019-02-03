import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Home';
import Student from '../Components/Student';
import ListUser from '../Components/ListUser';

const Routes = () =>
	<Switch>
      <Route exact  path="/Home" component={Home} />
      <Route exact  path="/Student" component={Student} />
      <Route exact  path="/ListUser" component={ListUser} />
    </Switch>


export default Routes;