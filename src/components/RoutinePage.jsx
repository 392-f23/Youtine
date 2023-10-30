import RoutineList from "./RoutineList";
import { firebaseSignOut } from "../utilities/firebase";
import "./RoutinePage.css";
const RoutinePage = ({ routines }) => {
  return (
    <div>
      <h2 className="main-title">Your Routines</h2>
      <div className="content">
        <RoutineList routines={routines} />
      </div>
    </div>
  );
};

export default RoutinePage;
