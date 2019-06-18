import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://web-ninjas.net/'
});

instance.defaults.headers.common['Authorization'] = localStorage.getItem("token")

instance.interceptors.response.use((response) => {
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

export default instance;
