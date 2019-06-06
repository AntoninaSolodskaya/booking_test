import React, { Component } from "react";
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

const mapState = state => ({
  halls: state.halls,
  tickets: state.tickets
});

class LineChart extends Component {
  state = {
    options: {
      chart: {
        shadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      markers: {   
        size: 6
      },
      xaxis: {
        categories: [],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
    series: [{ data: [] }],
    halls: [],
    tickets: [],
    isDataReady: true
  }

  displayChart = () => {

    const { halls, tickets } = this.props;

    let hallsCounter = [];

    halls.forEach((hall, i) => {
      const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id)
      // .length;
      
      console.log("fitterHalls", filterHalls);

      const time = filterHalls.map(ticket => ticket.from);
      console.log("time", time);

      hallsCounter[i] = [hallsCounter + time]
      console.log('counter', hallsCounter[i])

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
      halls: halls,
      isLoading: true,
      tickets: tickets,
      isDataReady: true,
      // series: [{ data: hallsCounter }]
      series: [
        {
          name: "Series 1",
          data: [
            {
              x: "02-10-2017 GMT",
              y: 34
            },
            {
              x: "02-11-2017 GMT",
              y: 43
            },
            {
              x: "02-12-2017 GMT",
              y: 31
            },
            {
              x: "02-13-2017 GMT",
              y: 43
            }
          ]
        }
      ]
    });  
  };

  componentDidMount() {
    this.displayChart();
  };

  render() {
    return (
      <div id="chart">
        <Chart 
          options={this.state.options} 
          series={this.state.series} 
          type="line" height="350" 
        />
      </div>
    );
  }
};

export default connect(mapState)(LineChart);
// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import Chart from "react-apexcharts";

// const mapState = state => ({
//   halls: state.halls,
//   tickets: state.tickets
// });

// class LineChart extends Component {
      
//   state = {
//     halls:[],
//     tickets: [],
//     isDataReady: true,
//     options: {
//       xaxis:{
//         categories: [
//           "01 Jun",
//           "02 Jun",
//           "03 Jun",
//           "04 Jun",
//           "05 Jun",
//           "06 Jun"
//         ]
//       }
//   },
//   series: [{ name: "", data: [] }]
   
//     //   name: "Session Duration",
//     //   data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
//     // },
//     // {
//     //   name: "Page Views",
//     //   data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
//     // },
//     // {
//     //   name: 'Total Visits',
//     //   data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    
//   };
  

//   displayChart = () => {

//     // const { halls, tickets } = this.props;

//     // let hallsCounter = [];

//     // halls.forEach((item, i) => {

//     //   const filterHalls = tickets.filter(it => it.hall_id === item._id) 
//     //   console.log("filterHall", filterHalls)
     
//     //   const time = filterHalls.map(ticket => ticket.from) 
//     //   console.log("time", time)

//     //   hallsCounter[i] = time
//     //   console.log(hallsCounter)

//     //   const monthNames = ["January", "February", "March", "April", "May", "June",
//     //     "July", "August", "September", "October", "November", "December"
//     //   ];

//     //   const d = new Date();
//     //   console.log("The current month is " + monthNames[d.getMonth()]);
//     // })
    
//     const { halls, tickets } = this.props;

//     let hallsCounter = [];

//     halls.forEach((hall, i) => {
//       const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id).length;
//       hallsCounter[i] = filterHalls;
//     });
//       this.setState({
//         options: {
//           chart: {
//             zoom: {
//               enabled: false
//             },
//           },
//           dataLabels: {
//             enabled: false
//           },
//           stroke: {
//             width: [5, 7, 5],
//             curve: 'straight',
//             dashArray: [0, 8, 5]
//           },
//           title: {
//             text: 'Page Statistics',
//             align: 'left'
//           },
//           markers: {
//             size: 0,
            
//             hover: {
//               sizeOffset: 6
//             }
//           },
//           grid: {
//             borderColor: '#f1f1f1',
//           },
//           // xaxis: {
//           //   categories: halls.map(hall => hall.title)
//           // },
//            series: [{ data: hallsCounter }]
//         },
//         halls: halls,
//         isLoading: true,
//         tickets: tickets,
//         isDataReady: true,
       
//       }); 
    
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
//           type="line" 
//           height="350" 
//         />
//       </div>
//     );
//   }
// }

// export default connect(mapState)(LineChart);