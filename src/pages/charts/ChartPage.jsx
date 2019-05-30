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
    halls: [],
    isDataReady: false
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
            halls: result.halls,
            isLoading: true
          });  
        console.log("categories", this.state.options)
        console.log("halls",this.state.halls)
      })
      .then(() => {
        return api.getTickets()
      })
      .then(tickets => {
        let hallsCounter = [];

        this.state.halls.forEach((hall, i) => {
          hallsCounter[i] = tickets.filter((ticket) => ticket.hall_id === hall._id).length;
        });


//         // for (let j = 0; j < this.state.halls.length; j++) {
//         //   //hallsCounter[j] = 0
//         //   for (let i = 0; i < tickets.length; i++) {
//         //     if (tickets[i].hall_id === this.state.halls[j]._id) {
//         //       hallsCounter[j]++
//         //       console.log (`hall ${j} `, hallsCounter[j])
//         //     }
//         //   } 
//         //   console.log('hall tickets number', hallsCounter[j])
//         // }

        console.log('COUNTER', hallsCounter)

        this.setState({
          series: [{
            data: hallsCounter
          }],
          isLoading: true, 
          tickets: tickets,
          isDataReady: true
        }); 
        console.log('series', this.state.series)
        console.log("tickets", this.state.tickets.length)
      });;
  };

  

  componentDidMount() {
    this.getHallTitle();
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
        </Block>
      </Wrap>
    );
  }
};

export default ChartPage;