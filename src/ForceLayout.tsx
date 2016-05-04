import * as React from 'react';
import {Component} from 'react';
import * as d3 from 'd3';
import DATA from './DATA';

class ForceLayout extends Component<any, any> {

  refs: {
    [key: string]: (Element);
    mountPoint: HTMLDivElement;
  }

  componentDidMount() {
    const {width, height} = this.props;
    const force = d3.layout.force()
      .charge(-120)
      .linkDistance(50)
      .size([width, height])
      .nodes(DATA.nodes)
      .links(DATA.links);

    const svg = d3.select(this.refs.mountPoint)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      ;

    const link = svg.selectAll('line')
      .data(DATA.links)
      .enter()
      .append('line')
      .style('stroke', '#999999')
      .style('stroke-opacity', 0.6)
    .style('stroke-width', (d) => Math.sqrt(d.value))

    const color = d3.scale.category20();

    const node = svg.selectAll('circle')
      .data(DATA.nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .style('stroke', '#FFFFFF')
      .style('stroke-width', 1.5)
      .style('fill', (d) => color(d.group.toString()))
      .call(force.drag)
      ;
    
    force.on('tick', () => {
      // console.log('node: ',DATA.nodes[0]);
      // console.log('link: ',DATA.links[0]);
      link.attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
      

      node.attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
    });
    
    force.start();
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      border: '1px solid #323232'
    }
    return (
      <div style={style} ref="mountPoint" ></div>
    );
  }
}

export default ForceLayout;