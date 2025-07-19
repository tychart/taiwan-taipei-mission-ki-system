/*****************************************
 Program 1 Build The KI Report Google Form
*****************************************/ 

function createForm() {  
 
  const ROSTER_HEADER_ROW_NUMBER = 1; //This is the row in the Google Sheet that has the names for all the diffent stuff like "Name", "Possition", "Area", "District". This number is used in the code to figure out in which colum what data is stored 
  const ROSTER_FIRST_ROW_WITH_ACTUAL_DATA = 2; //Pretty much this is the first line on the roster google sheet that has actual missionary info on it. Change if needed, also, see next line if have problems of 'off by one'
  const rosterFirstArrayRowWithActualData = ROSTER_FIRST_ROW_WITH_ACTUAL_DATA - 1; //This is becase the array starts at 0 and not 1, so if you just put in the first row of the google sheet where there is actual data, then you would be off by one, so this compensates for that fact. Set the "firstRowWithActualData" to the first row in the Roster Google Sheet that has actaul data, like the first missionaries's name
  const rosterHeaderRowArrayNumber = ROSTER_HEADER_ROW_NUMBER - 1;
  const kiOutputSheetHeaderRowNumber = 1;
  const kiOutputSheetHeaderArrayNumber = kiOutputSheetHeaderRowNumber - 1;
  const kiOutputSheetFirstRowWithActualData = 2;
  const kiOutputSheetFirstArrayRowWithActualData = kiOutputSheetFirstRowWithActualData - 1;
  const alreadySubmittedFindingHoursTextTemp = questionsTextObj.alreadySubmittedFindingHoursText;


  let form = FormApp.openById(KI_SUBMISSION_GOOGLE_FORM_ID);
  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); 
  let rosterSheet = getSheetById(kiSystemGoogleSpreadsheet, ROSTER_SHEET_ID); //The one you downloaded from Imos then copyed and pasted into the "KI System Google Sheet"
  let rosterSheetValues = rosterSheet.getDataRange().getValues();
  const desiredBaptimalPagesCount = PAGES_BAPTISMAL_COUNT;
  
   






  //This section takes the roster sheet and turns all the missionaires into objects with these attributes
  let rosterHeaderRow = rosterSheetValues[rosterHeaderRowArrayNumber];
  let rosterHeaderPositions = getHeaderPositions(headerNames, rosterHeaderRow);
  let missionaryArray = buildMissionaryArray(rosterHeaderPositions, rosterSheetValues, rosterFirstArrayRowWithActualData);
  const allAreas = getAllAreas(missionaryArray);
  const allWards = getAllWards(missionaryArray);

  //Clears the form by taking all of the items and deleting them
  Logger.log("Deleteing all items in " + form.getTitle() + "...") //Simple report that all the values in the Google Form were deleted
 
  // logAllFormItems(form);
  deleteTheFreakinForm(form); //Delete all the items in the form, not the form itself

  Logger.log("Deleted all items in " + form.getTitle()) //Simple report that all the values in the Google Form were deleted


  //This part builds the KI Report Google Forms

  Logger.log("Get All Areas: " + allAreas)
  Logger.log("Get All Wards: " + allWards);

  form.addListItem()
    .setTitle("Area 區域")
    .setChoiceValues(allAreas)
    .setRequired(true)


  form.addListItem()
    .setTitle("Ward 支會")
    .setChoiceValues(allWards)
    .setRequired(true);

  form.addPageBreakItem();

// This is the place that names all the diffrent baptismal sections a little 
// diffrently from echother so that the other code can diferianciate between 
// diffrent baptismal canadates later on down the line
  Logger.log("Adding all bap questions to the text obj")
  addAllBaptismalPagesQuestionsToQuestionsTextObj(baptismalCandidateQuestionsTextArr, desiredBaptimalPagesCount, questionsTextObj); 
  Logger.log("Added all bap questions to the text obj")


  
  
  createBaptismalPages(desiredBaptimalPagesCount, questionsTextObj, form);

  Logger.log("Creating KI Questions")
  
    
  let textValidation = FormApp.createTextValidation()
                              .setHelpText('Input was not a number between 0 and 100.')
                              .requireNumberBetween(0, 100)
                              .build();


  form.addTextItem()
      .setTitle(questionsTextObj.thisWeekBaptisms)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.aFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.bFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.cFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.dFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.currentFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.bdFriendsAtSacramentMeeting)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.laAtSacramentMeeting)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.totalNMAtSM)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.bdFriends)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.newFriends)
      .setRequired(true)
      .setValidation(textValidation);
  
  let findingHoursOrNot = form.addMultipleChoiceItem()
  //.setTitle(questionsTextObj.alreadySubmittedFindingHoursText) // This would be the best practice, but I couldn't get it to work
  .setTitle(alreadySubmittedFindingHoursTextTemp) // So this is being used insead
  .setRequired(true);
  
  findingHoursOrNot.setChoices([
    findingHoursOrNot.createChoice(questionsTextObj.findingHoursOrNotNo, FormApp.PageNavigationType.CONTINUE),
    findingHoursOrNot.createChoice(questionsTextObj.findingHoursOrNotYes, FormApp.PageNavigationType.SUBMIT)
  ]);

  Logger.log("Creating Service Questions")

//ADD THE SERVICE QUESTIONS!

  let findingHoursPage = form.addPageBreakItem()
                             .setTitle("Weekly Finding Hours Report");

  form.addTextItem()
      .setTitle(questionsTextObj.servingFinding)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.familyHistoryFinding)
      .setRequired(true)
      .setValidation(textValidation);

  form.addTextItem()
      .setTitle(questionsTextObj.memberVisitingFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.socialMediaFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.streetContactingFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.contactingFormersFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.talentFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.wardActivityFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.pmfFinding)
      .setRequired(true)
      .setValidation(textValidation);
  
  form.addTextItem()
      .setTitle(questionsTextObj.gecgFinding)
      .setRequired(true)
      .setValidation(textValidation);


  Logger.log("Finished Building Google Form")

  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());
}


function getAllWards(missionaryArray) {
  let tempWardList = [];
  let wardsInAnArea;
  for(let i = 0; i < missionaryArray.length; i++) {
    wardsInAnArea = missionaryArray[i].unit; 
    for(let x = 0; x < wardsInAnArea.length; x++) {
      if(!tempWardList.includes(wardsInAnArea[x])) {
        tempWardList.push(wardsInAnArea[x]);
      }
    }
  }

  tempWardList = getRidOfDuplicatesInAnArray(tempWardList);

  return tempWardList.sort();
}


function getAllAreas(missionaryArray) {
  let tempAreaList = [];
  for(let i = 0; i < missionaryArray.length; i++) {
      if(!tempAreaList.includes(missionaryArray[i].area)) {
        tempAreaList.push(missionaryArray[i].area);
    }
  }

  tempAreaList = getRidOfDuplicatesInAnArray(tempAreaList);

  return tempAreaList.sort();
}

function getRidOfDuplicatesInAnArray(inputArray) {
  let outputArray = [];
  let tempStringToCompare = "";

  for(let i = 0; i < inputArray.length; i++) {

    tempStringToCompare = inputArray[i].trim();

    if(!outputArray.includes(tempStringToCompare) && tempStringToCompare != "") {
      outputArray.push(tempStringToCompare);
    } else { Logger.log("'" + tempStringToCompare + "' Was filtered as a duplicate");}

  }

  return outputArray.sort();
}

function createBaptismalPages(desiredBaptimalPagesCount, questionsTextObj, form) {
  Logger.log("Creating Baptisimal Report Section...")
  
  let baptismChoices = form.addMultipleChoiceItem();
  
  
  let baptismPages = [];
  let number = desiredBaptimalPagesCount; // For alligning the user experiance with the numbers bc the pages for the user count backwards
  for(let i = 0; i < desiredBaptimalPagesCount; i++) {
    baptismPages.push(createBaptismSection(form, questionsTextObj, number));
    number--;
  }

  Logger.log("Created Baptisimal Report Section")
  
  
  let indicatorPage = form.addPageBreakItem()
                          .setTitle("Weekly Key Indicators");
  
  baptismChoices.setTitle(questionsTextObj.thisWeekBaptisms);
  baptismChoices.setRequired(true);

  // I couldn't figure out how to make this an automated size, so it will be 10
  // Entries for baptismal forms unless you change the code here
  // For now, the value "desiredBaptimalPagesCount" has to match this code, which right now, is equal to 10
  baptismChoices.setChoices([
    baptismChoices.createChoice('0', indicatorPage),
    baptismChoices.createChoice('1', baptismPages[9]),
    baptismChoices.createChoice('2', baptismPages[8]),
    baptismChoices.createChoice('3', baptismPages[7]),
    baptismChoices.createChoice('4', baptismPages[6]),
    baptismChoices.createChoice('5', baptismPages[5]),
    baptismChoices.createChoice('6', baptismPages[4]),
    baptismChoices.createChoice('7', baptismPages[3]),
    baptismChoices.createChoice('8', baptismPages[2]),
    baptismChoices.createChoice('9', baptismPages[1]),
    baptismChoices.createChoice('10', baptismPages[0])
  ]);
    

}

function createBaptismSection(form, questionsTextObj, number) {
  let breakItem = form.addPageBreakItem()
    .setTitle("Baptism " + number);
  



  // This makes the "Name" question box with a 
  // number attached so it can be sperated out later on
  form.addTextItem()
    .setRequired(true)
    .setTitle(questionsTextObj.baptismalCandidateName + " " + number);
  
  // This makes the "Finding Source" question box with a 
  // number attached so it can be sperated out later on
  let sourceItem = form.addMultipleChoiceItem()
    .setRequired(true)
    .setTitle(questionsTextObj.baptismFindingSource + " " + number);

    
  
  sourceItem.setChoices([
    sourceItem.createChoice("1-Missionary Finding"),
    sourceItem.createChoice("2-Less-active Member Referral"),
    sourceItem.createChoice("3-Recent-Convert Referral"),
    sourceItem.createChoice("4-Active Member Referral"),
    sourceItem.createChoice("5-English Class"),
    sourceItem.createChoice("6-Temple Tours"),
    sourceItem.createChoice("7-Church Referrals")
  ]);
  
  return breakItem;
}

function createBaptismalChoices(baptismPages, desiredBaptimalPagesCount, baptismChoices) {
  let downI = desiredBaptimalPagesCount; //It's annother ittorator, but counts backwards
  let baptismaChoicesArr = [];
  for(let i = 0; i < desiredBaptimalPagesCount; i++) {
    baptismaChoicesArr.push(baptismChoices.createChoice((i + 1), baptismPages[downI]));
    downI--;
  }
  return baptismaChoicesArr;
}

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



// Copied From this page due to problems deleting all the items in the form:
// https://stackoverflow.com/questions/17330476/form-deleteitem-results-in-failed-to-edit-the-form-please-wait-and-try-again
function deleteTheFreakinForm(form){

  // First, remove list item choices. Then delete the list items.

  var listItems = form.getItems(FormApp.ItemType.LIST);
  let itemIndex = 0;

  if(listItems == undefined) {
    Logger.log("Becase listItems was undefined, its now 0")
    listItems = 0;
  }

  while(itemIndex < listItems.length){
    listItems[itemIndex].asListItem().setChoiceValues(['']);
    form.deleteItem(listItems[itemIndex]);
    itemIndex++;
  }

  // Second, remove the multiple choice item choices. 
  // Then delete the multiple choice items.

  var multipleChoiceItems = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  itemIndex=0;
  while(itemIndex < multipleChoiceItems.length){
    multipleChoiceItems[itemIndex].asMultipleChoiceItem().setChoiceValues(['']);
    form.deleteItem(multipleChoiceItems[itemIndex]);
    itemIndex++;
  }

  // Finally, delete the remaining form items.

  var items = form.getItems();
  itemIndex=0;
  while(itemIndex < items.length){
    form.deleteItem(items[itemIndex]);
    itemIndex++;
  }
}

function logAllFormItems(form) {
    Logger.log("form.getItems Length: " + form.getItems().length);

  for(let i = 0; i < form.getItems().length; i++) {
    Logger.log("Form Items Number " + i + " Title: " + form.getItems()[i].getTitle());
    Logger.log("Form Items Number " + i + " Type: " + form.getItems()[i].getType());
  }
}
