/*********************
  Beat The Time Limit
*********************/ 

/** 
 "Beat the Time Limit" is because of the restriction on Google Apps Script in which 1 script can
 only run for ~6 minuites at a time, due to this restriction, the code had to
 be configured so that every so often, it checks to see how much time it has been
 running, and when it gets to over the "MAX_TIME_LIMIT", then it saves it's place,
 sets a 1 time trigger for a short ammount of time later, then stops; just to be 
 started up again in a few secconds. Thereby keeping the program runtime under 6 minuites 
 This took a lot of thinking, and I (Elder Chartrand) might not have come up with
 the most elegent method, or absolutly fullproof, but my goal is for this code to
 work for at least 5 years, with very minimal matinance 
*/

function buildingTest() {
  masterCreateKIReports();
}


function createCheckHierarchyAndFolderStructure(missionaryArray) {
  if(checkIfCasheHasString(CACHE_NAMES.hierarchy) && !checkIfCasheHasString(CACHE_NAMES.foldersCurrPositions)) { 

    Logger.log("Folder Structure Found, Retreving From Cache");
    
    let missionHierarchyString = CacheService.getScriptCache().get(CACHE_NAMES.hierarchy);

    return buildMissionHierarchyFromString(missionHierarchyString);
  }

  let missionHierarchy = createHierarchy(missionaryArray);

  Logger.log("Building Folders...    (This Could Take A While)");
  let start = new Date();
  let tempObjOutput = timeUnlockedCreateFolderStructure(missionHierarchy);
  
  if(tempObjOutput == false) {return false;}
  
  missionHierarchy = tempObjOutput.missionHierarchy;
  let foldersCurrPositions = tempObjOutput.foldersCurrPositions;


  // This output is toggelable in the settings section at the begining of the program
  if(showCreateFolderStructureTime) {Logger.log("Folder Structure Built In " + roundToDecimalPlace((new Date().getTime() - foldersCurrPositions.prossessTimeStart) / 1000 /60) + " Minuites");}

  
  CacheService.getScriptCache().put(CACHE_NAMES.hierarchy, getMissionHierarchyAsString(missionHierarchy), 21600);

  return missionHierarchy;
}


function timeUnlockedCreateFolderStructure(missionHierarchy) {////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //check cache for foldersCurrPositions folder
  let foldersCurrPositionsCacheReturn = CacheService.getScriptCache().get(CACHE_NAMES.foldersCurrPositions);
  let missionHierarchyCacheReturn = CacheService.getScriptCache().get(CACHE_NAMES.hierarchy);
  let folderCurrPositions = {};
  const start = new Date();

  if(foldersCurrPositionsCacheReturn == null) {

    Logger.log("First Time, Here We Go!");

    foldersCurrPositions = getNewCurrentPositionsObj();

  } else {
    
    Logger.log("Picking Up Where We Left Off! Starting At: " + foldersCurrPositionsCacheReturn);
    foldersCurrPositions = JSON.parse(foldersCurrPositionsCacheReturn);
    
    if(missionHierarchyCacheReturn != null) { missionHierarchy = buildMissionHierarchyFromString(missionHierarchyCacheReturn); }

  }

  try {
    

    missionHierarchy = createFolderStructure(missionHierarchy, folderCurrPositions);
    
    removeFoldersCurrPositionsFromCache();
    
    return {missionHierarchy: missionHierarchy, foldersCurrPositions: foldersCurrPositions}
  
  } catch (e) {
    
    if(e != outOfTimeExceptionMessage) {
      throw e;
    }  

    Logger.log("Times Up! Minuites Taken For Folder Creation: " + roundToDecimalPlace((new Date() - start) / 1000 / 60));
    Logger.log("Total Program Minuites Taken So Far: " + roundToDecimalPlace((new Date() - new Date(foldersCurrPositions.overallTimeStart)) / 1000 / 60));
    Logger.log("Total Minuites Taken For Folder Creation So Far: " + roundToDecimalPlace((new Date() - new Date(foldersCurrPositions.prossessTimeStart)) / 1000 / 60));
    Logger.log("foldersCurrPositions: " + JSON.stringify(foldersCurrPositions));
    
    CacheService.getScriptCache().put(CACHE_NAMES.foldersCurrPositions, JSON.stringify(foldersCurrPositions));
    
    setUpProgramThreeOneTimeTrigger();
    
    return false;
    
  }

}

function timeUnlockedGenerateGoogleSheets(missionHierarchy) {
  
  //check cache for sheetsCurrPositions folder
  let sheetsCurrPositionsCacheReturn = CacheService.getScriptCache().get(CACHE_NAMES.sheetsCurrPositions);
  let sheetsCurrPositions = {};
  const start = new Date();

  if(sheetsCurrPositionsCacheReturn == null) {

    deleteTriggersWithName(FUNCTION_NAMES.programThreeCreateKIReport);

    Logger.log("First Time, Here We Go!");

    sheetsCurrPositions = getNewCurrentPositionsObj();

  // This is about what the Current Positions Object looks like 
    // sheetsCurrPositions = {
    //   zone: 0,
    //   district: 0,
    //   area: 0,
    //   unit: 0,
    //   overallTimeStart: currDate.getTime(),
    //   prossessTimeStart: new Date().getTime(),
    //   completed: false
    // }

  } else {
    
    Logger.log("Picking Up Where We Left Off! Starting At: " + sheetsCurrPositionsCacheReturn);
    sheetsCurrPositions = JSON.parse(sheetsCurrPositionsCacheReturn);

  }

  try {

    generateGoogleSheets(missionHierarchy, sheetsCurrPositions);

    removeSheetsCurrPositionsFromCache();

    return sheetsCurrPositions;
  
  } catch (e) {
    
    if(e != outOfTimeExceptionMessage) {
      throw e;
    }  

    Logger.log("Times Up! This Instance Minuites Taken For Sheet Creation: " + roundToDecimalPlace((new Date() - start) / 1000 / 60));
    Logger.log("Total Minuites Taken For Sheet Creation So Far: " + roundToDecimalPlace((new Date() - new Date(sheetsCurrPositions.prossessTimeStart)) / 1000 / 60));
    Logger.log("Total Program Minuites Taken So Far: " + roundToDecimalPlace((new Date() - new Date(sheetsCurrPositions.overallTimeStart)) / 1000 / 60));
    Logger.log("sheetsCurrPositions: " + JSON.stringify(sheetsCurrPositions));
    CacheService.getScriptCache().put(CACHE_NAMES.sheetsCurrPositions, JSON.stringify(sheetsCurrPositions));
    
    setUpProgramThreeOneTimeTrigger();

    return false;  
  }

}



function checkExitTime(missionHierarchy) {
 
  let timeAtCheckEnter = new Date().getTime() - programStartingMilliseconds;

  if(timeAtCheckEnter > MAX_TIME_LIMIT) {

    if(showBeatTheTimeLimitOutput) {
      Logger.log("Out Of Time! Current Time Is " + roundToDecimalPlace((timeAtCheckEnter) / 1000 / 60) + 
      " Minuites Out Of A Set Max Limit Of " + roundToDecimalPlace(MAX_TIME_LIMIT / 1000 / 60) + " Minuites");
    }
    
    if(missionHierarchy != null) {
      CacheService.getScriptCache().put(CACHE_NAMES.hierarchy, getMissionHierarchyAsString(missionHierarchy));
    }

    throw outOfTimeExceptionMessage;
  }
  
  if(showBeatTheTimeLimitOutput) {
    Logger.log("You're Good! Current Time Is " + roundToDecimalPlace((timeAtCheckEnter) / 1000 / 60) + 
    " Minuites Out Of A Set Max Limit Of " + roundToDecimalPlace(MAX_TIME_LIMIT / 1000 / 60) + " Minuites");
    }

  return;
}



function getMissionHierarchyAsString(missionHierarchy) {
  return JSON.stringify(pullOutFolderIDs(missionHierarchy));
}

function buildMissionHierarchyFromString(missionHierarchyString) {
  return convertFolderIDToFolder(JSON.parse(missionHierarchyString));
}



function pullOutFolderIDs(missionHierarchy) {

  let start = new Date();

  missionHierarchy.folderID = missionHierarchy.folder.getId();

  for(let i = 0; i < missionHierarchy.children.length; i++) { // Zone Loop

    if(missionHierarchy.children[i].folder != null) {
      missionHierarchy.children[i].folderID = missionHierarchy.children[i].folder.getId();
    }

    for(let j = 0; j < missionHierarchy.children[i].children.length; j++) { // District Loop

      if(missionHierarchy.children[i].children[j].folder != null) {
        missionHierarchy.children[i].children[j].folderID = missionHierarchy.children[i].children[j].folder.getId();
      }

      for(let k = 0; k < missionHierarchy.children[i].children[j].children.length; k++) { // Area Loop

        if(missionHierarchy.children[i].children[j].children[k].folder != null) {
          missionHierarchy.children[i].children[j].children[k].folderID = missionHierarchy.children[i].children[j].children[k].folder.getId();
        }

        for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].children.length; l++) { // Unit Loop
          
          if(missionHierarchy.children[i].children[j].children[k].children[l].folder != null) {
            missionHierarchy.children[i].children[j].children[k].children[l].folderID = missionHierarchy.children[i].children[j].children[k].children[l].folder.getId();
          }

        }
      }
    }
  }
  var end = new Date();
  Logger.log("Finished Pulling IDs From Their Folders In '" + (end - start) / 1000 + "' Seconds");
  return missionHierarchy;
}


function convertFolderIDToFolder(missionHierarchy) {
  var start = new Date();

  missionHierarchy.folder = DriveApp.getFolderById(missionHierarchy.folderID);

  for(let i = 0; i < missionHierarchy.children.length; i++) { // Zone Loop

    if(missionHierarchy.children[i].folderID != null) {
      missionHierarchy.children[i].folder = DriveApp.getFolderById(missionHierarchy.children[i].folderID);
    }

    for(let j = 0; j < missionHierarchy.children[i].children.length; j++) { // District Loop

      if(missionHierarchy.children[i].children[j].folderID != null) {
        missionHierarchy.children[i].children[j].folder = DriveApp.getFolderById(missionHierarchy.children[i].children[j].folderID);
      } 

      for(let k = 0; k < missionHierarchy.children[i].children[j].children.length; k++) { // Area Loop

        if(missionHierarchy.children[i].children[j].children[k].folderID != null) {
          missionHierarchy.children[i].children[j].children[k].folder = DriveApp.getFolderById(missionHierarchy.children[i].children[j].children[k].folderID);
        }

        for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].children.length; l++) { // Unit Loop
          
          if(missionHierarchy.children[i].children[j].children[k].children[l].folderID != null) {
            missionHierarchy.children[i].children[j].children[k].children[l].folder = DriveApp.getFolderById(missionHierarchy.children[i].children[j].children[k].children[l].folderID);
          }

        }
      }
    }
  }
  var end = new Date();
  Logger.log("Finished Pulling Folders From Their IDs In '" + (end - start) / 1000 + "' Seconds");
  return missionHierarchy;
}

// This checks the list of responses and sees if there are any responses after the google sheets have 
// already started to be generated from an earlier session. If there is, then it just deletes the
// save point, and starts all over again
function checkRemoveSheetsCurrPositionsFromCache(fullQuestionResponseArray) {
  if (checkIfCasheHasString(CACHE_NAMES.sheetsCurrPositions)) {
    let sheetsCurrPositions = CacheService.getScriptCache().get(CACHE_NAMES.sheetsCurrPositions);
    
    if (sheetsCurrPositions.overallTimeStart < getLatestResponseTime(fullQuestionResponseArray)) {
      removeSheetsCurrPositionsFromCache();
    }
  }
}


function getNewCurrentPositionsObj(){
  let currPositions = newCurrentPositionsObject
  currPositions.prossessTimeStart = new Date().getTime();
  return currPositions;
}


function checkIfCasheHasString(key) {
  let possibleValue = CacheService.getScriptCache().get(key);

  if(possibleValue === null) {
    return false;
  }

  return true;
}

