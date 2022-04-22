const date = new Date();
console.log(date);

var d = date.getDate();
console.log(d);

var y = date.getFullYear();
console.log(y);

var m = date.getMonth();
console.log(m);

function calendar() {
    var month = date.getMonth();
    const yyyy = date.getFullYear();
    date.setDate(1);

    const name_Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const day_Week = [0, 1, 2, 3, 4, 5, 6];
    var month_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const namesMonth = ["January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "Ddecember"];

    // last date of the current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    console.log(lastDay);
    // last date of the previous month
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // console.log(prevLastDay);
    // first date of the current month
    const firstDayIndex = date.getDay();
    // console.log(firstDayIndex);
    //last day of the week
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    // console.log(lastDayIndex);

    // to start from the first day of the week
    const newDays = 7 - lastDayIndex - 1;
    // console.log(newDays);


    const nameofmonth = document.querySelector(".content");
    for (var n = 0; n <= 11; n++) {
        if (month_number[n] === month) {
            nameofmonth.innerHTML = `<div>
                <h2>
                    ${namesMonth[month]}  ${yyyy} 
                </h2>
        
            <div>`
        }
    }

    //name of week days
    const nameofdays = document.querySelector(".names");
    let nod = "";
    for (var i = 0; i <= 6; i++) {
        nod += `<div> ${name_Days[i]} </div>`;
        // console.log(nod);
        nameofdays.innerHTML = nod;
    }

    // the current month and year
    var curr = namesMonth[m] + " " + y;
    console.log(curr);

    // the div inside the content div
    currMonth = nameofmonth.firstChild.innerText;
    console.log(currMonth);


    // if the user is on the current month of the current year display the date
    if (currMonth === curr) {
        var h3 = document.createElement('h3');
        h3.innerHTML = namesMonth[m] + " " + d + ", " + y;
        var div = nameofmonth.firstChild;
        div.appendChild(h3);
    }


    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="day prev-date"> ${prevLastDay - x + 1}</div>`
    }

    const displayDays = document.querySelector(".numbers");
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth) {
            days += `<div class="day">${i}</div>`;
            displayDays.innerHTML = days;
            // if the i === the current day and the user is on the current month and year
            // change the background color of the current day 
        } else if(i === d && currMonth === curr){
            days += `<div class="day current">${i}</div>`;
            displayDays.innerHTML = days;
        }else {
            days += `<div class="day">${i}</div>`;
            displayDays.innerHTML = days;
        }

    }

    for (let j = 1; j <= newDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
        displayDays.innerHTML = days;
    }
}

calendar();

const prev_btn = document.querySelector(".prevMonth");

prev_btn.addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1);
    calendar();
})

const next_btn = document.querySelector(".nextMonth");

next_btn.addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    calendar();
})