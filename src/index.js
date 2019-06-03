import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span>哈哈哈哈</span>;
  }
}
ReactDOM.render(<Index />, document.getElementById('app'));
