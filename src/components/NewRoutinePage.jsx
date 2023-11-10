import { useState } from 'react';
import { useFormData } from '../utilities/useFormData';
import { useDbData, useDbUpdate, useRoutineInsert } from '../utilities/firebase';
import {v4 as uuidv4} from 'uuid';
import { toFormattedDate } from '../utilities/dateUtils';

const validateRoutineData = (key, val) => {
    return '';
};

    const TextField = ({ name, text, state, change }) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{text}</label>
            <input className='form-control' id={name} name={name} type="text"
                onChange={change} />
            <div className="invalid-feedback">{state.errors?.[name]}</div>
        </div>
    );

    const NumberField = ({ name, text, state, change }) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{text}</label>
            <input className='form-control' id={name} name={name} type="number"
                defaultValue={"0"} onChange={change} />
            <div className="invalid-feedback">{state.errors?.[name]}</div>
        </div>
    );

    const TextListField = ({ name, text, list, state, change }) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{text}</label>
            <input className='form-control' id={name} name={name} type="text" list={list}
                onChange={change} />
            <div className="invalid-feedback">{state.errors?.[name]}</div>
        </div>
    );
    
    const ButtonBar = ({ message, disabled }) => {
        return (
            <div className="d-flex">
                <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Add Routine</button>
                <span className="p-2">{message}</span>
            </div>
        );
    };

export const NewRoutinePage = () => {
    
    const [name, changeName] = useState("");
    const [dailyGoal, changeDailyGoal] = useState("0");
    const [units, changeUnits] = useState("");
    const dates = {};
    dates[toFormattedDate(new Date())] = "0";
    const createRoutineObject = () => {
        return { "daily_goal": dailyGoal.target.value, "progress": dates, "title": name.target.value, "unit": units.target.value };
    }


    const id = uuidv4().toString();
    const [addRoutine, result] = useDbUpdate(`/tasks/${id}`);
    const submit = (evt) => {
        evt.preventDefault();
        const routineObject = createRoutineObject();
        console.log("RoutineObject: ");
        console.log(routineObject.title);
        addRoutine(routineObject);
    };

    return (
        <div>
            <form onSubmit={submit} noValidate className={name.errors && dailyGoal && units ? 'was-validated' : null}>
                <TextField name="routine-name" text="Routine Name" state={name} change={changeName} />
                <NumberField name="daily-goal" text="Daily Goal" state={dailyGoal} change={changeDailyGoal} />
                <TextField name="unit" text="Unit of Goal" state={units} change={changeUnits} />
                <ButtonBar />
            </form>
            {/* <datalist id="units">
                <option value="minutes"></option>
                <option value="hours"></option>
                <option value="calories"></option>
            </datalist> */}
        </div>
    )
}