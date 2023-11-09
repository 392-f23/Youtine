export const determineProgress = (task) => {
    // Get today's date
    const today = new Date();

    // Initialize a count for days the goal was hit
    let goalHitCount = 0;

    // Iterate over the last 7 days
    for (let i = 0; i < 7; i++) {
        // Calculate the date for the current day in the past
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() - i);
        // const formattedDate = currentDay.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }); // Format as "mm/dd/yyyy"
        const formattedDate = toFormattedDate(currentDay);
        // Check if the date exists in the task's progress
        // console.log(task);
        if (task.progress[formattedDate]) {
            // Check if the goal was hit on that day
            if (parseInt(task.progress[formattedDate]) >= parseInt(task.daily_goal)) {
                goalHitCount++;
            }
        }
    }

    return goalHitCount;
}

export const toFormattedDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // months from 1-12
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    const formattedDate = `${mm}-${dd}-${yyyy}`;
    return formattedDate;
}