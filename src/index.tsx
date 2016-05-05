import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TrafficChart from './traffic-chart';


ReactDOM.render(
  <TrafficChart url='../data/plaza_traffic.json' width={800} height={600} />,
  document.getElementById('root')
);
