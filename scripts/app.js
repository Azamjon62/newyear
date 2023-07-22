let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");


let day_dot = document.querySelector(".day_dot");
let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let endDate = "01/01/2024 00:00:00";
// date format mm/dd/yy


let x = setInterval(function() {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // time calculation for days, days, hours, minutes and seconds

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result in element with id

  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";

  // animate stroke

  dd.style.strokeDashoffset = 440 - (440 * d) / 31;
  // 365 days in on year

  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  // 24 hrs in a day

  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 minutes in on hours

  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  // 60 seconds in a minute

  // animate circle dots

  day_dot.style.transform = `rotateZ(${d * 12.2}deg)`;
  // 360deg / 31dys = 0.986

  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  // 360deg / 24hrs = 15

  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  // 360deg / 24minuts = 6

  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  // 360deg / 24secnds = 6

    // if the countdown is over, write some tetx

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("time").style.display = "none";
        document.querySelector(".newYear").style.display = "block";
    }
})
