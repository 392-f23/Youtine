import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import "./SummaryPage.css";
import PieChart from './PieChart';
import OneDaySummary from "./OneDaySummary";
const SummaryPage = ({routines}) => {
    
    const [value, onChange] = useState(new Date());
    const [dailySummary, setDailySummary] = useState(false);

    return (
        <div className= "calendar-page">
            <h2 className="main-title">Summary</h2>
            <div className="button-bar">
                <button onClick = {() => setDailySummary(true)}>Daily</button>
                <button onClick = {() => setDailySummary(false)}>Overall</button>
            </div>
            {dailySummary? 
                <div>
                    <Calendar onChange={onChange} value={value} />
                    <OneDaySummary routines={routines} date = {value}/>
                </div> : 
                <PieChart />
                // My idea is to show a pie chart for each existing Routine, and each pie chart shows information since its creation:
                // 1. Percentage of days the user hits the goal
                // 2. Percentage of days the user does not hit the goal
                // 3. Percentate of days the user not only hits the goal but goes beyond the goal
                // To do that, record the creation date of the routine when creating new routine (or we do not need this if we want a weekly verion of this)
            }
        </div>
    );
    
}

export default SummaryPage;