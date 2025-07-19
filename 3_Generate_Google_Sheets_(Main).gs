/***************************************
 Program 3 Generate Google Sheets (Main)
***************************************/ 

function masterCreateKIReports() {  


  deleteTriggersWithName(FUNCTION_NAMES.programThreeCreateKIReport);
  createKIReports();
  
  
}


function createKIReports() {
  // This is becase the array starts at 0 and not 1, so if you just put in the first row of the 
  // google sheet where there is actual data, then you would be off by one, so this compensates 
  // for that fact. Set the "firstRowWithActualData" to the first row in the Roster Google Sheet 
  // that has actaul data, like the first missionaries's name
  const rosterFirstArrayRowWithActualData = ROSTER_FIRST_ROW_WITH_ACTUAL_DATA - 1; 
  const rosterHeaderRowArrayNumber = ROSTER_HEADER_ROW_NUMBER - 1;
  const kiOutputSheetHeaderRowNumber = 1;
  const kiOutputSheetHeaderArrayNumber = kiOutputSheetHeaderRowNumber - 1;
  const kiOutputSheetFirstRowWithActualData = 2;
  const kiOutputSheetFirstArrayRowWithActualData = kiOutputSheetFirstRowWithActualData - 1;


  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); 
  let rosterSheet = getSheetById(kiSystemGoogleSpreadsheet, ROSTER_SHEET_ID); //The one you downloaded from Imos then copyed and pasted into the "KI System Google Sheet"
  let kiFormOutputSheet = getSheetById(kiSystemGoogleSpreadsheet, KI_FORM_OUTPUT_SHEET_ID);
  let rosterSheetValues = rosterSheet.getDataRange().getValues();
  let kiFormOutputSheetValues = kiFormOutputSheet.getDataRange().getValues();
  


  //This section takes the roster sheet and turns all the missionaires into objects with these attributes
  let rosterHeaderRow = rosterSheetValues[rosterHeaderRowArrayNumber];
  let rosterHeaderPositions = getHeaderPositions(headerNames, rosterHeaderRow);
  let missionaryArray = buildMissionaryArray(rosterHeaderPositions, rosterSheetValues, rosterFirstArrayRowWithActualData);
   

  let kiFormOutputSheetHeaderRow = kiFormOutputSheetValues[kiOutputSheetHeaderArrayNumber];
  let kiFormOutputSheetHeaderPositionsObj = getHeaderPositions(questionsTextObj, kiFormOutputSheetHeaderRow)
  let fullQuestionResponseArray = buildObjArrayFromGoogleSheet(kiFormOutputSheetHeaderPositionsObj, kiFormOutputSheetValues, kiOutputSheetFirstArrayRowWithActualData)
  fullQuestionResponseArray = getSundayForKIs(fullQuestionResponseArray);
  fullQuestionResponseArray = getRidOfDuplicateResponses(fullQuestionResponseArray);
  let sixWeeksQuestionResponseArray = getSixWeeksQuestionResponseArray(fullQuestionResponseArray, kiFormOutputSheetHeaderPositionsObj);
  
  // getLatestresponseTime(fullQuestionResponseArray);
  checkRemoveSheetsCurrPositionsFromCache(fullQuestionResponseArray);

  missionHierarchy = createCheckHierarchyAndFolderStructure(missionaryArray);

  if (missionHierarchy == false) {return false} // This Fully Terminates The Program If The Time Runs Out

  missionHierarchy = insertKIsIntoMissionHierarchy(sixWeeksQuestionResponseArray, missionHierarchy);

  let currPositions = timeUnlockedGenerateGoogleSheets(missionHierarchy);

  if (currPositions == false) {return false} // This Fully Terminates The Program If The Time Runs Out

  fullMultiLevelTimerStart = currPositions.overallTimeStart;

  if(currPositions.completed) {
    Logger.log("Full Program Compleated, Reports Are All Up To Date! Compleated In " + roundToDecimalPlace((Date.now() - fullMultiLevelTimerStart) / 1000 / 60) + " Minuites");
    removeSheetsCurrPositionsFromCache();
  }
}








