import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';

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
      <div className="container" style={{'margin-top': '10%'}}>
      <Route exact path="/" component={Main}/>
      </div>
    </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

