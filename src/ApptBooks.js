import React from "react";
import Appts from "./Appts";

const ApptBooks = ({appts}) => {
  let allAppts = appts.map(appt => {
    return (
      <Appts
        key={appt.id}
        pet={appt.pet}
        time={appt.time}
        date={appt.date}
        />
    )
  })
  return (
    <div className="appts">
      {allAppts}
    </div>
  )
}

export default ApptBooks;