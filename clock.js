                  
let weekEl = document.querySelector(".date")
let dateEl = document.querySelector(".date2")
let hourEl = document.getElementById("hour")
let minuteEl = document.getElementById("minute")
let secondEl = document.getElementById("second")
let ampmEl = document.getElementById("ampm")
let ampm = "am"

function dayDate(){
    let nD = new Date()

/* 
    Day and Date 
                    */

    let week = nD.getDay()
    let day = nD.getDate()
    let months = nD.getMonth()
    let year = nD.getFullYear()

    console.log(year)

    let weekArr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let monthArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    
    if(day<10){
        day = "0" + day
    }


    weekEl.innerHTML = weekArr[week]
    dateEl.innerHTML = day + " " + monthArr[months] + ", " + year


    /*
        digital clock
                         */
                        
    let hour = nD.getHours()
    let minute = nD.getMinutes()
    let second = nD.getSeconds()

    if(hour>12){
        hour = hour-12
        ampm = "pm"
    }
    if(hour <10){
        hour = "0" + hour
    }
    if(minute <10){
        minute = "0" + minute
    }
    if(second <10){
        second = "0" + second
    }

    hourEl.textContent = hour
    minuteEl.textContent = minute
    secondEl.textContent = second
    ampmEl.innerHTML = ampm
}

setInterval(dayDate, 100)