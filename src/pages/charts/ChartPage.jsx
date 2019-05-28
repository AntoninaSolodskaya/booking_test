import React, { Component } from "react";
import { Wrap, Block } from './styled';
import Chart from "react-apexcharts";
import api from "../../utils/api";

class ChartPage extends Component {
 
  state = {
    options: {},
    series: [{ data: [] }],
    isLoading: false,
    tickets: [],
    halls: []
  };

  getHallTitle = () => {
    api.getHalls()
    .then(result => {
      this.setState({
        options: {
          chart: {
            id: result.halls.map(hall => hall._id)
          },
          xaxis: {
            categories: result.halls.map(hall => hall.title)
          }
        },
          isLoading: false, 
          halls: result.halls
        });  
      console.log("categories", this.state.options)
      console.log("halls",this.state.halls)
    });
  };

  getTicketData = () => {
    api.getTickets()
      .then(result => {
        let hallsCounter = [0, 0, 0, 0]

        for (let j = 0; j < this.state.halls.length; j++) {
          hallsCounter[j] = 0
          for (let i = 0; i < result.length; i++) {
            if (result[i].hall_id === this.state.halls[j]._id) {
              hallsCounter[j]++
              console.log (`hall ${j} `, hallsCounter[j])
            }
          } 
          console.log('hall tickets number', hallsCounter[j])
        }

        console.log('COUNTER', hallsCounter)

        this.setState({
          series: [{
            data: hallsCounter
          }],
          isLoading: true, 
          tickets: result
        }); 
        console.log('series', this.state.series)
        console.log("tickets", this.state.tickets.length)
      });
  };

  componentDidMount() {
    this.getHallTitle();
    this.getTicketData();
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
};

export default ChartPage;