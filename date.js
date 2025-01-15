// let a = Date()
// console.log(a)

// let a = new Date();
// console.log(a)
// console.log(a.getFullYear())
// console.log(a.getDay());
// console.log(a.getDate())


// let a = new Date();
// a.setFullYear(2025);
// a.setMonth(0)
// a.setDate(12)
// a.setHours(14)
// console.log(a)

// let a = new Date();
// console.log(a.toDateString())
// console.log(a.toTimeString())
// console.log(a.toLocaleString())


function alarmRing() {
    let printTime = new Date();
    let alarmTime = new Date();
    alarmTime.setHours(21);
    alarmTime.setMinutes(41);
    alarmTime.setSeconds(0)
    let TimeDiff = alarmTime - printTime;
    setTimeout(alarmRing => {
        // let alarmsong = document.getElementById("song")
        // alarmsong.play()
        alert("your alarm is ringing")

    }, 10000)
    console.log("your alarm will ring at 21:27")
}
alarmRing()



// MATH Function()
// 1.math round()
let a = 6.6
console.log(Math.round(a))

// 2.math.ceil()
let b = 12.68;
console.log(Math.ceil(b))

// 3.math.floor()
let c = -123.345
console.log(Math.floor(c))

// 4.math.sqrt()
const a1 = 144
console.log(Math.sqrt(a1))

// 5.math.pow()
let a2 = 12
console.log(Math.pow(a2, 3))

// Math.min() & Math.max()
console.log(Math.min(1, 2, 3, 0, -0))
console.log(Math.max(1, 2, 3, 0, -0, 6))


// Math.random()
console.log(Math.random() * 10)