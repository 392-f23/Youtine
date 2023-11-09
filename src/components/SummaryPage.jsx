import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import "./SummaryPage.css";
import PieChart from './PieChart';
import OneDaySummary from "./OneDaySummary";


const SummaryPage = ({routines}) => {
    
    const [value, onChange] = useState(new Date());

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    return (
        <div className= "calendar-page">
            <h2 className="main-title">Summary</h2>
            <Calendar className="calendar" onChange={onChange} value={value} />
            <OneDaySummary routines={routines} date = {value}/>
            { < PieChart selectedDate={formatDate(value)} /> }
        </div>
    );
    
}

export default SummaryPage;