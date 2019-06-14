import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import Chart from "react-apexcharts";
import { Wrap, Block, Container, Button } from './styled';

const mapState = state => ({
  halls: state.halls,
  tickets: state.tickets
});

class LineChart extends Component {
      
  state = {
    isDataReady: true,
    monthes: [],
    options: {
      chart: {
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5, 3],
        curve: 'straight',
        dashArray: [0, 8, 5, 0]
      },
      markers: {
        size: 0,
        
        hover: {
          sizeOffset: 6
        }
      },
      grid: {
        borderColor: '#f1f1f1',
      },
      xaxis:{
        categories: []
      }
    },
    series:[{
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  };

  displayChart = (monthIndex) => {

    const { halls, tickets } = this.props;
    let hallsCounter = [];
    let monthes = [];
    console.log("options", this.state.options)
    console.log("series", this.state.series)
    console.log("monthes", monthes)
    console.log("hallsCounter", hallsCounter)
    tickets.forEach((ticket) => {
      const monthNumberFrom = moment(ticket.from);
      const monthNumberTo = moment(ticket.to);
     

      if (monthes.indexOf(monthNumberFrom.format('YYYY-MM')) < 0 ) {
        monthes.push(monthNumberFrom.format('YYYY-MM'));
      }
      if (monthes.indexOf(monthNumberTo.format('YYYY-MM')) < 0 ) {
        monthes.push(monthNumberTo.format('YYYY-MM'));
      }
    });

    if (monthes.length === 0) return; 

    this.setState({ monthes });

    halls.forEach((hall) => {
      const filterHalls = tickets
        .filter((ticket) => ticket.hall_id === hall._id)
        .filter((ticket) => moment(ticket.from).format('YYYY-MM') === monthes[monthIndex]);
      
      let dataByDays = [];
      console.log("dataByDays", dataByDays)
      if (filterHalls.length === 0) return;

      for (let i = 1; i < moment(monthes[monthIndex], "YYYY-MM").daysInMonth(); i++) {

        const ticketsInDay = filterHalls.filter((ticket) => {

          return moment(ticket.from).format('D') == i;
        });

        if (ticketsInDay.length > 0 ) {
          dataByDays.push(ticketsInDay.length);
        }
        else {
          dataByDays.push(0);
        }
      }
      console.log("filterHalls", filterHalls.length)
      hallsCounter.push({name: hall.title, data: dataByDays });
    });

    const arrayOfDays = Array.from(Array(moment(monthes[monthIndex], "YYYY-MM").daysInMonth()), (_,x) => String(x));

    const newOptions = {...this.state.options};
    newOptions.xaxis.categories = arrayOfDays;

      this.setState({
        options: newOptions,
        series: hallsCounter,
        isDataReady: true,
      }); 
  };
    
  componentDidMount() {
    this.displayChart(0);
  };

  render() {
    return (
      <Wrap>
        <Container>
          {this.state.monthes.map((month, i) => (
            <Button
              key={month}
              type="button"
              onClick={() => this.displayChart(i)}
            >
            {moment(month, 'YYYY-MM').format('MMMM')}
            </Button>
          ))}
        </Container>
        <Block>
          <div id="chart">
            <Chart 
              options={this.state.options} 
              series={this.state.series} 
              type="line" 
              height="500" 
            />
          </div>
        </Block>
      </Wrap> 
    );
  }
};

export default connect(mapState)(LineChart);