import axios from 'axios'
const URL_API = 'http://localhost:3000'

export const generateSegitigaApi = (val) => {
    return axios.post(URL_API + '/generate-segitiga', {
        number: val
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const generateBilanganGanjilApi = (val) => {
    return axios.post(URL_API + '/generate-bilangan-ganjil', {
        number: val
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}


export const generateBilanganPrimaApi = (val) => {
    return axios.post(URL_API + '/generate-bilangan-prima', {
        number: val
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}