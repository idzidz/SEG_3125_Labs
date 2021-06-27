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

var unavailableDates = [];
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

function clearDateAndTime(){
    document.getElementById("availDates").value = "";
    document.getElementById("availTimes").value = "";
}

function clearTime(){
    document.getElementById("availTimes").value = "";
}

function getMinTime(){
    var currentDate = document.getElementById("availDates").value;
    var testing;
    if (currentDate != null && currentDate != ''){
        var tmp = new Date(currentDate);
        testing = tmp.getDay();
    }
    
    return '9';
}

function getMaxTime(){
    return '4:00pm'   
}

function showPayment(){
    var radioY = document.getElementById("paymentOption01");
    var radioN = document.getElementById("paymentOption02");
    var ourPaymentDiv = document.getElementById("PaymentInfo");

    if (radioY.checked){
        ourPaymentDiv.style.display = "block";
    }else{
        ourPaymentDiv.style.display = "none";
    }
}

function validateInput(given, len){
    var userInput = document.getElementById(given).value;
    var removedWhitespace = userInput.replace(/\s/g, '');
    var filter = /^\d+$/;
    if (removedWhitespace.length != len){return false;}
    if (filter.test(removedWhitespace)){return true;}
    return false;
}

function validateExp(given){
    var userInput = document.getElementById(given).value;
    var removedWhitespace = userInput.replace(/\s/g, '');
    var filter = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (removedWhitespace.length != 5){return false;}
    if (filter.test(removedWhitespace)){return true;}
    return false;
}

// function validateCCNumber(ccNumber){
//     var userInput = document.getElementById(ccNumber).value;
//     var removedWhitespace = userInput.replace(/\s/g, '');
//     var filter = /^\d+$/;
//     if (removedWhitespace.length != 10){return false;}
//     if (filter.test(removedWhitespace)){return true;}
//     return false;
// }

// function validateExNumber(ccExp){
//     var userInput = document.getElementById(ccExp).value;
//     var removedWhitespace = userInput.replace(/\s/g, '');
//     var filter = /^\d+$/;
//     if (removedWhitespace.length != 10){return false;}
//     if (filter.test(removedWhitespace)){return true;}
//     return false;
// }

// function validateCvvNumber(ccCVV){
//     var userInput = document.getElementById(ccCVV).value;
//     var removedWhitespace = userInput.replace(/\s/g, '');
//     var filter = /^\d+$/;
//     if (removedWhitespace.length != 10){return false;}
//     if (filter.test(removedWhitespace)){return true;}
//     return false;
// }

function getTheVal(input){
    var tmp = document.getElementById(input).value
    return tmp.replace(/\s/g, '');
}

function submission(){
    return alert("Thank you for scheduling an appointment with us, we hope to see you soon! \n(Would ideally do an extra check of all input fields here and give customized confirmation)");
}

function availHref(){
    var isScheduleExpanded = document.getElementById("AptButton").ariaExpanded;
    var isPaymentExpanded = document.getElementById("paymentOption01").checked;
    
    if(isScheduleExpanded == 'true' && isPaymentExpanded){
        return document.getElementById('PaymentInfo').scrollIntoView();
    }else{
        return document.getElementById('AppointmentButton').scrollIntoView();
    }

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

    $("#availTimes").timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: getMinTime(),
        maxTime: getMaxTime(),
        // defaultTime: '11',
        startTime: '09:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
    });    

    $("#InputTel").on("change", function(){
        if (!validateInput("InputTel", 10)){
            alert("Incorrectly entered phone number. \nPlease enter in format XXX XXX XXXX with only numbers. \nSpaces are optional.");
            $("#InputTel").val("");
            $("#InputTelLabel").next().hide();
            $("#InputTel").addClass("error");
        }
        else {
            $("#InputTel").val(getTheVal("InputTel"));
            $("#InputTelLabel").next().show();
            $("#InputTel").removeClass("error");
        }
    });

    $("#cc-number").on("change", function(){
        if (!validateInput("cc-number", 16)){
            alert("Incorrectly entered credit card number. \nPlease enter in format XXXX XXXX XXXX XXXX with only numbers.\nSpaces are optional.");
            $("#cc-number").val("");
            $("#cc-numberLabel").next().hide();
            $("#cc-number").addClass("error");
        }
        else {
            $("#cc-number").val(getTheVal("cc-number"));
            $("#cc-numberLabel").next().show();
            $("#cc-number").removeClass("error");
        }
    });

    $("#cc-expiration").on("change", function(){
        if (!validateExp("cc-expiration")){
            alert("Incorrectly entered credit card expiration date. \nPlease enter in format MM/YY, with the slash. \nSpaces are optional");
            $("#cc-expiration").val("");
            $("#cc-expirationLabel").next().hide();
            $("#cc-expiration").addClass("error");
        }
        else {
            $("#cc-expiration").val(getTheVal("cc-expiration"));
            $("#cc-expirationLabel").next().show();
            $("#cc-expiration").removeClass("error");
        }
    });

    $("#cc-cvv").on("change", function(){
        if (!validateInput("cc-cvv", 3)){
            alert("Incorrectly entered credit card CVV. \nPlease enter in format XXX, with only numbers. \nSpaces are optional.");
            $("#cc-cvv").val("");
            $("#cc-cvvLabel").next().hide();
            $("#cc-cvv").addClass("error");
        }
        else {
            $("#cc-cvv").val(getTheVal("cc-cvv"));
            $("#cc-cvvLabel").next().show();
            $("#cc-cvv").removeClass("error");
        }
    });

});