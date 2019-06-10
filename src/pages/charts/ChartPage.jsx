import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Wrap, Block } from './styled';
import Chart from "react-apexcharts";
import LineChart from './LineChart';

const mapState = state => ({
  halls: state.halls,
  tickets: state.tickets
});

class ChartPage extends Component {
 
  state = {
    options: {},
    series: [{ data: [] }],
    isLoading: false,
    isDataReady: false,
  };

  displayChart = () => {

    const { halls, tickets } = this.props;

    let hallsCounter = [];

    halls.forEach((hall, i) => {
      const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id).length;
      hallsCounter[i] = filterHalls;
    });

    this.setState({
      options: {
        chart: {
          id: halls.map(hall => hall._id)
        },
        xaxis: {
          categories: halls.map(hall => hall.title)
        }
      },  
      isLoading: true,
      series: [{
        data: hallsCounter
      }],
      isDataReady: true
    });  
  };

  componentDidMount() {
    this.displayChart();
  };

  render() {
    return (
      <Wrap>
        <Block>
          <div className="mixed-chart">
            {this.state.isDataReady && (
              <Chart 
                options={this.state.options}
                series={this.state.series}
                type="bar"
                max-width="900px"
                min-width="300px"
              /> 
            )}  
          </div>
          <LineChart />
        </Block>
      </Wrap>
    );
  }
};

export default withRouter(connect(mapState)(ChartPage));