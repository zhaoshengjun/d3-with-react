import * as React from 'react';
import {Component} from 'react';
import * as d3 from 'd3';

class TrafficChart extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  refs: {
    [key: string]: (Element);
    chartArea: HTMLDivElement
  }

  componentDidMount() {
    d3.json(this.props.url, (err, data) => {
      if (err) {
        console.log('Error reading data: ', err);
      } else {
        console.log(data);
        this.setState({
          data: data
        })
        this.updateChart();
      }
    }); 
  }

  updateChart() {
    this.render();
    const svg = d3.select(this.refs.chartArea)
      .append('div')
      .attr('width', 300)
      .attr('height', 300)
      ;
  
    svg.selectAll('.bar')
      .data(this.state.data.cash)
      .enter()
      .append("div")
      .attr('class', 'bar')
      .style('width', (d) => d.count / 100 + 'px')
      .style('fill','steelblue')
      .text((d) => Math.round(d.count))
      ;
  }

  render() {
    let style = {
      width: this.props.width,
      height: this.props.height,
      border: '1px solid #ffffff',
      backgroundColor: '#ffffff',
      marginLeft: 50,
      marginTop: 50
    };
    if (this.state.data.length === 0) {
      return (
        <div className="loading"></div>
      );
    } else {
      return (
        <div style={style} ref="chartArea"></div>
      );
    }
  }
}

export default TrafficChart;