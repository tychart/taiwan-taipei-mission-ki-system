# Taiwan Taipei Mission Key Indicator System Documentation

Alright, so there are going to be 3 different sections to this README. 


* Section 1 is what to do every week/transfer/on a regular basis. 
* Section 2 will concern as a user, how to fix problems and rebuild the system from a backup if necessary. 
* Section 3 will go deep into the code and exactly how this system works


## Section 1: Simple Everyday Use

What do I, the person who barely knows how to turn on a computer, have to do every week?


### Every Week:

All you have to do every week is resend the link for the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/)” in the mission chat Sunday afternoon. Also, if you really want, follow up with people who havn’t reported yet to ~~force~~ remind them to report.


### Every Transfer:

Step 1: UPDATE THE ROSTER! Every time the roster changes, and you want those changes reflected in the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/)” or in any other part of the KI System, you need to follow [these](https://drive.google.com/file/d/1JEQDKsU2Vyh12M7woKefvSfKwWNSxhef/view?usp=sharing) instructions to update the roster. 

Step 2: AFTER THE ROSTER IS UPDATED, you need to run the “createForm'' function in the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” Script. There are 2 ways to do this, the manual way, and a shortcuted way.


#### Manual Way:

Step 1: Enter into the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” program, then go into the  “1 Build The KI Report Google Form” script

Step 2: Select “createForm” from the dropdown of different possible functions to run

Step 3: Click “Run”



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")



#### Shortcuted Way:

Navigate to the “[Run Code](https://docs.google.com/forms/d/e/1FAIpQLSegAmcyhvpIwXQnH7f-BtpQXEgt1f-bAS9AvqPgpscO5z2USg/viewform)” Google Form, select “Rebuild The 'KI Submission Google Form' (Remember to update the roster first!)”, and hit submit. This method also works from a phone that has Maas360 on it.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



## Section 2: Fix Basic Problems

What do I, the Office Elder who solidly knows their way around a computer, fix some basic problems and better understand what’s going on with the program?

Step number one to fixing problems, is to figure out what the problem is. I (Elder Chartrand) have fixed all of the problems that the KI System has run into, and have (hopefully) safeguarded the program against all those problems in the future. But, in the likely occurrence that something unanticipated will happen in the future, this is how the system works in a basic way, so that you might be able to fix some basic issues. 

The first

Note: If you, an experienced office elder, fix a problem, please update this README file so that the future Office Elders can fix that same problem!


### Step 1: Diagnosing the Problem

In order to diagnose a problem, you first need to understand how it works. There are 3 sections to the program inside of the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” program. 



1. “1 Build The KI Report Google Form”
2. “2 Put Google Form Responses Into Google Sheets”
3. “3 Generate Google Sheets (Main)”


#### How Does Program “[1 Build The KI Report Google Form](#bookmark=id.45awjdju2pan)” Work?

Essentially, this bit of code deletes all the items (questions/content) in the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)”, then puts them all back again, as according to how the questions are formatted inside the code, with one exception. In order to update the list of Area names and Ward names that people submitting their KIs on Sunday can select, it selects the “[Roster](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=1007973787)” Sheet, in the “[KI System Google Spreadsheet](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=1007973787)”, and pulls out all the area and ward names and inserts those into the first two questions “Area 區域” and “Ward 支會”.

The end purpose of running the code is to update the Area list and Ward list in the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)” as according to the new Roster, freshly downloaded into the overall “[Roster](https://docs.google.com/spreadsheets/u/2/d/14svUe8kyvBVJr37a87nMfGkAXQ-80QMiNvJ6SRVYHQo/edit)” Google Spreadsheet from Imos. (How to update the “[Roster](https://docs.google.com/spreadsheets/u/2/d/14svUe8kyvBVJr37a87nMfGkAXQ-80QMiNvJ6SRVYHQo/edit)” is explained in [this](https://drive.google.com/file/d/1JEQDKsU2Vyh12M7woKefvSfKwWNSxhef/view?usp=sharing) video.) 

If there is anything wrong inside the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)”, changing anything inside of the form editor won’t do anything because next time you run the code, it will delete everything and recreate it according to the code inside the “[1 Build The KI Report Google Form](#bookmark=id.45awjdju2pan)” script inside of the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” program. Instead, take a look at the inside of the “[1 Build The KI Report Google Form](#bookmark=id.45awjdju2pan)” script and see if there are any discrepancies between the [backup](#bookmark=id.45awjdju2pan) and the actual code. If you need to change any of the question’s wording, you can change that through the “[Global Variables / Settings](#bookmark=id.ng87ytdsv00m)” script file, inside of the “questionsTextObj” which contains all the text for the questions on the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)”. It looks like [this](#bookmark=id.ekaaulmi7qr5). If you want to update the translation or the wording or something, [here](#bookmark=id.ekaaulmi7qr5) is the place to do it. 

If there are any things you want to change or fix about the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)”, you can pull up how Google Apps Script works, and start Googling! You can look at the documentation for [FormApp](https://developers.google.com/apps-script/reference/forms/form-app) and also [this](https://www.youtube.com/watch?v=A6qRmmJynVQ&list=PL42xwJRIG3xBoKUA3zPkICMTAa_vu0QEl) YouTube series really helped me understand [FormApp](https://developers.google.com/apps-script/reference/forms/form-app). 

Good Luck, and if you need help, feel free to ask the people that the Office Elders typically ask!

How to run the code and rebuild the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)”? Check 

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: undefined internal link (link text: "Here"). Did you generate a TOC with blue links? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

[Here](#heading=h.gijdl9v8ye8p)


#### How Does [Program “2 Put Google Form Responses Into Google Sheets](#bookmark=id.ysjn5lll46gu)” Work?

This program is relatively simple, every time it is activated, it takes the last response from the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)” and inserts it into the “[KI Google Form Output](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=260669416)” Google Sheet.

it just gets activated every time that the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)” is submitted by someone due to this trigger:



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


If something is wrong with that trigger, or there is a high error rate, or something bad is happening and the KIs being submitted in the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)” are not going into the “[KI Google Form Output](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=260669416)” Sheet, then a troubleshooting step is to delete that trigger and then recreate it. There are 2 ways to do that, a manual way and a shortcuted way. 


##### Manual Way:

Step 1: Navigate into the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” program and go into the “[Global Variables / Settings](#bookmark=id.ng87ytdsv00m)” script

Step 2: If you want (Optional), you can scroll down and see the function named “setUpProgramTwoAndThreeFormTrigger”. You need to run this function in order to create the trigger that connects the “[KI Submission Google Form](https://docs.google.com/forms/d/1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E/edit)” to the “[KI System Code](https://script.google.com/u/2/home/projects/1_Mq47KzPiuFymad-zqstVl1q7U8MANXnYIg3Y-gRGdO4AQUGB0hJYXsx/edit)” 

Step 3: Select “setUpProgramTwoAndThreeFormTrigger” from the dropdown menu at the top

Step 4: Hit run to run the function that will create the trigger



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")



##### Shortcut Way:

Navigate to the “[Run Code](https://docs.google.com/forms/d/e/1FAIpQLSegAmcyhvpIwXQnH7f-BtpQXEgt1f-bAS9AvqPgpscO5z2USg/viewform)” Google Form, select “Setup Main Trigger (Fires Whenever Someone Submits Their KIs)”, and hit submit. This method also works from a phone that has Maas360 on it.



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



#### How Does [Program “Program 3 Generate Google Sheets (Main)](#bookmark=id.ysjn5lll46gu)” Work?

This is the bulk of the code, and the most complex program of the 3, that’s why it is separated into 6 different parts



* Pull and Process Data
* Create Mission Hierarchy
* Create Folder Structure
* Insert KIs Into Hierarchy
* Generate All The Google Sheets
* Beat The Time Limit

Essentialy though, it pulls all the data from the “[KI Google Form Output](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=260669416)” Sheet on the “[KI System Google Spreadsheet](https://docs.google.com/spreadsheets/d/1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE/edit#gid=1007973787)” Spreadsheet, processes it and creates the “missionHierarchy”. This hierarchy is then used to create the folder structure located inside of the “[Archive KI History](https://drive.google.com/drive/u/2/folders/1RHhg8jVkQckOttScH0JfTqF7MOiz5r6V)” folder, which is inside of the main “[Key Indicators System](https://drive.google.com/drive/u/2/folders/1wW0uz58-ZiiA3bP2QdCsf_CeHf8lWtZL)” folder. (The “[Archive KI History](https://drive.google.com/drive/u/2/folders/1RHhg8jVkQckOttScH0JfTqF7MOiz5r6V)” folder is the only one referenced by code, and it is refrnced by ID, so the name and position can be changed without effecting the program, although this is not recommended because it will make the documentation outdated). After the folder system is created, it is shared with all the leaders, wether that be the APs, ZLs, DLs, or just the leaders of the area (just the missionaries assigned there). After that, the Google Spreadsheets are created and placed into the folders, according to their stewardship.


## Section 3: Fix Advanced Problems

What do I, the Office Elder who knows how to code in Javascript, fix some basic and more advanced problems, and make changes and updates to the code?

Well, this is an in depth breakdown of each of the sections of code and what they do. As I was writing this system, I tried my very best to make it as simple and self explanatory as possible, by using unnecessarily long and specific variable names and function names, but some of it is still a little hard to understand. I also really tried to use super basic ideas and repeat a bunch of methods of writing or getting things done so that the computer logic is fairly basic, and if you know any programing languages, you should be able to pretty much understand what’s going on in this code. I (Elder Chartrand) myself hade’nt touched Javascript until I started this project. I had some experience in High School with Java, and learned a little of Python and C#, but nothing too crazy. So when I started this project, I started learning Javascript along with learning Google Apps Script, so if this situation applies to you in any way, shape, or form, then don’t despair, because I used really simple logic, and I did my best to explain exactly what is going on in this code! (Also, I’ve never written a README before as this is my first real project, so if this is a little different from your average readme, then I hope at least it’s helpful)

Here I will link a bunch of stuff on the internet that helped me in my learning Google Apps Script and Javascript



* First of all, if you don’t know any Javascript, and have never heard of Google Apps Script, and want to start to know your way around, then first thing I would recommend is for you to watch “[David Weiss](https://www.youtube.com/c/DavidWeissProgramming/playlists)” on YouTube and watch Apps Script - Season 0, 1, 3, 8, 9, 10, 17. This is where I learned the bulk of my knowledge about Google Apps Script, and will help you form a good foundation, his teaching style is awesome, (just watch all the videos at 1.5 - 2 times speed)
    * [Apps Script - Season 0 | Orientation](https://www.youtube.com/watch?v=QY1Yfk2JUJI&list=PL42xwJRIG3xCm6O85pd91tQxgxGcq82m4)
    * [Apps Script - Season 1 | Spreadsheet Service](https://www.youtube.com/watch?v=Au3nVAGZKQU&list=PL42xwJRIG3xBZFP5wYh-OFb-CQmjz-Rn-)
    * [Apps Script - Season 3 | Script Service](https://www.youtube.com/watch?v=f3WU_Jf4Y2c&list=PL42xwJRIG3xDPE35v7e83rH7Uu4g_MfmC)
    * [Apps Script - Season 8 | Lock Service](https://www.youtube.com/watch?v=XPDW9NBvjxI&list=PL42xwJRIG3xDBPhvVrQdRi2Hdy9kMeb90)
    * [Apps Script - Season 9 | Forms Service](https://www.youtube.com/watch?v=A6qRmmJynVQ&list=PL42xwJRIG3xBoKUA3zPkICMTAa_vu0QEl)
    * [Apps Script - Season 10 | Drive Service](https://www.youtube.com/watch?v=p15g6KegRZY&list=PL42xwJRIG3xDbvnvgWOizjX6j1jYBn0zk)
    * [Apps Script - Season 17 | Cache Service](https://www.youtube.com/watch?v=Z0rzBzv-vY4&list=PL42xwJRIG3xCCAeJUuxtmr47NYC8sRQ2d)
* If you don’t know how to use Javascript Objects, then you totally should, because they’re awesome! (Just google it, it’s pretty easy to learn)
* 


## Code Backups/Reference


---


```
/***************************
```



###  Global Variables / Settings


```
***************************/ 

const KI_SYSTEM_GOOGLE_SPREADSHEET_ID = "1j9n9zEWcL7xDcrEXj_62R2nuoDWxDmep5dK2C_xvypE";  //The one in the folder "Testing For Elder Chartrand's New KI System" called "KI System Google Spreadsheet"
const KI_SUBMISSION_GOOGLE_FORM_ID = "1HadBu6GHx0cpp6MM7sQJJCFNPzOztr2EUUuN49U0r9E" //The one in the folder "Testing For Elder Chartrand's New KI System" called "KI Submission Google Form"
const RUN_CODE_GOOGLE_FORM_ID = "1_bYFh0PyyOzTwVETK19ah5H3iFtk8tqj8HjiNeSmKsY" // The one to manually run code in case something is not working
const ROSTER_SHEET_ID = "1007973787"; //The one you downloaded from Imos then copied and pasted into the "KI System Google Sheet"
const KI_FORM_OUTPUT_SHEET_ID = "260669416" // Path for the "KI Google Form Output' sheet in the "KI System Google Spreadsheet" spreadsheet
const ARCHIVE_FOLDER_ID = "1RHhg8jVkQckOttScH0JfTqF7MOiz5r6V" // The output folder for the KIs
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
 * Pull and Process Data Adjustment Values
 */
// This is the row in the Google Sheet that has the names for all the different stuff 
// like "Name", "Position", "Area", "District". This number is used in the code to 
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

// Standards Of Excellence
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
// Max time limit in milliseconds before stopping execution and starting again
// This is because of the restriction on Google Apps Script in which 1 script can
// Only run for ~6 minutes at a time, due to this restriction, the code had to
// be configured so that every so often, it checks to see how much time it has been
// running, and when it gets to over the "MAX_TIME_LIMIT", then it saves it's place,
// sets a 1 time trigger for a short amount of time later, then stops; just to be 
// started up again in a few seconds. Thereby keeping the program runtime under 6 minutes 
// This took a lot of thinking, and I (Elder Chartrand) might not have come up with
// the most elegant method, or absolutely foolproof, but my goal is for this code to
// work for at least 5 years, with very minimal maintenance 
const MAX_TIME_LIMIT = 5 * 60 * 1000; 
const outOfTimeExceptionMessage = "Out Of Time!";

// Debugging Settings
OUTPUT_LOGS_DOC_ID = "18AIjFFIAFMYradhEjAGPPMfxyA_1gg1yhrNanfwczWI";
shareAndEmailFolders = true;

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
  (order doesn't matter) 
  (If you don't know what this is, it's a javascript object, which is awesome, 
  and much better than what I was using before)
  Before continuing, I recommend to get a basic understanding of javascript objects and how they work
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

// This is formatted in an array, not an object, because it is desired in this specific order
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
// file with a better UI than going in here and clicking on specific functions
// and running them. A Google Form also seemed like the only way to run the 
// code manually from a phone 
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
// These are down here because for some reason the code wouldn't work without them on this page

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


---
/*****************************************
```



###  Program 1 Build The KI Report Google Form


```
*****************************************/ 

function createForm() {  


  const ROSTER_HEADER_ROW_NUMBER = 1; //This is the row in the Google Sheet that has the names for all the different stuff like "Name", "Position", "Area", "District". This number is used in the code to figure out in which colum what data is stored 
  const ROSTER_FIRST_ROW_WITH_ACTUAL_DATA = 2; //Pretty much this is the first line on the roster google sheet that has actual missionary info on it. Change if needed, also, see next line if have problems of 'off by one'
  const rosterFirstArrayRowWithActualData = ROSTER_FIRST_ROW_WITH_ACTUAL_DATA - 1; //This is because the array starts at 0 and not 1, so if you just put in the first row of the google sheet where there is actual data, then you would be off by one, so this compensates for that fact. Set the "firstRowWithActualData'' to the first row in the Roster Google Sheet that has actual data, like the first missionaries's name
  const rosterHeaderRowArrayNumber = ROSTER_HEADER_ROW_NUMBER - 1;
  const kiOutputSheetHeaderRowNumber = 1;
  const kiOutputSheetHeaderArrayNumber = kiOutputSheetHeaderRowNumber - 1;
  const kiOutputSheetFirstRowWithActualData = 2;
  const kiOutputSheetFirstArrayRowWithActualData = kiOutputSheetFirstRowWithActualData - 1;
  const alreadySubmittedFindingHoursTextTemp = questionsTextObj.alreadySubmittedFindingHoursText;

  let form = FormApp.openById(KI_SUBMISSION_GOOGLE_FORM_ID);
  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); 
  let rosterSheet = getSheetById(kiSystemGoogleSpreadsheet, ROSTER_SHEET_ID); //The one you downloaded from Imos then copied and pasted into the "KI System Google Sheet"
  let rosterSheetValues = rosterSheet.getDataRange().getValues();
  const desiredBaptimalPagesCount = PAGES_BAPTISMAL_COUNT;





  //This section takes the roster sheet and turns all the missionaries into objects with these attributes
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

// This is the place that names all the different baptismal sections a little 
// differently from each other so that the other code can differentiate between 
// different baptismal candidates later on down the line
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
  let number = desiredBaptimalPagesCount; // For aligning the user experience with the numbers bc the pages for the user count backwards
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
  // number attached so it can be separated out later on
  form.addTextItem()
    .setRequired(true)
    .setTitle(questionsTextObj.baptismalCandidateName + " " + number);


  // This makes the "Finding Source" question box with a 
  // number attached so it can be separated out later on
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
  let downI = desiredBaptimalPagesCount; //It's another ittorator, but counts backwards
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

// An example to run this function manually would be
// addBaptismalPagesQuestionsToQuestionsTextObj("baptismalCandidateName", "Name", desiredBaptimalPagesCount, questionsTextObj)
function addABaptismalPageQuestionToQuestionsTextObj(questionKeyStr, desiredBaptimalPagesCount, questionsTextObj) {
  let newKeyName;
  let newName;

  for(let i = 0; i < desiredBaptimalPagesCount; i++) {
    newKeyName = questionKeyStr + (i + 1); //Adds 1 onto the key name in the "questionsText" object, for example "questionText" beco ems "questionText1"
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
    Logger.log("Because listItems was undefined, it's now 0")
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


---
/******************************************************
```



###  Program 2 Put Google Form Responses Into Google Sheets


```
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

function writeGoogleSheetOnFormSubmit(e) { //This method and code is supposed to write to the Path for the "KI Google Form Output' sheet in the "KI System Google Spreadsheet" spreadsheet

  let startTime = new Date().getTime();

  let headerRowPos = 1; //If you for some reason need to change the position of the header row on the google sheet, here is the value to adjust


  let headerTextArray = getHeaderTextArray(KI_GOOGLE_FORM_OUTPUT_HEADER_ARRAY);

  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); //The one you downloaded from Imos then copied and pasted into the "KI System Google Sheet"
  let kiFormOutputSheet = getSheetById(kiSystemGoogleSpreadsheet, KI_FORM_OUTPUT_SHEET_ID);
  let lastFormResponse;

  // This will pull the information from the response that made the trigger go off (e)
  // If for some reason "e" doesn't contain any data, then it will just pull the 
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

  Logger.log("Time (milliseconds): " + (new Date().getTime() - startTime));
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
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every iteration, 
  // which would be much slower
  let toWrite = [];
  toWrite[0] = []; 

  for(let i = 0; i < headerTextArray.length; i++) {
    toWrite[0][i] = headerTextArray[i];
  }


  inputSheet.getRange(headerRowPos, 1, toWrite.length, toWrite[0].length).setValues(toWrite);

  return toWrite[0]; //Returns just the inner array, so the output is 1 dimensional, not 2 dimensional
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
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every iteration, 
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

  return toWrite[0]; //Returns just the inner array, so the output is 1 dimensional, not 2 dimensional
}

function isInRepeatForBaptismalCandidates(inputText) {

  for(let i = 0; i < baptismalCandidateQuestionsTextArr.length; i++) {
    if(baptismalCandidateQuestionsTextArr[i] == inputText) {
      return true;
    }
  }
  return false;
}


---
/***************************************
```



###  Program 3 Generate Google Sheets (Main)


```
***************************************/ 

function masterCreateKIReports() {  

  deleteTriggersWithName(FUNCTION_NAMES.programThreeCreateKIReport);
  createKIReports();




}

function createKIReports() {
  // This is because the array starts at 0 and not 1, so if you just put in the first row of the 
  // google sheet where there is actual data, then you would be off by one, so this compensates 
  // for that fact. Set the "firstRowWithActualData" to the first row in the Roster Google Sheet 
  // that has actual data, like the first missionaries's name
  const rosterFirstArrayRowWithActualData = ROSTER_FIRST_ROW_WITH_ACTUAL_DATA - 1; 
  const rosterHeaderRowArrayNumber = ROSTER_HEADER_ROW_NUMBER - 1;
  const kiOutputSheetHeaderRowNumber = 1;
  const kiOutputSheetHeaderArrayNumber = kiOutputSheetHeaderRowNumber - 1;
  const kiOutputSheetFirstRowWithActualData = 2;
  const kiOutputSheetFirstArrayRowWithActualData = kiOutputSheetFirstRowWithActualData - 1;

  let kiSystemGoogleSpreadsheet = SpreadsheetApp.openById(KI_SYSTEM_GOOGLE_SPREADSHEET_ID); 
  let rosterSheet = getSheetById(kiSystemGoogleSpreadsheet, ROSTER_SHEET_ID); //The one you downloaded from Imos then copied and pasted into the "KI System Google Sheet"
  let kiFormOutputSheet = getSheetById(kiSystemGoogleSpreadsheet, KI_FORM_OUTPUT_SHEET_ID);
  let rosterSheetValues = rosterSheet.getDataRange().getValues();
  let kiFormOutputSheetValues = kiFormOutputSheet.getDataRange().getValues();



  //This section takes the roster sheet and turns all the missionaries into objects with these attributes
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
    Logger.log("Full Program Completed, Reports Are All Up To Date! Completed In " + roundToDecimalPlace((Date.now() - fullMultiLevelTimerStart) / 1000 / 60) + " Minutes");
    removeSheetsCurrPositionsFromCache();
  }
}


---
/*********************
```



###  Pull And Process Data


```
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

    // This is because the missionaries that are in other missions or are in quarantine that show up in the roster have blanks for 
    // 'area', 'district', or 'zone' attribute, which messes with the code, so they are filtered out at this point
    if(missionary.unit != "" || missionary.area != "" || missionary.district != "" || missionary.zone != "") { 
      missionaryArray.push(missionary);
    } else {Logger.log(missionary.fullName + " Didn't Make It (Because 'unit', 'area', 'district', or 'zone' attribute was blank)"); }
  }

  missionaryArray = fixUnitsForMissionaryArray(missionaryArray);

  // This output is toggleable in the settings section at the beginning of the program
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

// This takes a 2-D array and the list of column numbers and compiles an array
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

  // This output is toggleable in the settings section at the beginning of the program
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

  if(showProcessQuestionresponseArrayTime) {Logger.log("Finished Processing The Question response Array In " + (new Date() - start) / 1000 + " Seconds");}

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
    } else {Logger.log("Didn't Find: '" + value + "' On The 'KI Google Form Output' Sheet Header Row");}
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

// An example to run this function manually would be
// addBaptismalPagesQuestionsToQuestionsTextObj("baptismalCandidateName", "Name", desiredBaptimalPagesCount, questionsTextObj)
function addABaptismalPageQuestionToQuestionsTextObj(questionKeyStr, desiredBaptimalPagesCount, questionsTextObj) {
  let newKeyName;
  let newName;

  for(let i = 0; i < desiredBaptimalPagesCount; i++) {
    newKeyName = questionKeyStr + (i + 1); //Adds 1 onto the key name in the "questionsText" object, for example "questionText" beco ems "questionText1"
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
* way of getting the date without any weird timezone stuff
* Code Source: https://stackoverflow.com/a/37399351
* 
* This is in here just in case, there was a time zone issue earlier, and this fixed it
* If you have the exact same problem, it is fixed by going to "Project Settings" on the side panel
* (the same place you see Overview, Editor, Triggers, Executions, and Project Settings), and in
* there is a way to change the project timezone, do so to whichever timezone is applicable
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


---
/**************************
```



###   Create Mission Hierarchy


```
**************************/ 

function createHierarchy(missionaryArray) {
  var start = new Date();

  //This is the place that the famous "missionHierarchy" is actually declared and instantiated
  missionHierarchy = {name: MISSION_NAME, level: "mission", leaders: [], kis: [], children: [], startTime: programStartingMilliseconds};
  let tempZoneName;
  let tempDistrictName;
  let tempAreaName;
  let tempUnitName;
  let tempZonePos;
  let tempDistrictPos;
  let tempAreaPos;
  let tempUnitPos;

  addPresidentAsMissionLeader(missionHierarchy);

  for(let i = 0; i < missionaryArray.length; i++) {


    tempZoneName = missionaryArray[i].zone;
    tempDistrictName = missionaryArray[i].district;
    tempAreaName = missionaryArray[i].area;

    addIfAP(missionaryArray[i]);


    //The "zone"/"district"/"area" is the name of the object key inside of missionHierarchy object
    tempZonePos = checkAddMissionHierarchyObjReturnPos(missionHierarchy.children, tempZoneName, "zone"); 

    addIfZoneLeader(missionaryArray[i], tempZonePos);


    tempDistrictPos = checkAddMissionHierarchyObjReturnPos(missionHierarchy.children[tempZonePos].children, tempDistrictName, "district");


    addIfDistrictLeader(missionaryArray[i], tempZonePos, tempDistrictPos);


    tempAreaPos = checkAddMissionHierarchyObjReturnPos(missionHierarchy.children[tempZonePos].children[tempDistrictPos].children, tempAreaName, "area");


    missionHierarchy.children[tempZonePos].children[tempDistrictPos].children[tempAreaPos].leaders.push(missionaryArray[i]); // Add Area Leaders (Just the area missionaries who cover there)



    for(let j = 0; j < missionaryArray[i].unit.length; j++) { //Inner Loop because there are usually more than one ward per area
      tempUnitName = missionaryArray[i].unit[j];
      tempUnitPos = checkAddMissionHierarchyObjReturnPos(missionHierarchy.children[tempZonePos].children[tempDistrictPos].children[tempAreaPos].children, tempUnitName, "unit");
    }

  }

  // This output is toggleable in the settings section at the beginning of the program
  if(showCreateMissionHierarchyTime) {Logger.log("Built The Mission Hierarchy In " + (new Date() - start) / 1000) + " Seconds";}

  return missionHierarchy;
}

function checkAddMissionHierarchyObjReturnPos(missionHierarchySegObjArray, nameInsideHierarchy, level) {
  if (checkIfAlreadyExists(missionHierarchySegObjArray, nameInsideHierarchy)) {


    let returnPos = returnPositionOfAlreadyExistingHierarchy(missionHierarchySegObjArray, nameInsideHierarchy)
    return returnPos; //Return the already existing object position in the child array


 } else {


   missionHierarchySegObjArray.push({name: nameInsideHierarchy, level: level, leaders: [], kis: [], children: []});
   return missionHierarchySegObjArray.length - 1; //Return the position of the object it just added
  }


}

function checkIfAlreadyExists(missionHierarchySegObjArray, nameInsideHierarchy) {
  for(let i = 0; i < missionHierarchySegObjArray.length; i++) {
    if(missionHierarchySegObjArray[i].name === nameInsideHierarchy) {
      return true;
    }
  }
  return false;
}

// This is so he is automatically emailed with the KI report every week
function addPresidentAsMissionLeader(missionHierarchy) { 
  missionHierarchy.leaders.push(PRESIDENT_IDENTITY_OBJECT)
}

function addIfAP(missionaryObj) {
  if(isAP(missionaryObj)) {
    missionHierarchy.leaders.push(missionaryObj);
     //Logger.log("Added: " + missionaryObj.fullName + " As a AP");
  }
}

function addIfZoneLeader(missionaryObj, tempZonePos) {
  if(isZoneLeader(missionaryObj)) {
    missionHierarchy.children[tempZonePos].leaders.push(missionaryObj);
     //Logger.log("Added: " + missionaryObj.fullName + " As a Zone Leader in: " + missionHierarchy.children[tempZonePos].name + " Zone");
  }
}

function addIfDistrictLeader(missionaryObj, tempZonePos, tempDistrictPos) {
  if(isDistrictLeader(missionaryObj)) {
    missionHierarchy.children[tempZonePos].children[tempDistrictPos].leaders.push(missionaryObj);
     //Logger.log("Added: " + missionaryObj.fullName + " As a District Leader In: " + missionHierarchy.children[tempZonePos].children[tempDistrictPos].name + " District");
  }
}

function isAP(missionaryObj) {
    if(missionaryObj.position == APLeaderText) { // Checks if the leadership position is equal to "AP"
    return true;
  }

  return false;
}

function isZoneLeader(missionaryObj) {
  if(missionaryObj.position.includes(ZoneLeaderText)) { // Checks if the leadership position is equal to "DL"
    return true;
  }

  return false;
}

function isDistrictLeader(missionaryObj) {
  if(missionaryObj.position == DistrictLeaderText || missionaryObj.position == DistrictTrainerText) { // Checks if the leadership position is equal to "DL"
    return true;
  }

  return false;
}

function returnPositionOfAlreadyExistingHierarchy(missionHierarchySegObjArray, nameInsideHierarchy) {
  for(let i = 0; i < missionHierarchySegObjArray.length; i++) {
    if(missionHierarchySegObjArray[i].name === nameInsideHierarchy) {
      return i;
    }
  }
  return -1;
}

// You can use this for debugging purposes if you want, but I would recommend just logging the whole thing out to the Google Doc, "Long Logs"
// Using the "logHierarchyToGoogleDoc" command. Useage: logHierarchyToGoogleDoc(missionHierarchy);
function displayMissionHierarchy(missionHierarchy) {
  Logger.log("Entering This Function");
  Logger.log("missionHierarchy.children.name: " + missionHierarchy.children);
  for(let i = 0; i < missionHierarchy.children.length; i++) {
    //Logger.log("Got");
    for(let j = 0; j < missionHierarchy.children[i].children.length; j++) {
      for(let k = 0; k < missionHierarchy.children[i].children[j].children.length; k++) {
        Logger.log(
          "Zone: " + missionHierarchy.children[i].name + 
          " District: " + missionHierarchy.children[i].children[j].name + 
          " Area: " + missionHierarchy.children[i].children[j].children[k].name
        );


        for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].leaders.length; l++) {
          Logger.log("Missionary: " + l + " - " + missionHierarchy.children[i].children[j].children[k].leaders[l].fullName);
        }

        for(let l = 0; l < missionHierarchy.children[i].children[j].children[k].children.length; l++) {
          Logger.log("Ward: " + l + " - " + missionHierarchy.children[i].children[j].children[k].children[l].name);
        }

      }
    }
  }
}


---
/************************
```



###   Create Folder Structure


```
************************/  

function createFolderStructure(missionHierarchy) {
  let rootFolder = DriveApp.getFolderById(ARCHIVE_FOLDER_ID);
  let rootFolderID = rootFolder.getId();
  let currentFolder = rootFolder;

  // Set the name for the month folder so that they are in alphabetical order in the file view
  let thisMonthFolderName = String(mostRecentSunday.getMonth() + 1).padStart(2, "0") + " - " + kiWeekCurrentMonth; 
  let thisYearFolder = checkCreateNewFolder(rootFolder, currentYear);
  let thisMonthFolder = checkCreateNewFolder(thisYearFolder, thisMonthFolderName);
  let missionFolder = checkCreateNewFolder(thisMonthFolder, "Taiwan Taipei Mission KIs: " + kiWeekCurrentDate);
  missionHierarchy.folder = missionFolder;


  // These are folder arrays
  let tempFolder;
  let tempFolderName;

  checkShareFolderWithLeaders(missionHierarchy);

  for(
    foldersCurrPositions.zone; 
    foldersCurrPositions.zone < missionHierarchy.children.length; 
    foldersCurrPositions.zone++
  ) {

    //Logger.log("Current Zone Folder: " + missionHierarchy.children[foldersCurrPositions.zone].name);
    tempFolderName = "Zone: " + missionHierarchy.children[foldersCurrPositions.zone].name + " - " + kiWeekCurrentDate;
    tempFolder = checkCreateNewFolder(missionFolder, tempFolderName);
    missionHierarchy.children[foldersCurrPositions.zone].folder = tempFolder;
    checkShareFolderWithLeaders(missionHierarchy.children[foldersCurrPositions.zone]);
    checkExitTime(missionHierarchy);

    for(
      foldersCurrPositions.district; 
      foldersCurrPositions.district < missionHierarchy.children[foldersCurrPositions.zone].children.length; 
      foldersCurrPositions.district++
    ) {

      //Logger.log("Current District Folder: " + missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].name);
      tempFolderName = "District: " + missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].name + " - " + kiWeekCurrentDate;
      tempFolder = checkCreateNewFolder(missionHierarchy.children[foldersCurrPositions.zone].folder, tempFolderName);
      missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].folder = tempFolder;
      checkShareFolderWithLeaders(missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district]);
      checkExitTime(missionHierarchy);

      for(
        foldersCurrPositions.area; 
        foldersCurrPositions.area < missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children.length; 
        foldersCurrPositions.area++
      ) {

        tempFolderName = "Area: " + missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].name + " - " + kiWeekCurrentDate;
        tempFolder = checkCreateNewFolder(missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].folder, tempFolderName);
        missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].folder = tempFolder;
        checkShareFolderWithLeaders(missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area]);
        checkExitTime(missionHierarchy);


        for(
          foldersCurrPositions.unit; 
          foldersCurrPositions.unit < missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].children.length; 
          foldersCurrPositions.unit++
        ) {


          tempFolderName = "Unit: " + missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].children[foldersCurrPositions.unit].name + " - " + kiWeekCurrentDate;
          tempFolder = checkCreateNewFolder(missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].folder, tempFolderName);
          missionHierarchy.children[foldersCurrPositions.zone].children[foldersCurrPositions.district].children[foldersCurrPositions.area].children[foldersCurrPositions.unit].folder = tempFolder;
          checkExitTime(missionHierarchy);

        }
        tempUnitFolders = [];
        foldersCurrPositions.unit = 0;
      }
      tempAreaFolders = [];
      foldersCurrPositions.area = 0;
    }
    tempDistrictFolders = [];
    foldersCurrPositions.district = 0;
  }
  tempZoneFolders = [];
  foldersCurrPositions.zone = 0;




  return missionHierarchy; // This also returns the missionHierarchy variable updated with all the new folders

}

function createCheckDistrictFolders(zoneFolders, missionaryArray) {
  let districtFoldersArrayOfArrays = [];

  for(let i = 0; i < zoneFolders.length; ) {
    Logger.log(zoneFolder.getName());
    districtFoldersArrayOfArrays.push(createCheckFoldersInArray(zoneFolder, getAllOfAnAspect(missionaryArray, "district")));
  }
  return districtFoldersArrayOfArrays;
}

function createCheckZoneFolders(thisWeekFolder, missionaryArray) {
  return createCheckFoldersInArray(thisWeekFolder, getAllOfAnAspect(missionaryArray, "zone"));
}

function createCheckFoldersInArray(currentFolder, newFolderNameArray) {
  let folderArray = [];

  for(let i = 0; i < newFolderNameArray.length; i++) {
    folderArray.push(checkCreateNewFolder(currentFolder, newFolderNameArray[i]));
  }

  return folderArray;
}

// Check inside a folder to see if there is another folder with a name, 
// if so, then return it. If not, create it, then return it
function checkCreateNewFolder(currentFolder, newFolderName) {
  if(checkInsideFolderIfFolderNameAlreadyExists(currentFolder, newFolderName)) {
    warnIfMultipleSameNameInFolder(currentFolder, newFolderName);


    // This output is toggleable in the settings section at the beginning of the program
    if(showCreateFolderStructureOutput) {Logger.log('Folder Named "' + newFolderName + '" In "' + currentFolder.getName() + '" Folder Was Found, Entering');}


    return currentFolder.getFoldersByName(newFolderName).next();
  } else {

    // This output is toggleable in the settings section at the beginning of the program
    if(showCreateFolderStructureOutput) {Logger.log('Folder Named "' + newFolderName + '" In "' + currentFolder.getName() + '" Folder Was Not Found, Currently Creating');}

    return createFolderInsideOf(currentFolder, newFolderName);
  }
}

function createFolderInsideOf(parentFolder, newFolderName) {
  let newFolder = parentFolder.createFolder(newFolderName);
  newFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return newFolder;
}

function checkInsideFolderIfFolderNameAlreadyExists(folderToCheck, nameString) {
  let folderToCheckFileIterator = folderToCheck.getFolders();
  let tempName = '';

  while(folderToCheckFileIterator.hasNext()) {
    tempName = folderToCheckFileIterator.next().getName();
    if(tempName === nameString) {
      return true;
    }
  }


  return false;
}

function warnIfMultipleSameNameInFolder(folder, name) {
  let currentFolderIterator = folder.getFoldersByName(name);
  //let currentFolder = currentFolderIterator.next();
  if(currentFolderIterator.hasNext()) {
      Logger.log('WARNING! More Than One Folder In "' + folder.getName() + '" With The Name: ' + name);
    }
}

function checkShareFolderWithLeaders(inputObj) {
  let currFolder = inputObj.folder;
  let origViewerUserList = currFolder.getViewers();
  let origViewerList = [];
  let newViewerList = [];

  // Get an array of the leader's emails
  for(let i = 0; i < inputObj.leaders.length; i++) {
      newViewerList.push(inputObj.leaders[i].personalEmail);
  }

  // Convert the list of users to just a list of their emails
  for(let i = 0; i < origViewerUserList.length; i++) {
    origViewerList.push(origViewerUserList[i].getEmail());
  }

  // If the emails of the leaders are not already viewers, it adds them
  if(!checkIfArrayInsideOfArray(origViewerList, newViewerList)) {

    if(shareAndEmailFolders) {
      currFolder.addViewers(newViewerList);
      sendEmail(inputObj, newViewerList);
    }

    // This output is toggleable in the settings section at the beginning of the program
    if(showCreateFolderStructureOutput) {Logger.log("Emailed And Shared With " + newViewerList);}

  } else {


    // This output is toggleable in the settings section at the beginning of the program
    if(showCreateFolderStructureOutput) {Logger.log("Already Shared With " + newViewerList);}

  } 

}

function checkIfArrayInsideOfArray(bigArr, searchArr) {
  for(let i = 0; i < searchArr.length; i++) {
    if(!bigArr.includes(searchArr[i])) {


      return false;
    }
  }

  return true
}

function sendEmail(inputObj, emailAddressArray) {

  messageObj.emailAddress = emailAddressArray.join(", ");
  messageObj.subjectText = subjectText + inputObj.name + " " + inputObj.level.charAt(0).toUpperCase() + inputObj.level.slice(1);
  messageObj.reportUrl = inputObj.folder.getUrl();
  messageObj.messageString = getMessageString(messageObj);


  sendRawMessage(messageObj.messageString);
}

function getMessageString(messageObj) {
  return (
    "From: Mission Office Reports <ttmmediaelders@gmail.com>\r\n" +
    "To: " + messageObj.emailAddress + "\r\n" +
    "Subject: " + messageObj.subjectText + "\r\n\r\n" +
    messageObj.emailBodyText +
    messageObj.reportUrl
  );
}

/**
 * Send a raw RFC 2822 formatted and base64url encoded email
 * using the Advanced Gmail service.
 *
 * From http://stackoverflow.com/a/35073785/1677912
 *
 * @param {String} raw  RFC 2822 formatted and base64url encoded message
 *
 * @returns {String} Message ID of the message (now in Sent Messages).
 * 
 * 
 * This was modified in order to accept a normal string, then convert it.
 * It works on the principal of the GMail Api, but for google apps script under 
 * the name of "Advanced Gmail Service". It is much more complicated but also much
 * more powerful than "GmailApp" which is built into google apps script natively
 * 
 * Namely, it allows you to send way over 100 emails in one day. During my testing,
 * I was able to send over 600 emails in the space of around 10 minutes
 * 
 * Original Function: http://stackoverflow.com/a/35073785/1677912
 * This is how I made the original function work: https://localcoder.org/google-rest-api-message-in-an-rfc-2822-formatted-and-base64url-encoded-string
 * Here are the usage limits for this API: https://developers.google.com/gmail/api/reference/quota
 */
function sendRawMessage(inputString) {
  let rawMessage = convertToBase64(inputString); 
  var message = Gmail.newMessage();
  message.raw = rawMessage;
  var sentMsg = Gmail.Users.Messages.send(message, 'me');
  return sentMsg.id;
}

function convertToBase64(inputString) {
  return Utilities.base64Encode(inputString).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}


---
/**************************
```



###   Insert KIs Into Hierarchy


```
**************************/  

function insertKIsIntoMissionHierarchy(questionResponseFullArray, missionHierarchy) {
  let start = new Date();


  missionHierarchy = putAreaKIsIntoHierarchy(questionResponseFullArray, missionHierarchy);
  missionHierarchy = combineAllKIS(missionHierarchy);



  logHierarchyToGoogleDoc(missionHierarchy);



  // This output is toggleable in the settings section at the beginning of the program
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
  DocumentApp.openById(OUTPUT_LOGS_DOC_ID).getBody().getParagraphs()[0].setText(inputText);
}


---
/*******************************
```



###   Generate All The Google Sheets


```
*******************************/ 

function generateGoogleSheets(missionHierarchy, currPositions) {
  let start = new Date();
  let rootFolder = DriveApp.getFolderById(ARCHIVE_FOLDER_ID);
  let currentFolder = rootFolder;
  let currUnitObj;
  let currAreaObj;
  let currDistrictObj;
  let currZoneObj;
  let missionObj = missionHierarchy;



  Logger.log("Generating Google Spreadsheets...    (This Could Take A While)");

  for(currPositions.zone; currPositions.zone < missionHierarchy.children.length; currPositions.zone++) {    
    for(currPositions.district; currPositions.district < missionHierarchy.children[currPositions.zone].children.length; currPositions.district++) {
       for(currPositions.area; currPositions.area < missionHierarchy.children[currPositions.zone].children[currPositions.district].children.length; currPositions.area++) {
        for(currPositions.unit; currPositions.unit < missionHierarchy.children[currPositions.zone].children[currPositions.district].children[currPositions.area].length; currPositions.unit++) {


          currUnitObj = missionHierarchy.children[currPositions.zone].children[currPositions.district].children[currPositions.area].children[currPositions.unit];


        }

        currAreaObj = missionHierarchy.children[currPositions.zone].children[currPositions.district].children[currPositions.area];
        currSpreadsheet = createAreaReport(currAreaObj);
        checkExitTime();
        currPositions.unit = 0;

      } // Area Loop End


      currDistrictObj = missionHierarchy.children[currPositions.zone].children[currPositions.district];
      currSpreadsheet = createDistrictReport(currDistrictObj);
      checkExitTime();
      currPositions.area = 0;

    } // District Loop End


    currZoneObj = missionHierarchy.children[currPositions.zone];
    currSpreadsheet = createZoneReport(currZoneObj);
    checkExitTime();
    currPositions.district = 0;

  } // Zone Loop End


  currSpreadsheet = createMissionReport(missionObj);

  // This output is toggleable in the settings section at the beginning of the program
  if(showCreateGoogleSheetsTime) {Logger.log("Finished Building All Spreadsheets In " + roundToDecimalPlace((new Date() - start) / 1000 / 60) + " Minutes");}


}

/*
**********************************************************************************************************************************************************************************************
*/

function createAreaReport(parentObj) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let parentFolder = parentObj.folder;
  let tempName = parentFolder.getName();
  let overallKIs = parentObj.kis[thisWeek];
  let sheetKIHeadersTextArr = KI_SHEET_HEADERS_TEXT_ARR;
  let sheetHoursHeadersTextArr = FINDING_HOURS_SHEET_HEADERS_TEXT_ARR;
  let headerStartingColumnPos = 3;
  let currRow = 0;
  let tempCell;
  let rules = [];

  let currSpreadsheet = checkCreateNewSpreadSheet(parentFolder, tempName);




  let currSheet = currSpreadsheet.getSheets()[0];


  setupSheet(currSheet);


  currSheet.getRange(1, 1).setValue(parentObj.name + " Area KI Report");

  let kiReportHeader = writeKIReportHeader(sheetKIHeadersTextArr, currSheet, 1, headerStartingColumnPos);
  let kiHeaderPositionsObj = getHeaderPositionsArray(sheetKIHeadersTextArr, kiReportHeader);





  for(let i = 0; i < parentObj.children.length; i++) {


    currRow = ROW_FOR_KIS_TO_START + i;


    currSheet.getRange(currRow, 1).setValue(parentObj.name)
    currSheet.getRange(currRow, 2).setValue(parentObj.children[i].name)
    writeKIObjAsRowOfSheet(parentObj.children[i].kis[thisWeek], currSheet, kiHeaderPositionsObj, currRow);


  }


  currRow++;



  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();


  tempCell.setValue("Area Total:");

  writeKIObjAsRowOfSheet(overallKIs, currSheet, kiHeaderPositionsObj, currRow);



  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow);

  currRow++;

  currRow = writeHistory(parentObj, currSheet, sheetKIHeadersTextArr, kiHeaderPositionsObj, SHOW_THESE_KIS_ON_LINE_CHART, KI_CHART_TITLE, currRow);

  // Build The Conditional Formatting For History
  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow - NUMBER_OF_WEEKS_FOR_HISTORY, 1, NUMBER_OF_WEEKS_FOR_HISTORY);

  // Adding The Boarders
  currSheet.getRange(1, 1, currRow - 1, returnLargestObjectValue(kiHeaderPositionsObj))
    .setBorder(true, true, true, true, true, true);

  currRow = currRow + 17;

  currRow = writeHoursReport(parentObj, currSheet, sheetHoursHeadersTextArr, headerStartingColumnPos, currRow, " Area Finding Hours Report");


  currSheet.setConditionalFormatRules(rules);

  if(showCreateSheetsOutput) {Logger.log("New Spreadsheet ID: " + currSpreadsheet.getId());}

  return currSpreadsheet;
}

/*
**********************************************************************************************************************************************************************************************
*/
function createDistrictReport(parentObj) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let parentFolder = parentObj.folder;
  let tempName = parentFolder.getName();
  let overallKIs = parentObj.kis[thisWeek];
  let headerStartingColumnPos = 3;
  let currRow = 1;
  let currObj = {};
  let sheetKIHeadersTextArr = KI_SHEET_HEADERS_TEXT_ARR;
  let sheetHoursHeadersTextArr = FINDING_HOURS_SHEET_HEADERS_TEXT_ARR;
  let lastNamesString = "";
  let currSpreadsheet = checkCreateNewSpreadSheet(parentFolder, tempName);
  let currSheet = currSpreadsheet.getSheets()[0];
  let rules = [];
  let tempImportArray = [];


  setupSheet(currSheet);


  currSheet.getRange(1, 1).setValue(parentObj.name + " District KI Report"); // Set the corner label for the sheet

  currRow = ROW_FOR_KIS_TO_START - 1; 
  let kiReportHeader = writeKIReportHeader(sheetKIHeadersTextArr, currSheet, currRow, headerStartingColumnPos);

  let kiHeaderPositionsObj = getHeaderPositionsArray(sheetKIHeadersTextArr, kiReportHeader);

  currRow++;

  tempImportArray = buildDistrictKIs(rules, currSheet, parentObj, kiHeaderPositionsObj, currRow);
  rules = tempImportArray[0];
  currRow = tempImportArray[1];

  currRow = writeHistory(parentObj, currSheet, sheetKIHeadersTextArr, kiHeaderPositionsObj, SHOW_THESE_KIS_ON_LINE_CHART, KI_CHART_TITLE, currRow);
  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow - NUMBER_OF_WEEKS_FOR_HISTORY, parentObj.children.length, NUMBER_OF_WEEKS_FOR_HISTORY);

  // Adding The Boarders
  currSheet.getRange(1, 1, currRow - 1, returnLargestObjectValue(kiHeaderPositionsObj))
    .setBorder(true, true, true, true, true, true);

  currRow = currRow + 17;

  currRow = writeHoursReport(parentObj, currSheet, sheetHoursHeadersTextArr, headerStartingColumnPos, currRow, " District Finding Hours Report");

  currSheet.setConditionalFormatRules(rules);

  if(showCreateSheetsOutput) {Logger.log("New Spreadsheet ID: " + currSpreadsheet.getId());}
  return currSpreadsheet;
}

/*
**********************************************************************************************************************************************************************************************
*/

function createZoneReport(parentObj) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let parentFolder = parentObj.folder;
  let tempName = parentFolder.getName();
  let sheetKIHeadersTextArr = KI_SHEET_HEADERS_TEXT_ARR;
  let sheetHoursHeadersTextArr = FINDING_HOURS_SHEET_HEADERS_TEXT_ARR;
  let headerStartingColumnPos = 3;
  let currRow = 1;
  let currSpreadsheet = checkCreateNewSpreadSheet(parentFolder, tempName);
  let rules = [];
  let tempImportArray = [];



  let currSheet = currSpreadsheet.getSheets()[0];


  setupSheet(currSheet);


  currSheet.getRange(currRow, 1).setValue(parentObj.name + " Zone KI Report");

  let kiReportHeader = writeKIReportHeader(sheetKIHeadersTextArr, currSheet, currRow, headerStartingColumnPos);
  let kiHeaderPositionsObj = getHeaderPositionsArray(sheetKIHeadersTextArr, kiReportHeader, headerStartingColumnPos);

  currRow++;

  tempImportArray = buildZoneKIs(rules, currSheet, parentObj, kiHeaderPositionsObj, currRow);
  rules = tempImportArray[0];
  currRow = tempImportArray[1];

  currRow = writeHistory(parentObj, currSheet, sheetKIHeadersTextArr, kiHeaderPositionsObj, SHOW_THESE_KIS_ON_LINE_CHART, KI_CHART_TITLE, currRow);
  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow - NUMBER_OF_WEEKS_FOR_HISTORY, parentObj.children.length, NUMBER_OF_WEEKS_FOR_HISTORY);

  // Adding The Boarders
  currSheet.getRange(1, 1, currRow - 1, returnLargestObjectValue(kiHeaderPositionsObj))
    .setBorder(true, true, true, true, true, true);

  currRow = currRow + 17;

  currRow = writeHoursReport(parentObj, currSheet, sheetHoursHeadersTextArr, headerStartingColumnPos, currRow, " Zone Finding Hours Report");

  currSheet.setConditionalFormatRules(rules);
  if(showCreateSheetsOutput) {Logger.log("New Spreadsheet ID: " + currSpreadsheet.getId());}
  return currSpreadsheet;
}

/*
**********************************************************************************************************************************************************************************************
*/

function createMissionReport(parentObj) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let parentFolder = parentObj.folder;
  let tempName = parentFolder.getName();
  let overallKIs = parentObj.kis[thisWeek];
  let sheetKIHeadersTextArr = KI_SHEET_HEADERS_TEXT_ARR;
  let sheetHoursHeadersTextArr = FINDING_HOURS_SHEET_HEADERS_TEXT_ARR;
  let headerStartingColumnPos = 3;
  let currRow = 1;
  // let currDistrictObj = {};
  let currSpreadsheet = checkCreateNewSpreadSheet(parentFolder, tempName);
  let rules = [];
  let tempImportArray = [];
  let missionSOEMultiplier = missionFindSOEMultiplier(parentObj);

  let currSheet = currSpreadsheet.getSheets()[0];


  setupSheet(currSheet);


  currSheet.getRange(1, 1).setValue("Omega KI Report");

  let kiReportHeader = writeKIReportHeader(sheetKIHeadersTextArr, currSheet, 1, headerStartingColumnPos);
  let kiHeaderPositionsObj = getHeaderPositionsArray(sheetKIHeadersTextArr, kiReportHeader, headerStartingColumnPos);

  currRow++;

  for(let i = 0; i < parentObj.children.length; i++) {


    tempImportArray = buildZoneKIs(rules, currSheet, parentObj.children[i], kiHeaderPositionsObj, currRow);
    rules = tempImportArray[0];
    currRow = tempImportArray[1];

  }

  // Build Mission Total KI Row
  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();
  tempCell.setValue("Mission Total:");
  writeKIObjAsRowOfSheet(overallKIs, currSheet, kiHeaderPositionsObj, currRow);
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(kiHeaderPositionsObj))
    .setBackground(MISSION_TOTAL_COLOR)
    .setFontColor(WHITE);


  // Adding Conditional Formatting for the totals, where each area all adds together the standard of excellence
  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow, missionSOEMultiplier);

  currRow++;

  currRow = writeHistory(parentObj, currSheet, sheetKIHeadersTextArr, kiHeaderPositionsObj, SHOW_THESE_KIS_ON_LINE_CHART, KI_CHART_TITLE, currRow);
  rules = buildKICondionalFormating(rules, currSheet, kiHeaderPositionsObj, currRow - NUMBER_OF_WEEKS_FOR_HISTORY, missionSOEMultiplier, NUMBER_OF_WEEKS_FOR_HISTORY);

  // Adding The Boarders
  currSheet.getRange(1, 1, currRow - 1, returnLargestObjectValue(kiHeaderPositionsObj))
    .setBorder(true, true, true, true, true, true);

  currRow = currRow + 17;
  currRow = writeHoursReport(parentObj, currSheet, sheetHoursHeadersTextArr, headerStartingColumnPos, currRow, " Mission Finding Hours Report");

  currSheet.setConditionalFormatRules(rules);

  if(showCreateSheetsOutput) {Logger.log("New Spreadsheet ID: " + currSpreadsheet.getId());}
  return currSpreadsheet;
}

function setupSheet(currSheet) {
  let fullSheet = currSheet.getRange(1,1, 200, 100); // Just selecting the working area in the sheet
  let firstRow = currSheet.getRange(1, 1, 1, 100) // Get the first row
  firstRow.setWrap(true);
  fullSheet.setHorizontalAlignment("center");
  fullSheet.setVerticalAlignment("middle");

  currSheet.getRange(1, 1, 1, 2).merge();
}

function buildZoneKIs(rules, currSheet, parentObj, headerPositionsObj, currRow) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let overallKIs = parentObj.kis[thisWeek];
  let currDistrictObj = {};
  let zoneSOEMultiplier = zoneFindSOEMultiplier(parentObj);

  // Make The Zone Header
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj)).merge()
    .setValue(parentObj.name + " Zone")
    .setBackground(ZONE_HEADER_COLOR)
    .setFontColor(WHITE);


  currRow++;

  for(let i = 0; i < parentObj.children.length; i++) {


    currDistrictObj = parentObj.children[i];
    tempImportArray = buildDistrictKIs(rules, currSheet, currDistrictObj, headerPositionsObj, currRow);
    rules = tempImportArray[0];
    currRow = tempImportArray[1];


  }

  // Build Zone Total KI Row
  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();
  tempCell.setValue("Zone Total:");
  writeKIObjAsRowOfSheet(overallKIs, currSheet, headerPositionsObj, currRow);
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj))
    .setBackground(ZONE_TOTAL_COLOR)
    .setFontColor(WHITE);

  rules = buildKICondionalFormating(rules, currSheet, headerPositionsObj, currRow, zoneSOEMultiplier);

  currRow++;
  return [rules, currRow];
}

function buildDistrictKIs(rules, currSheet, parentObj, headerPositionsObj, currRow) {
  let thisWeek = 0; // This shows the first week in the array with 6 weeks of history in every ki array of objects
  let overallKIs = parentObj.kis[thisWeek];
  let tempDistrictKIStartingRow = 1;

  // Make The District Header
  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();
  tempCell.setValue(parentObj.name + " District");
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj)).setBackground(DISTRICT_HEADER_COLOR);



  currRow++
  tempDistrictKIStartingRow = currRow;

  // Building the area ki rows
  for(let i = 0; i < parentObj.children.length; i++) {


    currObj = parentObj.children[i];
    currSheet.getRange(currRow, 1).setValue(currObj.name)
    currSheet.getRange(currRow, 2).setValue(getLastNames(currObj)) //This will get the last names of the leaders of the current area
    writeKIObjAsRowOfSheet(currObj.kis[thisWeek], currSheet, headerPositionsObj, currRow);
    currRow++;

  }

  // Setting the area KI rows conditional formatting
  rules = buildKICondionalFormating(rules, currSheet, headerPositionsObj, tempDistrictKIStartingRow, 1, currRow - tempDistrictKIStartingRow);

  // Build District Total KI Row
  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();
  tempCell.setValue("District Total:");
  writeKIObjAsRowOfSheet(overallKIs, currSheet, headerPositionsObj, currRow);
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj) - SOE.length).setBackground(DISTRICT_TOTAL_COLOR);


  // Adding Conditional Formatting for the totals, where each area all adds together the standard of excellence
  rules = buildKICondionalFormating(rules, currSheet, headerPositionsObj, currRow, parentObj.children.length);

  currRow++;
  return [rules, currRow];
}

function buildKICondionalFormating(rules, currSheet, headerPositionsObj, startRow, multiplier = 1, numRow = 1, numColumn = 1) {

  for(let i = 0; i < SOE.length; i++) {
    rules = buildConditionalFormating(
      rules, 
      currSheet, 
      SOE[i].ammount * multiplier, 
      startRow, 
      headerPositionsObj[SOE[i].name], 
      numRow,
      numColumn
    );
  }

  return rules;
}

function buildConditionalFormating(rules, currSheet, standerdOfExcellence, startRow, startColumn, numRow = 1, numColumn = 1) {


  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(standerdOfExcellence)
    .setBackground(GREEN)
    .setFontColor(BLACK)
    .setRanges([currSheet.getRange(startRow, startColumn, numRow, numColumn)])
    .build()
  );

  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween((standerdOfExcellence/2), (standerdOfExcellence - 0.000001)) // A small number so it's not exactly equal
    .setBackground(YELLOW)
    .setFontColor(BLACK)
    .setRanges([currSheet.getRange(startRow, startColumn, numRow, numColumn)])
    .build()
  );

  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(standerdOfExcellence/2)
    .setBackground(RED)
    .setFontColor(BLACK)
    .setRanges([currSheet.getRange(startRow, startColumn, numRow, numColumn)])
    .build()
  );

  return rules;
}

function missionFindSOEMultiplier(parentObj) {
  let tempMissionSOEMultiplier = 1;

  for(let i = 0; i < parentObj.children.length; i++) {
    tempMissionSOEMultiplier += zoneFindSOEMultiplier(parentObj.children[i]);
  }

  return tempMissionSOEMultiplier;
}

function zoneFindSOEMultiplier(parentObj) {
  let tempZoneSOEMultiplier = 1;


  for(let i = 0; i < parentObj.children.length; i++) {
    for(let j = 0; j < parentObj.children[i].children.length; j++) {

      tempZoneSOEMultiplier++;

    }
  }

  return tempZoneSOEMultiplier;
}

function getLastNames(inputObj) {
  let tempConcatMissionaries = [];

  for(let i = 0; i < inputObj.leaders.length; i++) {
    tempConcatMissionaries.push(inputObj.leaders[i].lastName);
  }

  return tempConcatMissionaries.join("/");
}

// Check inside a folder to see if there is another folder with a name, 
// if so, then return it. If not, create it, then return it
function checkCreateNewSpreadSheet(parentFolder, newSpreadSheetName) {
  if(checkInsideFolderIfSpreadSheetNameAlreadyExists(parentFolder, newSpreadSheetName)) {


    if(showCreateSheetsOutput) {
      Logger.log(
        'Spreadsheet Named "' + newSpreadSheetName + '" In "' + 
        parentFolder.getName() + '" Folder Was Found, Deleting All And Creating A New One'
      );
    }

    let spreadsheetFileIteratorInParentFolder = parentFolder.getFilesByType(MimeType.GOOGLE_SHEETS);

    while(spreadsheetFileIteratorInParentFolder.hasNext()) {
      spreadsheetFileIteratorInParentFolder.next().setTrashed(true) 
    }

    return createSpreadSheetInFolder(newSpreadSheetName, parentFolder);


  } else {


    if(showCreateSheetsOutput) {Logger.log('Spreadsheet Named "' + newSpreadSheetName + '" In "' + parentFolder.getName() + '" Folder Was Not Found, Currently Creating');}
    return createSpreadSheetInFolder(newSpreadSheetName, parentFolder);

  }
}

function checkInsideFolderIfSpreadSheetNameAlreadyExists(parentFolder, newSpreadSheetName) {
  let spreadsheetFileIteratorInParentFolder = parentFolder.getFilesByType(MimeType.GOOGLE_SHEETS);
  let tempName = '';

  while(spreadsheetFileIteratorInParentFolder.hasNext()) {
    tempName = spreadsheetFileIteratorInParentFolder.next().getName();
    if(tempName === newSpreadSheetName) {
      return true;
    }
  }


  return false;
}

function writeHistory(parentObj, inputSheet, sheetHeadersTextArr, headerPositionsObj, toInludeOnChart, chartTitle, currRow) {

  let kis = parentObj.kis;
  let sundays = getSundaysArray(mostRecentSunday);
  let headerStartingColumnPos = COLUMN_FOR_KIS_TO_START;

  if(!hasData(kis)) {
    return undefined; 
  }

  inputSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj)).merge()
    .setValue(sheetFormatText.kiHistoryHeader)
    .setBackground(ZONE_HEADER_COLOR)
    .setFontColor(WHITE);

  currRow++;

  // This is so that the chart can be built correctly and easily, it just adds it and hides the 
  //information so that the lines on the line graph chart have labels (This was the easiest way I found to do it)
  writeKIReportHeader(sheetHeadersTextArr, inputSheet, currRow, headerStartingColumnPos)
  inputSheet.hideRow(inputSheet.getRange(currRow, 1)); 

  currRow++;

  for(let i = 0; i < kis.length; i++) {


    inputSheet.getRange(currRow, 1, 1, 2)
      .merge()
      .setValue( String(sundays[i].getFullYear()) + "/" + String(sundays[i].getMonth() + 1) + "/" + String(sundays[i].getDate()) );

    writeKIObjAsRowOfSheet(kis[i], inputSheet, headerPositionsObj, currRow);

    currRow++;
  }

  createHistoryLineChart(inputSheet, headerPositionsObj, toInludeOnChart, chartTitle, currRow);

  return currRow;
}

function createHistoryLineChart(inputSheet, headerPositionsObj, toInludeOnChart, chartTitle, currRow) {

  let chart = inputSheet.newChart()
    .asLineChart()
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
    .setTransposeRowsAndColumns(false)
    .setNumHeaders(-1)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.SHOW_BOTH)
    .addRange(inputSheet.getRange(currRow - (NUMBER_OF_WEEKS_FOR_HISTORY + 1), 1, currRow)) // Gets The Timestamps as the X-Axis
    .setOption('bubble.stroke', '#000000')
    .setOption('useFirstColumnAsDomain', true)
    .setOption('legend.position', 'right')
    .setOption('domainAxis.direction', 1)
    .setOption('title', chartTitle)
    .setOption('treatLabelsAsText', false)
    .setOption('annotations.domain.textStyle.color', '#808080')
    .setOption('textStyle.color', '#000000')
    .setOption('legend.textStyle.fontSize', 16)
    .setOption('legend.textStyle.color', '#000000')
    .setOption('titleTextStyle.color', '#000000')
    .setOption('titleTextStyle.alignment', 'center')
    .setOption('titleTextStyle.bold', true)
    .setOption('annotations.total.textStyle.color', '#808080')
    .setOption('hAxis.direction', 1)
    .setOption('hAxis.textStyle.fontSize', 16)
    .setOption('hAxis.textStyle.color', '#000000')
    .setOption('hAxis.textStyle.bold', true)
    .setOption('vAxes.0.textStyle.fontSize', 18)
    .setOption('vAxes.0.textStyle.color', '#000000')
    .setOption('vAxes.0.textStyle.bold', true)
    .setOption('series.0.pointSize', 0)
    .setOption('series.0.lineWidth', 4)
    .setOption('series.1.pointSize', 0)
    .setOption('series.1.lineWidth', 4)
    .setOption('series.2.pointSize', 0)
    .setOption('series.2.lineWidth', 4)
    .setOption('series.3.pointSize', 0)
    .setOption('series.3.lineWidth', 4)
    .setOption('height', 313)
    .setOption('width', 1007)
    .setPosition(currRow + 1, 1, 0, 0);

  for(let i = 0; i < toInludeOnChart.length; i++) {

    chart.addRange(getHistoryChartRange(inputSheet, headerPositionsObj, toInludeOnChart[i], currRow));

  }

  inputSheet.insertChart(chart.build());
};

function getHistoryChartRange(inputSheet, headerPositionsObj, searchString, currRow) {

  return inputSheet.getRange(currRow - (NUMBER_OF_WEEKS_FOR_HISTORY + 1), headerPositionsObj[searchString], currRow);


}

function writeHoursReport(parentObj, currSheet, sheetHoursHeadersTextArr, headerStartingColumnPos, currRow, nameStr) {


  currSheet.getRange(currRow, 1, 1, 2).merge().setValue(parentObj.name + nameStr);
  let hoursReportHeader = writeKIReportHeader(sheetHoursHeadersTextArr, currSheet, currRow, headerStartingColumnPos);
  let hoursHeaderPositionsObj = getHeaderPositionsArray(sheetHoursHeadersTextArr, hoursReportHeader);
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(hoursHeaderPositionsObj)).setWrap(true);


  currRow++;

  currRow = writeHistory(parentObj, currSheet, sheetHoursHeadersTextArr, hoursHeaderPositionsObj, SHOW_THESE_HOURS_ON_LINE_CHART, HOURS_CHART_TITLE ,currRow);

  return currRow;
}

function writeKIReportHeader(sheetHeadersTextArr, inputSheet, startingRow = 1, startingColumn = 1) {
  let currColumn = startingColumn;

  for(let i = 0; i < sheetHeadersTextArr.length; i++) {
    inputSheet.getRange(startingRow, currColumn).setValue((sheetHeadersTextArr[i].text));
    currColumn++;
  }

  // Return the header row, the "[0]" at the end is because getValues returns a 
  // double array, but this function should only ever return a single dimensional array
  return inputSheet.getRange(startingRow, 1, startingRow, currColumn).getValues()[0]; 
  // Return not only what it just made, but the whole top row (including that merged box to the left of what this code writes as a header)
}

function writeKIObjAsRowOfSheet(kiObj, inputSheet, headerPositionsObj, rowOnSheetToWrite) {

  // This is to turn this into a 2D array that can then be written directly to the google 
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every iteration, 
  // which would be much slower
  let toWrite = [];
  toWrite[0] = []; 

  if(!objectIsEmpty(kiObj)) {

    for (const [kiKey, kiValue] of Object.entries(kiObj)) {
      for (const [headerKey, headerValue] of Object.entries(headerPositionsObj)) {
        // Find the Header position, then put the ki value there
        if(kiKey === headerKey) {
          toWrite[0][headerValue] = kiValue;
        }
      }
    }

    let toWriteOnlyNumbers = [toWrite[0].filter(function(inputValue) { return typeof inputValue === "number"} )];


    inputSheet.getRange(rowOnSheetToWrite, returnSmallestObjectValue(headerPositionsObj), toWriteOnlyNumbers.length, toWriteOnlyNumbers[0].length).setValues(toWriteOnlyNumbers);
  } else {
     if(showWarningWhenWritingBlankLinesToKISheet) {Logger.log("In Function 'writeKIObjAsRowOfSheet' Inside 'generateGoogleSheets' Error: KI Obj is empty! (This Will Write A Blank Line)");}
  }
}

function getHeaderPositionsArray(headerNamesArr, headerRowArr){

  let headerPositions = {};
  let tempName;
  let tempText;


  for(let i = 0; i < headerRowArr.length; i++) {
    for(let j = 0; j < headerNamesArr.length; j++) {


      tempName = headerNamesArr[j].name;
      tempText = headerNamesArr[j].text;

      if(headerRowArr[i] === tempText) {


        headerPositions[tempName] = i + 1; 


      }



    }

  }

  return headerPositions;
}

/*
Gotten from here:
https://stackoverflow.com/questions/19607559/how-to-create-a-spreadsheet-in-a-particular-folder-via-app-script/64137750#64137750

In order for this to work, the advanced drive service must be activated, instructions are inside the linked stack overflow page
*/
function createSpreadSheetInFolder(name, parentFolder) {
  let folderId = parentFolder.getId();
  let resource = {
    title: name,
    mimeType: MimeType.GOOGLE_SHEETS,
    parents: [{ id: folderId }]
  };
  let fileJson = Drive.Files.insert(resource);
  let fileId = fileJson.id;
  return SpreadsheetApp.openById(fileId);
}

/*
Gotten from here:
https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
*/
function objectIsEmpty(obj) { 
  for (var x in obj) { 
    return false; 
  }
  return true;
}

function returnSmallestArrayValue(inputArray) {
  let smallest = 1;


  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] < smallest) {
      smallest = inputArray[i];
    }
  }

  return smallest;
}

function returnSmallestObjectValue(inputObject) {
  let smallest = Object.values(inputObject)[0];


  for (const [key, value] of Object.entries(inputObject)) {
    if(value < smallest) {
      smallest = value;
    }
  }

  return smallest;
}

function returnLargestObjectValue(inputObject) {
  let largest = Object.values(inputObject)[0];


  for (const [key, value] of Object.entries(inputObject)) {
    if(value > largest) {
      largest = value;
    }
  }

  return largest;
}

function isNumber(inputValue) {
  return typeof inputValue === "number";
}

function hasData(inputVar) {

  if(inputVar == null || inputVar == undefined || inputVar == [] || inputVar == {}) {
    return false;
  }

  return true;
}


---
/*********************
```



###  Beat The Time Limit


```
*********************/ 

/** 
 "Beat the Time Limit" is because of the restriction on Google Apps Script in which 1 script can
 only run for ~6 minutes at a time, due to this restriction, the code had to
 be configured so that every so often, it checks to see how much time it has been
 running, and when it gets to over the "MAX_TIME_LIMIT", then it saves it's place,
 sets a 1 time trigger for a short amount of time later, then stops; just to be 
 started up again in a few seconds. Thereby keeping the program runtime under 6 minutes 
 This took a lot of thinking, and I (Elder Chartrand) might not have come up with
 the most elegant method, or absolutely foolproof, but my goal is for this code to
 work for at least 5 years, with very minimal maintenance 
*/

function buildingTest() {
  masterCreateKIReports();
}

function createCheckHierarchyAndFolderStructure(missionaryArray) {
  if(checkIfCasheHasString(CACHE_NAMES.hierarchy) && !checkIfCasheHasString(CACHE_NAMES.foldersCurrPositions)) { 

    Logger.log("Folder Structure Found, Retrieving From Cache");


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

  // This output is toggleable in the settings section at the beginning of the program
  if(showCreateFolderStructureTime) {Logger.log("Folder Structure Built In " + roundToDecimalPlace((new Date().getTime() - foldersCurrPositions.prossessTimeStart) / 1000 /60) + " Minutes");}



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

    Logger.log("Times Up! Minutes Taken For Folder Creation: " + roundToDecimalPlace((new Date() - start) / 1000 / 60));
    Logger.log("Total Program Minutes Taken So Far: " + roundToDecimalPlace((new Date() - new Date(foldersCurrPositions.overallTimeStart)) / 1000 / 60));
    Logger.log("Total Minutes Taken For Folder Creation So Far: " + roundToDecimalPlace((new Date() - new Date(foldersCurrPositions.prossessTimeStart)) / 1000 / 60));
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

    Logger.log("Times Up! This Instance Minutes Taken For Sheet Creation: " + roundToDecimalPlace((new Date() - start) / 1000 / 60));
    Logger.log("Total Minutes Taken For Sheet Creation So Far: " + roundToDecimalPlace((new Date() - new Date(sheetsCurrPositions.prossessTimeStart)) / 1000 / 60));
    Logger.log("Total Program Minutes Taken So Far: " + roundToDecimalPlace((new Date() - new Date(sheetsCurrPositions.overallTimeStart)) / 1000 / 60));
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
      " Minutes Out Of A Set Max Limit Of " + roundToDecimalPlace(MAX_TIME_LIMIT / 1000 / 60) + " Minutes");
    }


    if(missionHierarchy != null) {
      CacheService.getScriptCache().put(CACHE_NAMES.hierarchy, getMissionHierarchyAsString(missionHierarchy));
    }

    throw outOfTimeExceptionMessage;
  }


  if(showBeatTheTimeLimitOutput) {
    Logger.log("You're Good! Current Time Is " + roundToDecimalPlace((timeAtCheckEnter) / 1000 / 60) + 
    " Minutes Out Of A Set Max Limit Of " + roundToDecimalPlace(MAX_TIME_LIMIT / 1000 / 60) + " Minutes");
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
