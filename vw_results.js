"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 2

   Author: Zack Zhao
   Date:   2022-10-30
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

/* Variable containing HTML text */
var reportHTML = "<h1>" + raceTitle + "</h1>";

/* Loop through contents of the race array */
for (var i = 0; i < race.length; i++) {
   
   // Variable storing total votes cast in each race
   var totalVotes = 0

   // Calculate total votes cast in current race
   votes[i].forEach(calcSum);
   
   // Add HTML text to value of reportHTML variable to write name of current race in program loop
   reportHTML += "<table><caption>" + race[i] + "</caption>\
   <tr><th>Candidate</th><the>Votes</th></tr>"; 

   // Call function to add returned value to value of reportHTML variable
   reportHTML += candidateRows(i, totalVotes);
   
   // Add the text "</table>" to value of reportHTML variable
   reportHTML += "</table>";
   
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

