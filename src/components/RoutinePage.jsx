import { useState } from "react";
import RoutineList from "./RoutineList";
import { NewRoutinePage } from "./NewRoutinePage";
import { firebaseSignOut } from "../utilities/firebase";
import "./RoutinePage.css";
import Modal from "./Modal";

const RoutinePage = ({ routines }) => {

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <div>
        <h2 className="main-title">Your Routines</h2>
      </div>
      <div className="new-routine-button" onClick={openModal}>➕</div>
      <Modal open={open} close={closeModal}>
        <NewRoutinePage />
      </Modal>
      <div className="content">
        {routines ?
          <RoutineList routines={routines} /> :
          <div>
            <h2> No routines yet</h2>
            <h3>Click the + icon to get started</h3>
          </div>
        }
      </div>
    </div >
  );
};

export default RoutinePage;
