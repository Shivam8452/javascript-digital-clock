console.log('clock project')

function updateClock(){
    // create a new date constructor
    let currentTime = new Date();

    // getting latest time
    let currentHour = currentTime.getHours();
    let currentMinut = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let currentDay = currentTime.getDay();

    // Pad a 0 if minut/seconds are less than 10
    currentMinut = (currentMinut < 10 ?"0":"") + currentMinut
    currentSecond = (currentSecond < 10 ?"0":"") + currentSecond

    //  choose Am/PM as per the day
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    
    // setting day
    if(currentDay == 0){
        currentDay = "SUN"
    }else if(currentDay == 1){
        currentDay = "MON"
    }
    else if(currentDay == 2){
        currentDay = "TUE"
    }
    else if(currentDay == 3){
        currentDay = "WED"
    }
    else if(currentDay == 4){
        currentDay = "THUR"
    }
    else if(currentDay == 5){
        currentDay = "FRI"
    }
    else if(currentDay == 6){
        currentDay = "SAT"
    }

    // Converting railway clock to AM/PM clock
    currentHour = (currentHour>12)? currentHour -12 : currentHour;
    currentHour = (currentHour ==00)? 12 : currentHour;
    currentHour = (currentHour < 10 ?"0":"") + currentHour


    // Prepare the time
    let currentTimeStr = currentHour + ":" + currentMinut + ":" + currentSecond + " " + timeOfDay

    document.getElementById("clock").innerHTML = currentTimeStr
    document.getElementById('day').innerHTML = currentDay
}