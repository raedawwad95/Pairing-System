import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render () {
    return (
    <div className="container" style={{'margin-top': '10%'}}>
      <Home />
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

