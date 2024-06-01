export const removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

export const getNext30Days = () => {
    // Get today's date
    const today = new Date();

    // Create an array to store the dates
    const dates = [];

    // Loop through the next 30 days
    for (let i = 0; i < 30; i++) {
        // Create a new date object for each day
        const nextDate = new Date(today);
        // Increment the date by one day
        nextDate.setDate(today.getDate() + i);
        // Push the date into the array
        dates.push(nextDate.toDateString());
    }

    // Return the array of dates
    return dates;
};