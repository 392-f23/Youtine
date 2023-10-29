import { determineProgress } from "../utilities/dateUtils";
import "./RoutineCard.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const RoutineCard = ({ routine }) => {
    const progress = determineProgress(routine[1]);
    // console.log(routine[1]);
    console.log(progress/ 7 * 100);
    return (
        <div className="routine">
            <div>Name: {routine[1].title}</div>
            <div>
                Daily Goal: {routine[1].daily_goal}
                <h5>You hit your goal {progress} times in the last 7 days</h5>
                <ProgressBar now={(progress/7 * 100) } visuallyHidden /> 
            </div>
        </div>
    )
}

export default RoutineCard;