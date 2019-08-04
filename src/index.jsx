/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <App />;
  }
}
ReactDOM.render(<Index />, document.getElementById('app'));
