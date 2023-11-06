import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import "./SummaryPage.css";
import PieChart from './PieChart';
import OneDaySummary from "./OneDaySummary";
const SummaryPage = ({routines}) => {
    
    const [value, onChange] = useState(new Date());

    return (
        <div className= "calendar-page">
            <h2 className="main-title">Your Routines</h2>
            <Calendar onChange={onChange} value={value} />
            <OneDaySummary routines={routines} date = {value}/>
            <PieChart />
        </div>
    );
    
}

export default SummaryPage;