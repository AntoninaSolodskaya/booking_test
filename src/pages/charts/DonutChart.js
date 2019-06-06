import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section } from './styled';
import Chart from 'react-apexcharts';

const mapState = state => ({
  halls: state.halls,
  tickets: state.tickets
});

class DonutChart extends Component {

  state = {
    options: {},
    series: [],
    isLoading: false,
    tickets: [],
    halls: [],
    isDataReady: false,
    labels: []
  };

  displayChart = () => {

    const { halls, tickets } = this.props;

    let hallsCounter = [];

    halls.forEach((hall, i) => {
      const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id).length;
      hallsCounter[i] = filterHalls;
    });

    this.setState({
      labels: halls.map(hall => hall.title),
      halls: halls,
      isLoading: true,
      series: hallsCounter,
      tickets: tickets,
      isDataReady: true
    });  
  };

  componentDidMount() {
    this.displayChart();
  };

  render() {
    return ( 
      <Section>
        <div className="donut">
          {this.state.isDataReady && (
            <Chart 
              options={this.state.options} 
              series={this.state.series} 
              type="donut" 
              width="600" 
            />
          )}
        </div>   
      </Section> 
    );
  }
};

export default connect(mapState)(DonutChart);