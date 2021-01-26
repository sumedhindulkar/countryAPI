import axios from "axios";

const URL = "https://restcountries.eu/rest/v2/name/";

const fetchCountry = async (query) => {
  const { data } = await axios.get(URL + query).catch((error) => {
    if (error.response) {
      console.log(error.response.status);
    }
  });
  return data;
};

export default fetchCountry;
