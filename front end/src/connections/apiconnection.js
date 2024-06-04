import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    params: {
      key: 'e53bba19d7914970889f528d70c8e06d',
    },
  });
  
class APIClient {
    endpoint
  
    constructor(endpoint) {
      this.endpoint = endpoint;
    }
  
    getTopTen = () => {
      return axiosInstance.get(this.endpoint)
        .then((res) => res.data);
    };

  
    // get = (id) => {
    //   return axiosInstance
    //     .get<T>(this.endpoint + '/' + id)
    //     .then((res) => res.data);
    // };
    post = (item) => {
        return axiosInstance.post(this.endpoint,item).then((res) => res.data);
    }
  }
  
  export default APIClient;