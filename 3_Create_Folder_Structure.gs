/************************
  Create Folder Structure
************************/  

function createFolderStructure(missionHierarchy) {
  let rootFolder = DriveApp.getFolderById(ARCHIVE_FOLDER_ID);
  let rootFolderID = rootFolder.getId();
  let currentFolder = rootFolder;

  // Set the name for the month folder so that they are in alphebetical order in the file view
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

    //Logger.log("Curent Zone Folder: " + missionHierarchy.children[foldersCurrPositions.zone].name);
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
    
    // This output is toggelable in the settings section at the begining of the program
    if(showCreateFolderStructureOutput) {Logger.log('Folder Named "' + newFolderName + '" In "' + currentFolder.getName() + '" Folder Was Found, Entering');}
    
    return currentFolder.getFoldersByName(newFolderName).next();
  } else {

    // This output is toggelable in the settings section at the begining of the program
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

    // This output is toggelable in the settings section at the begining of the program
    if(showCreateFolderStructureOutput) {Logger.log("Emailed And Shared With " + newViewerList);}

  } else {
  
    // This output is toggelable in the settings section at the begining of the program
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
 * This was modified in order to accept a normal string, then it converts it.
 * It works on the principal of the GMail Api, but for google apps script under 
 * the name of "Advanced Gmail Service". It is much more complecated but also much
 * more powerfull than "GmailApp" which is built into google apps script natively
 * 
 * Namely, it allows you to send way over 100 emails in one day. During my testing,
 * I was able to send over 600 emails in the space of around 10 minuites
 * 
 * Origional Function: http://stackoverflow.com/a/35073785/1677912
 * This is how I made the origional funciton work: https://localcoder.org/google-rest-api-message-in-an-rfc-2822-formatted-and-base64url-encoded-string
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

