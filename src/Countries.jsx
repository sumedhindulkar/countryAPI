import React from "react";

function Countries(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.language}</td>
        <td>
          <img className="data-flag" src={props.flag} alt="flag" />
        </td>
        <td className="hiddenAtSmall">{props.capital}</td>
        <td className="hiddenAtSmall">{props.population}</td>
      </tr>
    </>
  );
}

export default Countries;
