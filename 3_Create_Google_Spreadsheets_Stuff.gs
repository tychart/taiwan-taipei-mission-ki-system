/*******************************
  Generate All The Google Sheets
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

  // This output is toggelable in the settings section at the begining of the program
  if(showCreateGoogleSheetsTime) {Logger.log("Finished Building All Spreadsheets In " + roundToDecimalPlace((new Date() - start) / 1000 / 60) + " Minuites");}
  
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

  // Build The Conditional Formating For History
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
  
  // Adding Conditional Formating for the totals, where each area all adds together the standard of excelence
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

  // Setting the area KI rows conditional formating
  rules = buildKICondionalFormating(rules, currSheet, headerPositionsObj, tempDistrictKIStartingRow, 1, currRow - tempDistrictKIStartingRow);

  // Build District Total KI Row
  tempCell = currSheet.getRange(currRow, 1, 1, 2).merge();
  tempCell.setValue("District Total:");
  writeKIObjAsRowOfSheet(overallKIs, currSheet, headerPositionsObj, currRow);
  currSheet.getRange(currRow, 1, 1, returnLargestObjectValue(headerPositionsObj) - SOE.length).setBackground(DISTRICT_TOTAL_COLOR);
  
  // Adding Conditional Formating for the totals, where each area all adds together the standard of excelence
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
  //information so that the lines on the line graph chart have labels (This was the easist way I found to do it)
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
  // double array, but this function should only ever return a single dimentional array
  return inputSheet.getRange(startingRow, 1, startingRow, currColumn).getValues()[0]; 
  // Return not only what it just made, but the whole top row (including that merged box to the left of what this code writes as a header)
}

function writeKIObjAsRowOfSheet(kiObj, inputSheet, headerPositionsObj, rowOnSheetToWrite) {

  // This is to turn this into a 2D array that can then be written directly to the google 
  // sheet with 1 call to the "SpreadsheetApp" service, rather than a loop calling it every itteration, 
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

In order for this to work, the advanced drive service must be activited, instructions are inside the linked stack overflow page
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




