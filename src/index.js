import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import AddStudent from './components/AddStudent.js';
import Pairing from './components/Pairing.js';
import History from './components/History.js';

import {Route, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render () {
    return (
    <Router>
      <div className="container" style={{'marginTop': '10%'}}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/addStudent" component={AddStudent}/>
      <Route exact path="/pairing" component={Pairing} />
      <Route exact path="/history" component={History} />
      </div>
    </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

