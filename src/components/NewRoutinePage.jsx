import { useState } from 'react';
import { useFormData } from '../utilities/useFormData';
import { useDbData, useDbUpdate, useRoutineInsert } from '../utilities/firebase';

const validateRoutineData = (key, val) => {
    return '';
};




export const NewRoutinePage = () => {
    
    const InputField = ({ name, text, state, change }) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{text}</label>
            <input className={`form-control ${state.errors && state.errors[name] ? 'is-invalid' : state.values[name] ? 'is-valid' : ''}`} id={name} name={name}
                defaultValue={state.values?.[name]} onChange={change} />
            <div className="invalid-feedback">{state.errors?.[name]}</div>
        </div>
    );

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
                defaultValue={0} onChange={change} />
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
    const createRoutineObject = () => {
        return {"daily_goal": dailyGoal, "progress": {}, "title": name, "unit": units};
    }
    const [name, changeName] = useState("");
    const [dailyGoal, changeDailyGoal] = useState(0);
    const [units, changeUnits] = useState("");

    const [state, change] = useFormData(validateRoutineData, createRoutineObject());
    const [update, result] = useRoutineInsert();

    const submit = (evt) => {
        // const taskObject = {"daily_goal": dailyGoal, "progress": {}, "title": name, "unit": units};
        change(createRoutineObject());
        evt.preventDefault();
        update(state.values);
    };

    return (
        <div>
            <form onSubmit={submit} noValidate className={name.errors && dailyGoal && units ? 'was-validated' : null}>
                <TextField name="routine-name" text="Routine Name" state={name} change={changeName} />
                <NumberField name="daily-goal" text="Daily Goal" state={dailyGoal} change={changeDailyGoal} />
                <TextField name="goal-unit" text="Unit of Goal" state={units} change={changeUnits} />
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