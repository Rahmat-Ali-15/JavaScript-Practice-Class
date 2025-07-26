let getInTime = moment().format('HH:mm'); // get current time in 24hr format

// select input elements
const inTime = document.querySelector('#in-time');
const outTime = document.querySelector('#out-time');

// set default values on page load
const dataSet = () => {
    inTime.value = getInTime; // set current time
    outTime.value = `16:00`;  // default out time
    diffrence_calc(inTime.value, outTime.value); // initial calculation
};
window.onload = dataSet;

// when user changes time, recalculate
const inTimeChange = () => {
    diffrence_calc(inTime.value, outTime.value);
};
const outTimeChange = () => {
    diffrence_calc(inTime.value, outTime.value);
};

function diffrence_calc(Intime, OutTime) {
    let [inRemoveAlpha] = Intime.split(" ");
    let [outRemoveAlpha] = OutTime.split(" ");

    let [ih, im] = inRemoveAlpha.split(':').map(Number);
    let [oh, om] = outRemoveAlpha.split(':').map(Number);

    // convert both times to total minutes from midnight
    let inTotal = ih * 60 + im;
    let outTotal = oh * 60 + om;

    // ✅ check if intime is greater than outtime
    if (inTotal > outTotal) {
        alert("Invalid: Out-time cannot be earlier than In-time!");
        console.clear();
        console.log("Invalid time selection!");
        return; // stop the function here
    }

    // ✅ otherwise calculate normally
    let diffMinutes = outTotal - inTotal;
    let hour_Diff = Math.floor(diffMinutes / 60);
    let min_Diff = diffMinutes % 60;

    // let displayHour = hour_Diff;
    // if (hour_Diff === 24) {
    //     displayHour = 12;
    // }

    console.clear();
    console.log(`Calculated (24h logic): ${hour_Diff} hours, ${min_Diff} minutes`);
    // console.log(`Displayed as: ${displayHour} hours, ${min_Diff} minutes`);
}

