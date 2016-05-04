import * as React from 'react';
import {Component, PropTypes} from 'react';

import {render} from 'react-dom';


class Greeter extends Component<any, any> {
  static propTypes;
  static defaultProps;
  render() {
    return (
      <h1>{this.props.salutation}</h1>
    )
  }
}

Greeter.propTypes = {
  // salutation: PropTypes.string.isRequired
  salutation: PropTypes.string
}

Greeter.defaultProps = {
  salutation: 'Hello World'
}

render(
  <Greeter salutation="hi hello nihao" />,
  document.getElementById('root')
);