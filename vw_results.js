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
   var totalVotes = 0;

   // Calculate total votes cast in current race
   votes[i].forEach(calcSum);
   
   // Add HTML text to value of reportHTML variable to write name of current race in program loop
   reportHTML += "<table><caption>" + race[i] + "</caption>\
   <tr><th>Candidate</th><th>Votes</th></tr>"; 

   // Call candidateRows() function to add returned value to value of reportHTML variable
   reportHTML += candidateRows(i, totalVotes);
   
   // Add the text "</table>" to value of reportHTML variable
   reportHTML += "</table>";
   
}

/* Write value of reportHTML variable into innerHTML of first and only section element */
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

/* candidateRows() function */
function candidateRows(raceNum, totalVotes) {
   
   // Variable containing HTML code for the table row
   var rowHTML = "";
   
   // Loop counter variable from 0 to 2
   for (var j = 0; j <= 2; j++) {
      
      // Variable that retrieves name of current candidate
      var candidateName = candidate[raceNum][j];
      
      // Variable that retrieves party affiliation of current candidate 
      var candidateParty = party[raceNum][j];
      
      // Variable that retrieves votes cast for current candidate
      var candidateVotes = votes[raceNum][j];
      
      // Variable that calculates percentage of votes received by current candidate
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      
      // Add HTML code to value of rowHTML variable 
      rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")" + "</td>\
      <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")" + "</td>";

      // Return value of rowHTML variable
      return rowHTML;

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

