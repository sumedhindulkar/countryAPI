import React from "react";

function Country(props) {
  return (
    <>
      <div className="data">
        <div className="main-data">
          <h2 className="data-cou">{props.name}</h2>
          <h3 className="data-lan">Language: {props.language}</h3>
          <img className="data-flag" src={props.flag} alt="flag" />
          <h3 className="data-lan">Capital: {props.capital}</h3>
          <h3 className="data-lan">Population: {props.population}</h3>
        </div>
      </div>
    </>
  );
}
export default Country;
