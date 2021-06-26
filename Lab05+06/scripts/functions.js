var employeeDaysOff = [
    {
        name: "Rachel",
        Monday: true,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: true,
        Sunday: true
    },
    {
        name: "Jure",
        Monday: true,
        Tuesday: false,
        Wednesday: true,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: true
    },
    {
        name: "Stephen",
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: true
    },
    {
        name: "NA",
        Monday: true,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: true
    }
];

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "yy/mm/dd";

function disableDates(date) {
    var employeeRadio = document.getElementsByName("services");
    var chosenEmployee;
    var foundIndex;

    for (i=0; i<4; i++){
        if (employeeRadio[i].checked){
            chosenEmployee = employeeRadio[i].value;
        }
    }

    for (i=0; i<4; i++){
        if (employeeDaysOff[i].name == chosenEmployee){
            foundIndex = i;
        }
    }

    // var currentDay = date.getDay();

    // var string = jQuery.datepicker.formatDate(setDateFormat, date);
    // //return [ unavailableDates.indexOf(string) === -1 ]

    // switch (currentDay)
    // {
    //     case 0:
    //         if (employeeDaysOff[foundIndex].Sunday){
    //             return [false];
    //         }
    //         return true;
    //     case 1:
    //         if (employeeDaysOff[foundIndex].Monday){
    //             return false;
    //         }
    //         return true;
    //     case 2:
    //         if (employeeDaysOff[foundIndex].Tuesday){
    //             return false;
    //         }
    //         return true;
    //     case 3:
    //         if (employeeDaysOff[foundIndex].Wednesday){
    //             return false;
    //         }
    //         return true;
    //     case 4:
    //         if (employeeDaysOff[foundIndex].Thursday){
    //             return false;
    //         }
    //         return true;
    //     case 5:
    //         if (employeeDaysOff[foundIndex].Friday){
    //             return false;
    //         }
    //         return true;
    //     case 6:
    //         if (employeeDaysOff[foundIndex].Saturday){
    //             return false;
    //         }
    //         return true;
    //     } 
    if (date.getDay() === 0 && employeeDaysOff[foundIndex].Sunday)
        return [false];
    if (date.getDay() === 1 && employeeDaysOff[foundIndex].Monday)
        return [false];
    if (date.getDay() === 2 && employeeDaysOff[foundIndex].Tuesday)
        return [false];
    if (date.getDay() === 3 && employeeDaysOff[foundIndex].Wednesday)
        return [false];
    if (date.getDay() === 4 && employeeDaysOff[foundIndex].Thursday)
        return [false];
    if (date.getDay() === 5 && employeeDaysOff[foundIndex].Friday)
        return [false];
    if (date.getDay() === 6 && employeeDaysOff[foundIndex].Saturday)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


$(document).ready(function(){
    $("#availDates").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: '+1D',
            maxDate: '+1Y',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );
    
});