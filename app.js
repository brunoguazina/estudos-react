const React = require('react');
const ReactDOM = require('react-dom');

const myComponent = React.createElement('div', null, 'Hello World'); // <div>Hello World</div>

ReactDOM.render(
  myComponent, 
  document.getElementById('root')
);