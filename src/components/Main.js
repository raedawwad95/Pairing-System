import React from 'react';
import Home from './Home.js';
import History from './History.js';
import Pairing from './Pairing.js';
import AddStudent from './AddStudent.js';
import {Route, BrowserRouter as Router } from 'react-router-dom';

class Main extends React.Component {
constructor(props) {
  super(props);
}
render() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/addStudent" component={AddStudent} />
      <Route exact path="/pairing" component={Pairing} />
      <Route exact path="/history" component={History} />
    </div>
  )
}
}
export default Main;  