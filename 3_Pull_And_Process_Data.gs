/*********************
 Pull And Process Data
*********************/ 

function getSheetById(kiSystemGoogleSpreadsheet, sheetID) {
 
  //Access all the sheets in the Google Sheets spreadsheet
  let allSheets = kiSystemGoogleSpreadsheet.getSheets();

  //Check all the sheets in the kiSystemGoogleSpreadsheet
  for(let i = 0; i < allSheets.length; i++){
    if (allSheets[i].getSheetId() == sheetID){
      Logger.log("Selected Sheet Based Off Of ID: " + allSheets[i].getName());
      return allSheets[i];
    }
  }

  Logger.log("Sheet ID: " + sheetID + " Not Found")
  return

}



function buildMissionaryArray(headerPositions, rosterSheetValues, firstArrayRowWithActualData) {
  let start = new Date();
  let missionaryArray = [];
  let missionary;
  for(let i = firstArrayRowWithActualData; i < rosterSheetValues.length; i++) {
    
    missionary = buildMissionary(headerPositions, rosterSheetValues[i]);

    // This is because the missionaries that are in other missions or are in quorentine that show up in the roster have blanks for 
    // 'area', 'district', or 'zone' attribute, which messess with the code, so they are filtered out at this point
    if(missionary.unit != "" || missionary.area != "" || missionary.district != "" || missionary.zone != "") { 
      missionaryArray.push(missionary);
    } else {Logger.log(missionary.fullName + " Didnt Make It (Because 'unit', 'area', 'district', or 'zone' attribute was blank)"); }
  }


  missionaryArray = fixUnitsForMissionaryArray(missionaryArray);

  // This output is toggelable in the settings section at the begining of the program
  if(showBuildMissionaryTime) {Logger.log("Finished Building The Missionary Array In " + (new Date() - start) / 1000 + " Seconds");}

  return missionaryArray;
}

function buildMissionary(headerPositions, rosterLine) {
  let missionaryAttributes = {};
  for (let [key, position] of Object.entries(headerPositions)) {
    missionaryAttributes[key] = rosterLine[position]; 
  }
  return missionaryAttributes;
}

// This takes a 2-D array and the list of colum numbers and compliles an array
// In this case, it is either being used to compile an array of missionaries from the roster, or 
// an array of answered questions from the "KI Form Output" Google Sheet
function buildObjArrayFromGoogleSheet(headerPositions, rosterSheetValues, firstArrayRowWithActualData) {
  let start = new Date();
  let objArray = [];
  let obj;
  for(let i = firstArrayRowWithActualData; i < rosterSheetValues.length; i++) {
    obj = compileObjects(headerPositions, rosterSheetValues[i]);
    objArray.push(obj)
  }

  // This output is toggelable in the settings section at the begining of the program
  if(showBuildObjArrayFromGoogleSheetTime) {Logger.log("Finished Pulling All KIs From The Google Sheet In " + (new Date() - start) / 1000 + " Seconds");}

  return objArray;
}


function getSundayForKIs(fullQuestionResponseArray) {

  for(let i = 0; i < fullQuestionResponseArray.length; i++) {
    
    fullQuestionResponseArray[i].kiWeek = getPreviousSunday(new Date(fullQuestionResponseArray[i].timestamp));
  
  }

  return fullQuestionResponseArray;
}


function getRidOfDuplicateResponses(fullQuestionResponseArray) {

  let start = new Date();
  let filteredFullQuestionResponseArray = [];
  let searchKeys = ["area", "unit", "kiWeek"]; //"kiWeek" means "sundayInWhichKeyIndicatorsWereReported"
  let tempPos;

  for(let i = 0; i < fullQuestionResponseArray.length; i++) {

    tempPos = findInObjectArray(filteredFullQuestionResponseArray, fullQuestionResponseArray[i], searchKeys);
    
    if(tempPos == -1) { // If this entry is not found in the filtered array
        
      filteredFullQuestionResponseArray.push(fullQuestionResponseArray[i]);

    } else if (new Date(fullQuestionResponseArray[i].timestamp) > new Date(filteredFullQuestionResponseArray[tempPos].timestamp)) {

      filteredFullQuestionResponseArray[tempPos] = fullQuestionResponseArray[i];

    }

  }

  if(showProcessQuestionresponseArrayTime) {Logger.log("Finished Processessing The Question response Array In " + (new Date() - start) / 1000 + " Seconds");}

  return filteredFullQuestionResponseArray;
}

function isInObjectArray(inputObjArr, searchKey, searchValue) {
  for(let i = 0; i < inputObjArr.length; i++) {

    for (let [key, value] of Object.entries(inputObjArr[i])) {

      if(key == searchKey && value == searchValue) {

        return true;
      }
    }
  }

  return false;
}

function findInObjectArray(inputObjArr, inputObjToSearch, searchKeys) {
  for(let i = 0; i < inputObjArr.length; i++) {

    if(testForKeys(inputObjArr[i], inputObjToSearch, searchKeys)) {

      return i;
    }
  }

  return -1;
}

function testForKeys(inputObj, inputObjToSearch, searchKeys) {

  for(let i = 0; i < searchKeys.length; i++) {
    if(!(String(inputObj[searchKeys[i]]) == String(inputObjToSearch[searchKeys[i]]))) {      
      
      return false;
    }
  }

  return true;
}

function getThisWeekQuestionResponseArray(fullQuestionResponseArray) {

let workingDate;
let thisWeekQuestionResponseArray = [];
  
  for(let i = 0; i < fullQuestionResponseArray.length; i++) {
    workingDate = new Date(fullQuestionResponseArray[i].timestamp);

    if(workingDate > mostRecentSunday) {
      thisWeekQuestionResponseArray.push(fullQuestionResponseArray[i])
    }
  }

  return thisWeekQuestionResponseArray;
}


function getSixWeeksQuestionResponseArray(fullQuestionResponseArray) {

  let workingDate;
  let sixWeeksQuestionResponseArray = [];
  let sundays = getSundaysArray(mostRecentSunday);

  for(let i = 0; i < NUMBER_OF_WEEKS_FOR_HISTORY; i++) {
    sixWeeksQuestionResponseArray.push(new Array());
  }

  // This portion sorts a response into the last 6 weeks
  for(let i = 0; i < fullQuestionResponseArray.length; i++) {
    workingDate = new Date(fullQuestionResponseArray[i].kiWeek);


    for(let j = 0; j < sundays.length; j++) {

      if(new Date(fullQuestionResponseArray[i].kiWeek).getTime() == new Date(sundays[j]).getTime()) {

        sixWeeksQuestionResponseArray[j].push(fullQuestionResponseArray[i]);

        
      }
    }
    

  }

  return sixWeeksQuestionResponseArray;
}


// Starts from "startingSunday" and goes backward
function getSundaysArray(startingSunday) {

  let sundays = [startingSunday];
  let tempDate = new Date(mostRecentSunday.getTime());


  // Get the last 6 sundays in an array
  for(let i = 0; i < NUMBER_OF_WEEKS_FOR_HISTORY - 1; i++) {
    sundays.push(new Date(tempDate.setDate(tempDate.getDate() - 7))); 
  }

  return sundays;
}

function getLatestResponseTime(fullQuestionResponseArray) {
  
  let latestTimestamp = 0;

  for(let i = 0; i < fullQuestionResponseArray.length; i++) {
    
    if(latestTimestamp < fullQuestionResponseArray[i].timestamp) {
      latestTimestamp = fullQuestionResponseArray[i].timestamp
    }
  }
  return latestTimestamp;
}

function compileObjects(headerPositions, sheetRow) {
  let objects = {};
  for (let [key, position] of Object.entries(headerPositions)) {
    objects[key] = sheetRow[position]; 
  }
  return objects;
}


function getAllOfAnAspect(missionaryArray, aspectStr) {
  let tempAspectList = [];
  for(let i = 0; i < missionaryArray.length; i++) {
      if(!tempAspectList.includes(missionaryArray[i][aspectStr])) {
        tempAspectList.push(missionaryArray[i][aspectStr]);
    }
  }
  return tempAspectList.sort();
}

function getHeaderPositions(headerNames, headerRow){
  let headerPositions = {};
  let matchTest;
  for (let [key, value] of Object.entries(headerNames)) {
    matchTest = arrayMatch(value, headerRow)
    if(matchTest >= 0){
      headerPositions[key] = matchTest; 
      //Logger.log("Found: " + value)
    } else {Logger.log("Didnt Find: '" + value + "' On The 'KI Google Form Output' Sheet Header Row");}
  }
  return headerPositions;
}

function arrayMatch(inputString, headerRow) {
  for(let i = 0; i < headerRow.length; i++) {
    if(headerRow[i] == inputString) {
      return i;
    }
  }
  return -1;
}

//Enable these logs if having a problem with the "missionaryArray"
function fixUnitsForMissionaryArray(missionaryArray) {
  let tempUnits = [];

  for(let i = 0; i < missionaryArray.length; i++) {
    tempUnits = missionaryArray[i].unit.split(", ");
    
    // Logger.log("This Missionary: " + missionaryArray[i].fullName);
    

    missionaryArray[i].unit = [];
    for(let j = 0; j < tempUnits.length; j++) {
//      Logger.log("Covers This Unit: " + tempUnits[j]);
      missionaryArray[i].unit.push(tempUnits[j]);
    }
    
    
    for(let j = 0; j < missionaryArray[i].unit.length; j++) {
//      Logger.log("Just Wrote This Unit: " + missionaryArray[i].unit[j]);
    }
    
  }

  return missionaryArray;
}


// Having to do with the text stuff

function addAllBaptismalPagesQuestionsToQuestionsTextObj(baptismalCandidateQuestionsTextArr, desiredBaptimalPagesCount, questionsTextObj) {
  for (let i = 0; i < baptismalCandidateQuestionsTextArr.length; i++) {
    addABaptismalPageQuestionToQuestionsTextObj(baptismalCandidateQuestionsTextArr[i], desiredBaptimalPagesCount, questionsTextObj)
  }
}

// An example to run this function manualy would be
// addBaptismalPagesQuestionsToQuestionsTextObj("baptismalCandidateName", "Name", desiredBaptimalPagesCount, questionsTextObj)
function addABaptismalPageQuestionToQuestionsTextObj(questionKeyStr, desiredBaptimalPagesCount, questionsTextObj) {
  let newKeyName;
  let newName;

  for(let i = 0; i < desiredBaptimalPagesCount; i++) {
    newKeyName = questionKeyStr + (i + 1); //Adds 1 onto the key name in the "questionsText" object, for example "questionText" becoems "questionText1"
    newName = questionsTextObj[questionKeyStr] + " " + (i + 1); //Adds a 1 onto the end of the normal string for example "Finding Source" becomes "Finding Source 1"
    questionsTextObj[newKeyName] = newName;
  }
  return questionsTextObj;
}



/*
This function was compiled using this answer from Andrew Shepherd
https://stackoverflow.com/a/12791539
*/
function getPreviousSunday(now = new Date()) {

  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

  return lastSunday;
}


function roundToDecimalPlace(num, decimalPlaces = 2) {
  let power = Math.pow(10, decimalPlaces);
  return Math.round(num * power) / power;
}





/*
* This was much harder to find than you would think, 
* but eventually I found what should be a full-proof 
* way of getting the date without any wierd timezone stuff
* Code Source: https://stackoverflow.com/a/37399351
* 
* This is in here just in case, there was a time zone issue earlier, and this fixed it
* If you have the exact same problem, it is fixed by going to "Project Settings" on the sidepanel
* (the same place you see Overview, Editor, Triggers, Exicutions, and Project Settings), and in
* there is a way to change the project timezone, do so to whichever timezone is applicible
*/
function getDateWithUTCOffset(inputTzOffset){
    var now = new Date(); // get the current time

    var currentTzOffset = -now.getTimezoneOffset() / 60 // in hours, i.e. -4 in NY
    var deltaTzOffset = inputTzOffset - currentTzOffset; // timezone diff

    var nowTimestamp = now.getTime(); // get the number of milliseconds since unix epoch 
    var deltaTzOffsetMilli = deltaTzOffset * 1000 * 60 * 60; // convert hours to milliseconds (tzOffsetMilli*1000*60*60)
    var outputDate = new Date(nowTimestamp + deltaTzOffsetMilli) // your new Date object with the timezone offset applied.

    return outputDate;
}
