import { LOAD_DATA } from './chartsConstants';
import { loadAllTickets } from '../../calendar/ticketsActions/ticketActions';
import { loadAllHalls } from '../../main/hallsAction/hallsActions';
import api from '../../../utils/api';

export const fetchData = data => {
  return {
    type: LOAD_DATA,
    payload: { 
      data
    }
  }
};

export const getChartsData = () => {
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
          const filterHalls = tickets.filter((ticket) => ticket.hall_id === hall._id).length;
          hallsCounter[i] = filterHalls;
        });
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