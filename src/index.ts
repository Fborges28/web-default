import axios from "axios";
const url = `http://localhost:3000/products/`;

axios.get(url).then((response) => {
  console.log(response.data);
});
