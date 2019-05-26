import React, { Component } from "react";
import { Wrap, Block } from './styled';
import Chart from "react-apexcharts";

class ChartPage extends Component {
  state = {
    options: {
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      toolbar: {
        download: 'Download SVG',
        selection: 'Selection',
        selectionZoom: 'Selection Zoom',
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
        pan: 'Panning',
        reset: 'Reset Zoom',
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
    },
      series: [
        {
          name: "tickets",
          data: [30, 40, 21, 50, 36]
        }
      ]
  };

  render() {
    return (
      <Wrap>
        <Block>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              max-width="900px"
              min-width="300px"
            />
          </div>
        </Block>
      </Wrap>
    );
  }
}

export default ChartPage;
