import RoutineList from "./RoutineList";
import { firebaseSignOut } from "../utilities/firebase";
const RoutinePage = ({routines}) => {
    return (
        <div>
            
            <h2>Your Routines</h2>
            <RoutineList routines = {routines}/>
        </div>
    )
}

export default RoutinePage;