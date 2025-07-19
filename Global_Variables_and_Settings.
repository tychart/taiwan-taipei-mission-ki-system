/***************************
 Global Variables / Settings
***************************/ 

const KI_SYSTEM_GOOGLE_SPREADSHEET_ID = "1TGpfzhZqkRH9Fh7UGZ54IOaOWpgk6KlVLClZVRwo8bk";  //The one in the folder "Testing For Elder Chartrand's New KI System" called "KI System Google Spreadsheet"
const KI_SUBMISSION_GOOGLE_FORM_ID = "1MkU7wPyepYTv6XJxAKxOI5hgD5f4Iv0SokRnkDyl6a8" //The one in the folder "Testing For Elder Chartrand's New KI System" called "KI Submission Google Form"
const RUN_CODE_GOOGLE_FORM_ID = "12-MVhO6RxPukZ604bskftCGQx8q_t4BRvkqbQt6maYY" // The one to manualy run code in case something is not working
const ROSTER_SHEET_ID = "1007973787"; //The one you downloaded from Imos then copyed and pasted into the "KI System Google Sheet"
const KI_FORM_OUTPUT_SHEET_ID = "260669416" // Path for the "KI Google Form Output' sheet in the "KI System Google Spreadsheet" spreadsheet
const ARCHIVE_FOLDER_ID = "1yjUcBLDTzXXlRtTOa9dmoO_ggf1aIo1R" // The output folder for the KIs
const DistrictLeaderText = "DL";
const DistrictTrainerText = "DT";
const ZoneLeaderText = "ZL";
const APLeaderText = "AP";
const MISSION_NAME = "Taiwan Taipei Mission";
const MISSION_HIERARCHY_NAME = "missionHierarchy";
const SHEETS_CURRENT_POSITIONS_NAME = "sheetsCurrPositions";
const NUMBER_OF_WEEKS_FOR_HISTORY = 6;
const PAGES_BAPTISMAL_COUNT = 10;

const CACHE_NAMES = {
  hierarchy: "missionHierarchy",
  foldersCurrPositions: "foldersCurrPositions",
  sheetsCurrPositions: "sheetsCurrPositions",
  currentRunID: "currentRunID"
}

const FUNCTION_NAMES = {
  programThreeCreateKIReport: "masterCreateKIReports", // Function To Run "3 Generate Google Sheets" Program
  manualRunCodeThroughRunCodeGoogleForm: "runManualCodeGoogleFormTrigger",
  programTwoAndThreeMasterRunThroughMainGoogleForm: "masterWriteGoogleSheetOnFormSubmit" // Runs the "masterWriteGoogleSheetOnFormSubmit" program
}



// This is so that it will also send him the email every 
// week with the full mission KI Report (Same as the APs)
const PRESIDENT_IDENTITY_OBJECT = {
    fullName: "Yang, Shih Ning",
    lastName: "Yang",
    firstName: "Shi",
    middleName: "Ning",
    position: "President",
    personalEmail: "Yangshihning@churchofjesuschrist.org",
    unit: [
        "The Taiwan Taipei Mission"
    ],
    areaEmail: "steveshihning0502@gmail.com",
    area: "Office",
    district: "Office",
    zone: "Office",
    country: "Taiwan"
}

/**
 * Pull and Prossess Data Adjustment Values
 */
// This is the row in the Google Sheet that has the names for all the diffent stuff 
// like "Name", "Possition", "Area", "District". This number is used in the code to 
// figure out in which colum what data is stored 
const ROSTER_HEADER_ROW_NUMBER = 1; 
// Pretty much this is the first line on the roster google sheet that has actual 
// missionary info on it. Change if needed
const ROSTER_FIRST_ROW_WITH_ACTUAL_DATA = 2; 

// Google Spreadsheet Report Adjustment Values
const ROW_FOR_KIS_TO_START = 2;
const COLUMN_FOR_KIS_TO_START = 3


const BD_STANDERD_OF_EXCELLENCE = 4;
const NON_MEMBER_SM_STANDERD_OF_EXCELLENCE = 3;
const NF_STANDERD_OF_EXCELLENCE = 2;

// Standards Of Excelence
const SOE = [
  {name: "bdFriends", ammount: 4},
  {name: "totalNMAtSM", ammount: 3},
  {name: "newFriends", ammount: 2}
]

const RED = "#F4C7C3";
const GREEN = "#B7E1CD";
const YELLOW = "#FCE8B2";
const WHITE = "#FFFFFF"
const BLACK = "#000000"

const ZONE_HEADER_COLOR = "#999999";
const ZONE_TOTAL_COLOR = "#666666";
const DISTRICT_HEADER_COLOR = "#B3A6D5";
const DISTRICT_TOTAL_COLOR = "#8E7CC3";
const MISSION_TOTAL_COLOR = "#000000";

// KI History Chart On Google Sheets Adjustment Values
const KI_CHART_TITLE = "KI 6 Week History";
const HOURS_CHART_TITLE = "Finding Hours 6 Week History";

const SHOW_THESE_KIS_ON_LINE_CHART = ["thisWeekBaptisms", "bdFriends", "totalNMAtSM", "newFriends"];
const SHOW_THESE_HOURS_ON_LINE_CHART = [
  "servingFinding", 
  "familyHistoryFinding", 
  "memberVisitingFinding", 
  "socialMediaFinding", 
  "streetContactingFinding", 
  "talentFinding", 
  "wardActivityFinding", 
  "pmfFinding", 
  "gecgFinding"
];


const currDate = new Date();
const programStartingMilliseconds = currDate.getTime();
const currentDateTime = Utilities.formatDate(currDate, "GMT+8", "yyyy/MM/dd HH:mm:ss");
const currentDate = Utilities.formatDate(currDate, "GMT+8", "yyyy/MM/dd");
const currentMonthDay = Utilities.formatDate(currDate, "GMT+8", "MM/dd");
const mostRecentSunday = getPreviousSunday(currDate); // Including if today is Sunday
const currentWeekAsMonthDay = Utilities.formatDate(mostRecentSunday, "GMT+8", "MM/dd");
const kiWeekCurrentDate = Utilities.formatDate(mostRecentSunday, "GMT+8", "yyyy/MM/dd");
const currentYear = Utilities.formatDate(mostRecentSunday, "GMT+8", "yyyy");
const currentMonth = Utilities.formatDate(new Date(), "GMT+8", "MM");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let kiWeekCurrentMonth = months[mostRecentSunday.getMonth()];
let missionHierarchy = {};
const scriptCashe = CacheService.getScriptCache();


// Send Email Values
let subjectText = currentWeekAsMonthDay + " KI Report For: ";
let emailBodyText = "Here is your Key Indicator Report Google Drive Folder. \n" +
"Contact the office elders if you have any problems!\n\n";
let messageObj = {
  emailAddress: "",
  subjectText: subjectText,
  emailBodyText: emailBodyText,
  reportUrl: "",
  messageString: ""
};


/**
 * Debugging/Monitoring Toggle Values
 */
// Function Time Report Toggles
const showBuildMissionaryTime = true;
const showBuildObjArrayFromGoogleSheetTime = true;
const showProcessQuestionresponseArrayTime = true;
const showCreateMissionHierarchyTime = true;
const showCreateFolderStructureTime = true;
const showInsertKIsIntoHierarchyTime = true;
const showCreateGoogleSheetsTime = true;

const enableLogToGoogleDoc = false;

// Output Toggles
const showCreateFolderStructureOutput = true; // Show the folder creation progression output
const showCreateSheetsOutput = true; // Show the google spreadsheet creation progression output
const showBeatTheTimeLimitOutput = true; // Show the output for beat the time limit scripts

/** 
 * Warning toggles
 */
 const showWarningWhenWritingBlankLinesToKISheet = false;


/**
 * Beat The Time Limit Settings
 */
// Max time limit in millisecconds before stopping exicution and starting again
// This is because of the restriction on Google Apps Script in which 1 script can
// Only run for ~6 minuites at a time, due to this restriction, the code had to
// be configured so that every so often, it checks to see how much time it has been
// running, and when it gets to over the "MAX_TIME_LIMIT", then it saves it's place,
// sets a 1 time trigger for a short ammount of time later, then stops; just to be 
// started up again in a few secconds. Thereby keeping the program runtime under 6 minuites 
// This took a lot of thinking, and I (Elder Chartrand) might not have come up with
// the most elegent method, or absolutly fullproof, but my goal is for this code to
// work for at least 5 years, with very minimal matinance 
const MAX_TIME_LIMIT = 5 * 60 * 1000; 
const outOfTimeExceptionMessage = "Out Of Time!";


// Debugging Settings
OUTPUT_LOGS_DOC_ID = "18AIjFFIAFMYradhEjAGPPMfxyA_1gg1yhrNanfwczWI";
shareAndEmailFolders = false;

const newCurrentPositionsObject = {
  zone: 0,
  district: 0,
  area: 0,
  unit: 0,
  overallTimeStart: currDate.getTime(),
  prossessTimeStart: null, // This will be set by the method "getNewCurrentPositionsObj"
  completed: false
}

function clearCache(){
  for (let [key, value] of Object.entries(CACHE_NAMES)) {
    CacheService.getScriptCache().remove(value);
  }
}

// This was made for testing purposes
function removeMissionHierarchyFromCache() {
  CacheService.getScriptCache().remove(CACHE_NAMES.hierarchy);
}

function removeSheetsCurrPositionsFromCache() {
  CacheService.getScriptCache().remove(CACHE_NAMES.sheetsCurrPositions);
}

function removeFoldersCurrPositionsFromCache() {
  CacheService.getScriptCache().remove(CACHE_NAMES.foldersCurrPositions);
}





/*
  For these, set these to the "exact" name that appears on the roster Excel sheet. 
  These are used to search for the exact titles according to the "headerRowArrayNumber" variable 
  (order dosn't matter) 
  (If you don't know what this is, it's a javascript object, which is awesome, 
  and much better than what I was using before)
  Before continuing, I recomend to get a basic understanding of javascript objects and how they work
*/
const headerNames = {
  fullName: "Missionary Name",
  lastName: "Last Name",
  firstName: "First Name",
  middleName: "Middle Name",
  position: "Position",
  personalEmail: "Email",
  unit: "Unit",
  areaEmail: "Area Email",
  area: "Area",
  district: "District",
  zone: "Zone",
  country: "Country"
}


// These are matched to the headers of the "KI Google Form Output" Sheet in the 
// "KI System" Google Spreadsheet, the code will look for them, and each one it finds, 
// It will add that as an attribute in the Question response object inside the 
// Question Response array
const questionsTextObj = {
  timestamp: "Timestamp",
  area: "Area 區域",
  unit: "Ward 支會",
  baptismalCandidateName: "Name",
  baptismFindingSource: "Finding Source",
  thisWeekBaptisms: "How many baptisms did you have this week? 有幾個人接受了洗禮?",
  nextWeekBaptisms: "Next Week Baptisms",
  aFriends: "A Friends: 1: Has scheduled a baptismal interview. 2: Has attended Sacrament Meeting at least three times. Attending both hours at least twice. 3: Has been taught the remainder of lesson 4 and 5 and received all associated commitments. 4: Has given up all addictions and is obeying the commandments started in Baptismal Interview Questions. 1: 已安排了洗禮面談。 2:至少參加了三次聖餐聚會。 兩個小時的聚會至少參加兩次。 3: 已被教導剩下所有第4課的原則，和第5課並且被邀請所有的相關承諾。 4: 已經杜絕了所有成癮，並開始遵守洗禮面談問題中的每項誡命。",
  bFriends: "B Friends: 1: Has been taught the first 3 lessons and 7 of the 13 doctrinal points in lesson 4 and received all associated commitments 2: Has attended Sacrament Meetings at least twice. 3:Has set a baptismal date and has (if needed) parental/spouse consent to be baptized, preferably in writing. 4: Has met the Bishop and Relief Society or Elders Quorum President. 1: 至少參加了聖餐聚會兩次。 2: 已被教導前3課和第4課13個誡命原則的7個原則，並且被邀請所有的相關承諾。 3: 已經設立了洗禮的日期，並（如果需要的話）已獲得了父母/配偶的同意接受洗禮，最好是書面形式。 4: 這位朋友會見了主教和慈助會或長定組會長。",
  cFriends: "C Friends: 1: Has attended sacrament meetings at least once. 2: Has been taught lessons 1 and 2/3 and received all associated commitments. 1: 至少參加了一次聖餐聚會。 2: 已被教導兩個課程(L1)和(L2.3其中一課)，並被邀請所有的相關承諾。",
  dFriends: "D Friends: 1: The friend has been taught a lesson (At least one principle, one invite, and a prayer) and has set a follow-up appointment. 1: 該朋友已上了一堂課（至少一個原則，一個邀請和一同祈禱），並設立下一次約的時間。",
  currentFriends: "Current Number of Friends Being Taught (this should be the same as your A+B+C+D friends",
  bdFriendsAtSacramentMeeting: "Baptismal Date Friends at Sacrament Meeting",
  laAtSacramentMeeting: "Less Active Members at Sacrament Meeting",
  bdFriends: "Baptismal Date Friends 訂下洗禮日期的朋友",
  totalNMAtSM: "Total Non-members At Sacrament Meeting 出席聖餐聚會的朋友",
  newFriends: "New Friends 新朋友",
  alreadySubmittedFindingHoursText: "Did you already report the finding hours for this week ('No' means you enter them now, and 'Yes' means you skip reporting them right now)",
  findingHoursOrNotNo: "No, This Week I Have Not Already Reported 這個禮拜還沒匯報",
  findingHoursOrNotYes: "Yes，Already Reported This Week 這個禮拜已經回報了",
  servingFinding: "服務活動(小時) Service Finding Hours",
  familyHistoryFinding: "家譜尋找活動(小時) Family History Hours",
  memberVisitingFinding: "拜訪成員尋找活動(小時) Member Visiting Finding Hours",
  socialMediaFinding: "社群媒體尋找(小時) Social Media Finding Hours",
  streetContactingFinding: "路上接觸(小時) Street Contacting Hours",
  contactingFormersFinding: "聯繫從前的慕道友(小時) Contacting Formers Finding Hours",
  talentFinding: "才能尋找活動(小時) Talent Finding Hours",
  wardActivityFinding: "支會活動(小時) Ward Activity Finding Hours",
  pmfFinding: "部分成員家庭尋找(小時) PMF Finding Hours",
  gecgFinding: "英文小組尋找(小時) GECG Finding Hours"
}

// Header to the "KI Google Form Output"
const KI_GOOGLE_FORM_OUTPUT_HEADER_ARRAY = [
  "timestamp",
  "area",
  "unit",
  "baptismalCandidateName",
  "baptismFindingSource",
  "thisWeekBaptisms",
  "nextWeekBaptisms",
  "aFriends",
  "bFriends",
  "cFriends",
  "dFriends",
  "currentFriends",
  "bdFriendsAtSacramentMeeting",
  "laAtSacramentMeeting",
  "bdFriends",
  "totalNMAtSM",
  "newFriends",
  "servingFinding",
  "familyHistoryFinding",
  "memberVisitingFinding",
  "socialMediaFinding",
  "streetContactingFinding",
  "contactingFormersFinding",
  "talentFinding",
  "wardActivityFinding",
  "pmfFinding",
  "gecgFinding"
]


const baptismalCandidateQuestionsTextArr = [
  "baptismalCandidateName",
  "baptismFindingSource"
]


// This is formated in an array, not an object, because it is desired in this specific order
const KI_SHEET_HEADERS_TEXT_ARR = [
  {name: "thisWeekBaptisms", text:"Baptized and Confirmed 已接受洗禮和證實的朋友"},
  {name: "nextWeekBaptisms", text:"Next Week 下周"},
  {name: "aFriends", text: "A Friends"},
  {name: "bFriends", text: "B Friends"},
  {name: "cFriends", text: "C Friends"},
  {name: "dFriends", text: "D Friends"},
  {name: "currentFriends", text: "Total Current Friends"},
  {name: "bdFriendsAtSacramentMeeting", text: "BD Friends at Sacrament Meeting 有洗禮目標及出席聖餐聚會的朋友"},
  {name: "laAtSacramentMeeting", text: "Returning Members Back to Church 回友出席聖餐聚會"},
  {name: "bdFriends", text: "BD Friend"},
  {name: "totalNMAtSM", text: "Total Non-members At Sacrament Meeting 出席聖餐聚會的朋友"},
  {name: "newFriends", text: "New Friends 新朋友"}
]

// This is formated in an array, not an object, because it is desired in this specific order
const FINDING_HOURS_SHEET_HEADERS_TEXT_ARR = [
  {name: "servingFinding", text: "服務活動(小時) Service Finding Hours"},
  {name: "familyHistoryFinding", text: "家譜尋找活動(小時) Family History Hours"},
  {name: "memberVisitingFinding", text: "拜訪成員尋找活動(小時) Member Visiting Finding Hours"},
  {name: "socialMediaFinding", text: "社群媒體尋找(小時) Social Media Finding Hours"},
  {name: "streetContactingFinding", text: "路上接觸(小時) Street Contacting Hours"},
  {name: "contactingFormersFinding", text: "聯繫從前的慕道友(小時) Contacting Formers Finding Hours"},
  {name: "talentFinding", text: "才能尋找活動(小時) Talent Finding Hours"},
  {name: "wardActivityFinding", text: "支會活動(小時) Ward Activity Finding Hours"},
  {name: "pmfFinding", text: "部分成員家庭尋找(小時) PMF Finding Hours"},
  {name: "gecgFinding", text: "英文小組尋找(小時) GECG Finding Hours"}
]


let sheetFormatText = {
  kiHistoryHeader: "KI 6 Week History"
}




/**
 * Manual Code Run Google Form Settings
 */

// This is the function that is triggered by the "Run Code" Google Form
// It is designed to be able to run the code in this Google Apps Script
// file with a better UI than going in here and clicking on specific funcitons
// and running them. A Google Form also seemed like the only way to run the 
// code manualy from a phone 
function runManualCodeGoogleFormTrigger(e) {

  let formResponse = e.response;
  let itemResponses = formResponse.getItemResponses();
  let itemResponse = itemResponses[0];

    switch (itemResponse.getResponse()) {
      case "Rebuild The 'KI Submission Google Form' (Remember to update the roster first!)":
        createForm();
        break;
      case "Run Master Create KI Reports (Rebuild All  The Google Sheets) (Step Number 3 Inside of 'KI Code')":
        masterCreateKIReports();
        break;
      case "Setup Main Trigger (Fires Whenever Someone Submits Their KIs)":
        setUpProgramTwoAndThreeFormTrigger();
        break;
      case "Clear Whole Cache (Clears The Cache)":
        clearCache();
        break;

    }
}


function setUpProgramTwoAndThreeFormTrigger() {
  ScriptApp.newTrigger(FUNCTION_NAMES.programTwoAndThreeMasterRunThroughMainGoogleForm)
  .forForm(KI_SUBMISSION_GOOGLE_FORM_ID)
  .onFormSubmit()
  .create();
}

function setUpProgramThreeOneTimeTrigger() {
  ScriptApp.newTrigger(FUNCTION_NAMES.programThreeCreateKIReport)
    .timeBased()
    .after(0.1 * 60 * 1000)
    .create();
}

function setUpManualRunCodeGoogleFormTrigger() {
  ScriptApp.newTrigger(FUNCTION_NAMES.manualRunCodeThroughRunCodeGoogleForm)
  .forForm(RUN_CODE_GOOGLE_FORM_ID)
  .onFormSubmit()
  .create();
}


function deleteTriggersWithName(triggerNameToDelete) {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == triggerNameToDelete) {
      ScriptApp.deleteTrigger(triggers[i])
    }
  }
}
























































































//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// These are down here because for some reason the code wouldnt work without them on this page



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
