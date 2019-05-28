import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import api from '../../utils/api';


const BarPage = (props) => {

  const initialStateSavingAmount = 0;

  const nextMonth = ['October', 'November', 'December', 'January', 'February', 'March']

  const nextMonthNumbered = [1, 2, 3, 4, 5, 6];

  const totalData = props.tickets.reduce((hall_id, _id) => hall_id + 1, initialStateSavingAmount);

  const totalSaveData = nextMonthNumbered.map(nextMonthNumber => nextMonthNumber + totalData);

  const data = {
    labels: nextMonth,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: totalSaveData
      }
    ]
  };

  return(
    <Bar data={data}/>
  )
}


class TestChart extends Component {
  state = {
    tickets: []
  };

  loadData = () => {
  api.getTickets()
    .then(result => {
      this.setState({
        tickets: result
          .filter(ticket => ticket.hall_id)
      });
      console.log("result", this.state.tickets)
    })
  };

  componentDidMount() {
    this.loadData();
  }
  render() {
  const {tickets} = this.state;

  const ticketsComponent = tickets.map(ticket => {
    return (
      <div key={ticket._id}>{ticket.title} - {ticket.hall_id}</div>
    )
  });

    return (
      <div className="container">
        <div className="nav">
          {ticketsComponent}
        </div>
        <div className="main">
          <BarPage tickets={tickets}/>
        </div>
      </div>
    );
  }
};

export default TestChart;