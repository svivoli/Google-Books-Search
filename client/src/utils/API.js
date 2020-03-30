import axios from "axios";

export default {
    populate: function () {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=thelordoftherings');
      },
    
    search: function (title) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title);
      },
};