import React from "react";

const Appts = ({pet, date, time}) => {
  return (
    <div>
      <h1>Pet: {pet}</h1>
      <h5>Date: {date} </h5>
      <h5>Time: {time}</h5>
    </div>
  )
}


export default Appts;