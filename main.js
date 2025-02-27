let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let Day = new Date();
    let hh = Day.getHours() * 30; // 30 degrees per hour (360 / 12)
    let mm = Day.getMinutes() * 6; // 6 degrees per minute (360 / 60)
    let ss = Day.getSeconds() * 6; // 6 degrees per second (360 / 60)

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`; // hour hand with minute offset
    mn.style.transform = `rotateZ(${mm}deg)`; // minute hand
    sc.style.transform = `rotateZ(${ss}deg)`; // second hand

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = Day.getHours();
    let m = Day.getMinutes();
    let s = Day.getSeconds();

    // تحديد AM/PM بناءً على الوقت
    let am = h >= 12 ? "PM" : "AM";

    // تحويل الوقت بصيغة 12 ساعة
    if (h > 12) {
        h = h - 12;
    }
    
    // إضافة صفر في حالة أن الأرقام أقل من 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // تحديث العناصر في HTML
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}, 1000);
