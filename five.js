const times =[100, 3800, "90" ]

function calculateSleepTime(times) {
    let totalSecond = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
            return "Invalid";
        }
        totalSecond =totalSecond + times[i];
    }
    let hour = Math.floor(totalSecond / 3600);
    let minute = Math.floor((totalSecond % 3600) / 60);
    let second = totalSecond % 60;
    return {
        hour: hour,
        minute: minute,
        second: second
    };
}

const timesInFormate = calculateSleepTime(times);
console.log(timesInFormate);