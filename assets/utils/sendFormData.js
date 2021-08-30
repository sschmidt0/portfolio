import axios from 'axios';

export const sendFormData = (data, url) => {
  axios
    .post(url, data)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};
