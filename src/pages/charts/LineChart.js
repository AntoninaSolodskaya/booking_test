// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import Chart from 'react-apexcharts';

// const mapState = state => ({
//   halls: state.halls,
//   tickets: state.tickets
// });

// class LineChart extends Component {
//   state = {
//     options: {
//       chart: {
//         shadow: {
//           enabled: true,
//           color: '#000',
//           top: 18,
//           left: 7,
//           blur: 10,
//           opacity: 1
//         },
//         toolbar: {
//           show: false
//         }
//       },
//       colors: ['#77B6EA', '#545454'],
//       dataLabels: {
//         enabled: true,
//       },
//       stroke: {
//         curve: 'smooth'
//       },
//       grid: {
//         borderColor: '#e7e7e7',
//         row: {
//           colors: ['#f3f3f3', 'transparent'],
//           opacity: 0.5
//         },
//       },
//       markers: {   
//         size: 6
//       },
//       xaxis: {
//         categories: [],
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'right',
//         floating: true,
//         offsetY: -25,
//         offsetX: -5
//       }
//     },
//     series: [{ data: [] }],
//     halls: [],
//     tickets: [],
//     isDataReady: true
//   }

//   displayChart = () => {

//     const { halls, tickets } = this.props;

//     let hallsCounter = [];

//     halls.forEach((hall, i) => {
//       const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id)
//       // .length;
      
//       console.log("fitterHalls", filterHalls);

//       const time = filterHalls.map(ticket => ticket.from);
//       console.log("time", time);

//       hallsCounter[i] = [hallsCounter + time]
//       console.log('counter', hallsCounter[i])

//     });
 
    
//     this.setState({
//       options: {
//         chart: {
//           id: halls.map(hall => hall._id)
//         },
//         xaxis: {
//           categories: halls.map(hall => hall.title)
//         }
//       },
//       halls: halls,
//       isLoading: true,
//       tickets: tickets,
//       isDataReady: true,
//       // series: [{ data: hallsCounter }]
//       series: [
//         {
//           name: "Series 1",
//           data: [
//             {
//               x: "02-10-2017 GMT",
//               y: 34
//             },
//             {
//               x: "02-11-2017 GMT",
//               y: 43
//             },
//             {
//               x: "02-12-2017 GMT",
//               y: 31
//             },
//             {
//               x: "02-13-2017 GMT",
//               y: 43
//             }
//           ]
//         }
//       ]
//     });  
//   };

//   componentDidMount() {
//     this.displayChart();
//   };

//   render() {
//     return (
//       <div id="chart">
//         <Chart 
//           options={this.state.options} 
//           series={this.state.series} 
//           type="line" height="350" 
//         />
//       </div>
//     );
//   }
// };

// export default connect(mapState)(LineChart);
import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import Chart from "react-apexcharts";

const mapState = state => ({
  halls: state.halls,
  tickets: state.tickets
});

class LineChart extends Component {
      
  state = {
    halls:[],
    tickets: [],
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
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: 'Page Statistics',
        align: 'left'
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
        categories: [
          "January", "February", "March", "April", "May", "June",
          "July", "August"
        ]
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

    console.log(monthes[monthIndex]);
    this.setState({ monthes });


    halls.forEach((hall) => {
      const filterHalls = tickets
        .filter((ticket) => ticket.hall_id === hall._id)
        .filter((ticket) => moment(ticket.from).format('YYYY-MM') === monthes[monthIndex]);
      
      let dataByDays = [];

      console.log(filterHalls);

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
      console.log(dataByDays);
      hallsCounter.push({name: hall.title, data: dataByDays });
    });

      
     const arrayOfDays = Array.from(Array(moment(monthes[monthIndex], "YYYY-MM").daysInMonth()), (_,x) => String(x));

     const newOptions = {...this.state.options};
     newOptions.xaxis.categories = arrayOfDays;

     console.log(newOptions);
      this.setState({
        options: newOptions,
        series: hallsCounter,
        tickets: tickets,
        isDataReady: true,
       
        halls: halls,
      }); 
    
  };
    
  componentDidMount() {
    this.displayChart(0);
  };

  
  render() {
    return (
      <div style={{marginBottom: "200px" }}>
        <div>
          {this.state.monthes.map((month, i) => (
            <button
              key={month}
              type="button"
              onClick={() => this.displayChart(i)}
            >{moment(month, 'YYYY-MM').format('MMMM')}</button>
          ))}
        </div>
        <div id="chart">
          <Chart 
            options={this.state.options} 
            series={this.state.series} 
            type="line" 
            height="350" 
          />
        </div>
      </div>
     
    );
  }
}

export default connect(mapState)(LineChart);