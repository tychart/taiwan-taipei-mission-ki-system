/******************************************************
 Program 2 Put Google Form Responses Into Google Sheets
******************************************************/ 

//This is the function the trigger connected to the Google Form will run
function masterWriteGoogleSheetOnFormSubmit(e) { 

  let scriptLock = LockService.getScriptLock();

  scriptLock.tryLock(1000 * 60);

  if(scriptLock.hasLock()) {

    writeGoogleSheetOnFormSubmit(e);
    scriptLock.releaseLock();

    setUpProgramThreeOneTimeTrigger();

  }
}

function writeGoogleSheetOnFormSubmit(e) { //This method and code is suposed to write to the Path for the "KI Google Form Output' sheet in the "KI System Google Spreadsheet" spreadsheet

  let startTime = new Date().getTime();

  let headerRowPos = 1; //If you for some reason need to change the position of the header row on the google sheet, here is the value to adjust
 
  let headerTextArray = getHeaderTextArray(KI_GOOGLE_FORM_OUTPUT_HEADER_ARRAY);

  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); //The one you downloaded from Imos then copyed and pasted into the "KI System Google Sheet"
  let kiFormOutputSheet = getSheetById(kiSystemGoogleSpreadsheet, KI_FORM_OUTPUT_SHEET_ID);
  let lastFormResponse;

  // This will pull the information from the respnse that made the trigger go off (e)
  // If for some reason "e" does'nt contain any data, then it will just pull the 
  // last response submitted in the KI Submission Google Form
  if(e != null) {
    lastFormResponse = e.response;
  } else {
    let form = FormApp.openById(KI_SUBMISSION_GOOGLE_FORM_ID);
    let formResponses = form.getResponses();
    lastFormResponse = formResponses[formResponses.length - 1]; 
  }

  let itemResponses = lastFormResponse.getItemResponses();
  let currRow = kiFormOutputSheet.getLastRow() + 1;

  if(currRow < 2) { currRow++; }

  let currentDateTime = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss");

  let responseObjectArray = [{title: questionsTextObj.timestamp, response: currentDateTime}]; // Adds the timestamp to the array



  for(let i = 0; i < itemResponses.length; i++) {
    
    responseObjectArray.push({
      title: itemResponses[i].getItem().getTitle(),
      response: itemResponses[i].getResponse()
    })
  
  }


  Logger.log(writeHeaderRowOnSheet(kiFormOutputSheet, headerTextArray, headerRowPos));

  Logger.log(writeResponseRowOnSheet(kiFormOutputSheet, responseObjectArray, headerTextArray, currRow));


  Logger.log("Time (milisecconds): " + (new Date().getTime() - startTime));
}  



function getHeaderTextArray(inputArray) {


  let outputArray = [];

  for(let i = 0; i < inputArray.length; i++) {

    if(isInRepeatForBaptismalCandidates(inputArray[i])) {
      for(let j = 0; j < PAGES_BAPTISMAL_COUNT; j++) { 
        
        outputArray.push(questionsTextObj[inputArray[i]] + " " + (j + 1));
      
      }
    } else {

      outputArray.push(questionsTextObj[inputArray[i]]);

    }

  }

  return outputArray;
}

function writeHeaderRowOnSheet(inputSheet, headerTextArray, headerRowPos) {

  // This is to turn this into a 2D array that can then be written directly to the google 
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every itteration, 
  // which would be much slower
  let toWrite = [];
  toWrite[0] = []; 

  for(let i = 0; i < headerTextArray.length; i++) {
    toWrite[0][i] = headerTextArray[i];
  }
  
  inputSheet.getRange(headerRowPos, 1, toWrite.length, toWrite[0].length).setValues(toWrite);

  return toWrite[0]; //Returns just the inner array, so the output is 1 dimentional, not 2 dimentional
}


function isInRepeatForBaptismalCandidates(inputText) {

  for(let i = 0; i < baptismalCandidateQuestionsTextArr.length; i++) {
    if(baptismalCandidateQuestionsTextArr[i] == inputText) {
      return true;
    }
  }
  return false;
}


function writeResponseRowOnSheet(inputSheet, responseObjectArray, headerTextArray, rowOnSheetToWrite) {

  // This is to turn this into a 2D array that can then be written directly to the google 
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every itteration, 
  // which would be much slower
  let toWrite = [];
  toWrite[0] = []; 

  for(let i = 0; i < headerTextArray.length; i++) {
    for(let j = 0; j < responseObjectArray.length; j++) {
      if(headerTextArray[i] == responseObjectArray[j].title) {
        toWrite[0][i] = responseObjectArray[j].response;
      }
    }
  }
  
  inputSheet.getRange(rowOnSheetToWrite, 1, toWrite.length, toWrite[0].length).setValues(toWrite);

  return toWrite[0]; //Returns just the inner array, so the output is 1 dimentional, not 2 dimentional
}


function isInRepeatForBaptismalCandidates(inputText) {

  for(let i = 0; i < baptismalCandidateQuestionsTextArr.length; i++) {
    if(baptismalCandidateQuestionsTextArr[i] == inputText) {
      return true;
    }
  }
  return false;
}


