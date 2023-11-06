
export const NewRoutinePage = () => {
    const submit = () => {

    }

    return (
        <div>
            <label for="routine-name">Routine Name</label>
            <input id="routine-name" type="text" />
            <label for="daily-goal">Daily Goal</label>
            <input id="daily-goal" type="number" />
            <label for="goal-unit">Unit of Goal</label>
            <input id="goal-unit" list="units" type="text" />
            <button onClick={submit}>Add</button>

            <datalist id="units">
                <option value="minutes"></option>
                <option value="hours"></option>
                <option value="calories"></option>
            </datalist>
        </div>
    )
}