let checkInTime = document.getElementById("check_in_time");
let checkOutTime = document.getElementById("check_out_time");
let getInTime = moment().format('HH:mm');

const dataSet = () => {
    checkInTime.value = getInTime; // set current time
    checkOutTime.value = `16:00`;  // default out time
    diffrence_calc(checkInTime.value, checkOutTime.value); // initial calculation
};

window.onload = dataSet;

// when user changes time, recalculate
// const inTimeChange = () => {
//     diffrence_calc(checkInTime.value, checkOutTime.value);
// };
// const outTimeChange = () => {
//     diffrence_calc(checkInTime.value, checkOutTime.value);
// };

function calculateDiff() {
    diffrence_calc(checkInTime.value, checkOutTime.value);
}

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

    let timeDiff = document.querySelector("#time-diff");
    timeDiff.textContent = `Time Difference is ${hour_Diff} hours, ${min_Diff} minutes`;

    console.clear();
    // console.log(`Calculated (24h logic): ${hour_Diff} hours, ${min_Diff} minutes`);


}