import axios from 'axios';

axios.interceptors.response.use((response) => {
  return (response.data ? response.data : response);
}, (error) => {
  const res = error.response;
  console.log(`Request error! Status: ${res.status},
    message: ${typeof res.data === 'string' ? res.data : JSON.stringify(res.data) },
    from: ${error.config.url},
    method: ${error.config.method}`);
  if (res.status === 503) {
    return alert('Error\nSomething went wrong\nPlease try again later');
  }
  return Promise.reject(res);
});

const endpoint = 'http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/';

const api = {
  
  signIn: (email, password) => axios.post(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signIn`, { email, password }),

  signUp: (email, password) => axios.post(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signUp`, 
  {
    email: email.value,
    password: password.value
  }),

  getHalls: () => axios.get(`${endpoint}halls`),

  getTickets: () => axios.get(`${endpoint}tickets`),

  addTicket: (newTicket) => axios.post(`${endpoint}tickets`, newTicket),

  changeTicket: (ticketId) => axios.put(`${endpoint}ticket/${ticketId}`),

  deleteTicket: (ticketId) => axios.delete(`${endpoint}tickets/${ticketId}`)
};

export default api;