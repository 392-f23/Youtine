import RoutineCard from "./RoutineCard";

const RoutineList = ({ routines }) => {
    console.log(routines);
    return (
        <div>
            {Object.entries(routines).map((x, i) => <RoutineCard routine={x} key={i} />)}
        </div>
    )
}

export default RoutineList;
