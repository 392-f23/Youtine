import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import "./SummaryPage.css";
import OneDaySummary from "./OneDaySummary";
const SummaryPage = ({routines}) => {
    
    const [value, onChange] = useState(new Date());

    return (
        <div className= "calendar-page">
            <h1>Youtine Summary</h1>
            <Calendar onChange={onChange} value={value} />
            <OneDaySummary routines={routines} date = {value}/>
        </div>
    );
    
}

export default SummaryPage;