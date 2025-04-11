// Traffic light system
// Write a program that takes Red, Yellow, or Green as input and prints what a driver should do.

let trafficLight = "Green";

switch (trafficLight){
    case "Red":
        console.log("Stop")
        break
    case "Yellow":
        console.log("Wait")
    case "Green":
        console.log("Go")
        break
    default:
        console.log("Enter a valid color")
    
}