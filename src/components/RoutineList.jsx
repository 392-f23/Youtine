import RoutineCard from "./RoutineCard";
// import Modal from "./Modal";
// import PopUp from "./Popup";
// import { useState } from "react";

const RoutineList = ({ routines }) => {
    
    // console.log(routines);
    return (
        <div>
            {Object.entries(routines).map((x, i) => <RoutineCard routine={x} key={i} />)}
        </div>
    )
}

export default RoutineList;
