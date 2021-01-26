import "./styles.css";
import React, { useState, useEffect } from "react";
import fetchCountry from "./api/fetchCountry";
import Countries from "./Countries";
import Country from "./Country";
import axios from "axios";
function CountriesData(detail) {
  return (
    <Countries
      key={detail.name}
      name={detail.name}
      language={detail.languages[0].name}
      flag={detail.flag}
      capital={detail.capital}
      population={detail.population}
    />
  );
}
function CountryData(detail) {
  return (
    <Country
      key={detail.name}
      name={detail.name}
      language={detail.languages[0].name}
      flag={detail.flag}
      capital={detail.capital}
      population={detail.population}
    />
  );
}
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [dataC, setDataC] = useState(null);
  const search = async (e) => {
    if (e.key === "Enter") {
      setData(await fetchCountry(query));
      setQuery("");
    }
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get("https://restcountries.eu/rest/v2/all")
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status);
          }
        });
      setDataC(request.data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        className="search"
        placeholder="Search any Country..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {data && <div className="countryData">{data.map(CountryData)}</div>}
      <div>
        <table>
          <tr>
            <th>Country Name</th>
            <th> Language</th>
            <th> Flag</th>
            <th className="hiddenAtSmall"> Capital</th>
            <th className="hiddenAtSmall">Population</th>
          </tr>
          {dataC?.map(CountriesData)}
        </table>
      </div>
    </div>
  );
}
export default App;
