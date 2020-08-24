// ==UserScript==
// @name         DTX_HOLIDAY_DAYS
// @namespace    capgemini.com
// @version      1.0
// @updateURL    https://github.com/martin-armstrong/dtx-holiday-days/raw/master/DTX_HOLIDAY_DAYS.user.js
// @downloadURL  https://github.com/martin-armstrong/dtx-holiday-days/raw/master/DTX_HOLIDAY_DAYS.user.js
// @description  Show holiday entitlement in days rather than hours
// @author       martin.armstrong@capgemini.com
// @match        https://*/*/DTX.NET/*
// @match        https://*/DTX.NET/*
// @match        http://*/*/DTX.NET/*
// @match        http://*/DTX.NET/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let hoursInWorkingDay = 7.5;

    if(window.location.href.indexOf("MyHolidays.aspx")>-1) {
        console.log("Running DTX_HOLIDAY_DAYS..")
        let newRow = document.createElement("tr");
        let hoursInputs = document.querySelectorAll("table#Table1 > tbody > tr:last-child > td > input");
        for(var i=0; i<hoursInputs.length; i++) {
            let hours = Number(hoursInputs[i].value);
            let days = String((Math.round((hours / hoursInWorkingDay)*100))/100);
            let newTD = document.createElement("td");
            newTD.innerHTML = days + " days";
            newRow.appendChild(newTD);
        }
        document.getElementById("Table1").appendChild(newRow);
    }

})();