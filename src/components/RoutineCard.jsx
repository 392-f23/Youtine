import { determineProgress } from "../utilities/dateUtils";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./RoutineCard.css";
import Modal from "./Modal";
import PopUp from "./PopUp";
import { useState } from "react";

const RoutineCard = ({ routine }) => {
    console.log(routine);
    const progress = determineProgress(routine[1]);
    const progressPercentage = (progress / 7 * 100).toFixed(0);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <div className="routine-card">
            <div className="routine-card-header">
                <h2 className="routine-card-title">{routine[1].title}</h2>
            </div>
            <div className="routine-card-body">
                <p className="routine-card-goal">Daily Goal: {routine[1].daily_goal} {routine[1].unit}</p>
                <div className="routine-card-progress">
                    <ProgressBar now={progressPercentage} label={`${progressPercentage}%`} />
                </div>
                <p className="routine-card-progress-text">Goal achieved {progress} out of 7 days</p>
            </div>
            <div className="routine-card-footer">
                <button className="routine-card-modify-btn" onClick={openModal}>Modify Goal</button>
            </div>
            <Modal open={open} close={closeModal}>
                <PopUp routine={routine} />
            </Modal>
        </div>
    );
}

export default RoutineCard;

