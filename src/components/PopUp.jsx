import '../index.css';
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toFormattedDate } from '../utilities/dateUtils';
import { useDbData } from '../utilities/firebase';

const validateRoutineData = (key, val) => {
    return '';
};

const InputField = ({ name, text, state, change }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{text}</label>
        <input className={`form-control ${state.errors && state.errors[name] ? 'is-invalid' : state.values[name] ? 'is-valid' : ''}`} id={name} name={name}
            defaultValue={state.values?.[name]} onChange={change} />
        <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);

const ButtonBar = ({ message, disabled }) => {
    return (
        <div className="d-flex">
            <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
            <span className="p-2">{message}</span>
        </div>
    );
};

const PopUp = ({ routine }) => {
    const formatedDate = toFormattedDate(new Date());
    const [stateGoal, changeGoal] = useFormData(validateRoutineData, routine[1]);
    const [stateProgress, changeProgress] = useFormData(validateRoutineData, routine[1].progress);

    const [updateGoal, resultGoal] = useDbUpdate(`/tasks/${routine[0]}`);
    const [updateProgress, resultProgress] = useDbUpdate(`/tasks/${routine[0]}/progress`);

    const submit = (evt) => {
        evt.preventDefault();
        updateGoal(stateGoal.values);
        updateProgress(stateProgress.values);
    };

    return (
        <form onSubmit={submit} noValidate className={stateGoal.errors ? (stateProgress.errors? 'was-validated' : null) : null}>
            <InputField name="daily_goal" text="Change Goal" state={stateGoal} change={changeGoal} />
            <InputField name= {formatedDate} text="Enter today's progress" state={stateProgress} change={changeProgress} />
            <ButtonBar message={resultGoal?.message} />
        </form>
    );
};

export default PopUp;