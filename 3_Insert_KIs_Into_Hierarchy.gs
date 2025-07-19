/**************************
  Insert KIs Into Hierarchy
**************************/  

function insertKIsIntoMissionHierarchy(questionResponseFullArray, missionHierarchy) {
  let start = new Date();
  
  missionHierarchy = putAreaKIsIntoHierarchy(questionResponseFullArray, missionHierarchy);
  missionHierarchy = combineAllKIS(missionHierarchy);
  

  logHierarchyToGoogleDoc(missionHierarchy);
  

  // This output is toggelable in the settings section at the begining of the program
  if(showInsertKIsIntoHierarchyTime) {Logger.log("Finished Pushing KIs Into The Mission Hierarchy In " + (new Date() - start) / 1000 + " Seconds");}
  
  return missionHierarchy;
}


function putAreaKIsIntoHierarchy(questionResponseFullArray, missionHierarchy) {

  for(let weekNum = 0; weekNum < questionResponseFullArray.length; weekNum++) {
    missionHierarchy = putWeekAreaKIsIntoHierarchy(questionResponseFullArray[weekNum], missionHierarchy, weekNum);
  }

  return missionHierarchy;
}


function putWeekAreaKIsIntoHierarchy (questionResponseArray, missionHierarchy, weekNum) {
  for(let responsePos = 0; responsePos < questionResponseArray.length; responsePos++) {

    for(let i = 0; i < missionHierarchy.children.length; i++) { // Zone Level
      for(let j = 0; j < missionHierarchy.children[i].children.length; j++) { // District Level
        for(let k = 0; k < missionHierarchy.children[i].children[j].children.length; k++) { // Area Level
          for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].children.length; l++) { // Unit Level

            if(
              missionHierarchy.children[i].children[j].children[k].children[l].name === questionResponseArray[responsePos].unit &&
              missionHierarchy.children[i].children[j].children[k].name === questionResponseArray[responsePos].area
            ) {
              missionHierarchy.children[i].children[j].children[k].children[l].kis[weekNum] = questionResponseArray[responsePos];
            }

          } // Unit Level
        } // Area Level
      } // District Level
    } // Zone Level


  }
  return missionHierarchy;
}

function combineAllKIS(missionHierarchy) {
  
  for(let i = 0; i < NUMBER_OF_WEEKS_FOR_HISTORY; i++) {

    missionHierarchy = combineOneWeekKIS(missionHierarchy, i);

  }

  return missionHierarchy;
}


function combineOneWeekKIS(missionHierarchy, weekNum) {

  let tempUnitKIsArray = []; 
  let tempAreaKIsArray = [];
  let tempDistrictKIsArray = []; 
  let tempZoneKIsArray = [];
  let tempMergedKIObj = {};

  for(let i = 0; i < missionHierarchy.children.length; i++) { // Zone Level
      for(let j = 0; j < missionHierarchy.children[i].children.length; j++) { // District Level
        for(let k = 0; k < missionHierarchy.children[i].children[j].children.length; k++) { // Area Level
          for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].children.length; l++) { // Unit Level
            
            tempUnitKIsArray.push(missionHierarchy.children[i].children[j].children[k].children[l].kis[weekNum])
            
          } // Unit Level

        tempMergedKIObj = mergeLowerKIs(tempUnitKIsArray);
        missionHierarchy.children[i].children[j].children[k].kis[weekNum] = tempMergedKIObj;
        tempAreaKIsArray.push(tempMergedKIObj);
        tempUnitKIsArray = [];

        } // Area Level

      tempMergedKIObj = mergeLowerKIs(tempAreaKIsArray);
      missionHierarchy.children[i].children[j].kis[weekNum] = tempMergedKIObj;
      tempDistrictKIsArray.push(tempMergedKIObj);
      tempAreaKIsArray = [];

      } // District Level

    tempMergedKIObj = mergeLowerKIs(tempDistrictKIsArray);
    missionHierarchy.children[i].kis[weekNum] = tempMergedKIObj;
    tempZoneKIsArray.push(tempMergedKIObj);
    tempDistrictKIsArray = [];

    } // Zone Level

  tempMergedKIObj = mergeLowerKIs(tempZoneKIsArray);
  missionHierarchy.kis.push(tempMergedKIObj);
  tempZoneKIsArray = [];

  return missionHierarchy;
}





function mergeLowerKIs(inputKIsArray) {
  let tempKIObj = {};
  let tempKINum;
  
  inputKIsArray = filterInvalidValues(inputKIsArray);
  if(Object.keys(inputKIsArray) === 0) {return new Object();}
  
  for (const [key] of Object.entries(returnLargestObjectInTheArray(inputKIsArray))) {

    tempKIObj.key = 0;
    tempKINum = 0;

    for(let i = 0; i < inputKIsArray.length; i++) {

      if((typeof inputKIsArray[i][key]) === "number") {
        tempKINum = tempKINum + inputKIsArray[i][key];
      }

    }
    
    tempKIObj[key] = tempKINum;
  
  }

  return tempKIObj;
}


function filterInvalidValues(inputArray) {
  let tempArray = [];

  if(typeof inputArray === 'undefined' || typeof inputArray === 'null') {return new Object();}

  for(let i = 0; i < inputArray.length; i++) {
    if(!(typeof inputArray[i] === 'undefined' || typeof inputArray[i] === 'null')) {
      tempArray.push(inputArray[i]);
    }
  }

  return tempArray;
}

function returnPosOfLargestObjectInTheArray(inputArray) {
  let biggestObjectInArray = {};
  let biggestObjectInArrayPos = 0;


  for(let i = 0; i < inputArray.length; i++) {

    if (Object.keys(inputArray[i]).length > Object.keys(inputArray[biggestObjectInArrayPos]).length) {
      
      biggestObjectInArray = inputArray[i];
      biggestObjectInArrayPos = i;

    }
  }

  return biggestObjectInArrayPos ;
}

function returnLargestObjectInTheArray(inputArray) {
  let largestObjectInArray = {};
  let largestObjectInArrayPos = 0;


  for(let i = 0; i < inputArray.length; i++) {

    if(!(typeof inputArray[i] === 'undefined' || typeof inputArray[i] === 'null')) {
      if (Object.keys(inputArray[i]).length >= Object.keys(inputArray[largestObjectInArrayPos]).length) {
        
        largestObjectInArray = inputArray[i];
        largestObjectInArrayPos = i;
        
      }
    }
  }

  return largestObjectInArray;
}

function entryMatches(areaName, unitName, questionResponseArraySet) {

  let units = [];
  let areas = [];

  for(let i = 0; i < questionResponseArraySet.length; i++) {
    units.push(questionResponseArraySet[i].unit);
    areas.push(questionResponseArraySet[i].area);
  }

  if(units.length == 0 || areas.length == 0) {return false;}

  if(areas.includes(areaName) && units.includes(unitName)) {
    return true;
  }

  return false;
}

function displayKIArray(inputKIsArray) {
  tempKIsArray = [];
  for(let i = 0; i < inputKIsArray.length; i++) {
    tempKIsArray.push(displayKIsString(inputKIsArray[i]));
  }
  return tempKIsArray;
}

function displayKIsString(kiObj) {
  let tempStringArr = [];
  for (const [key, value] of Object.entries(kiObj)) {
    tempStringArr.push(" " + key + ": " + value);
  }
  return tempStringArr;
}

function logHierarchyToGoogleDoc(missionHierarchy) {
  logToGoogleDoc(JSON.stringify(missionHierarchy, "", 4));
}

function logToGoogleDoc(inputText) {
  if(enableLogToGoogleDoc) {
    try {
      DocumentApp.openById(OUTPUT_LOGS_DOC_ID).getBody().getParagraphs()[0].setText(inputText); 
    } catch (e) {
      Logger.log("Error: Unable to log to google doc. ID:" + OUTPUT_LOGS_DOC_ID + " is not valid. Please check OUTPUT_LOGS_DOC_ID in the 'Global Variables / Settings' file to make sure the id is valid");
      Logger.log(e);
    }
  }
}
