/**************************
  Create Mission Hierarchy
**************************/ 

function createHierarchy(missionaryArray) {
  var start = new Date();

  //This is the place that the famous "missionHierarchy" is actualy declared and instancuated
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
    
    missionHierarchy.children[tempZonePos].children[tempDistrictPos].children[tempAreaPos].leaders.push(missionaryArray[i]); // Add Area Leaders (Just the area missionaires who cover there)
    

    for(let j = 0; j < missionaryArray[i].unit.length; j++) { //Inner Loop becase there are ususaly more than one ward per area
      tempUnitName = missionaryArray[i].unit[j];
      tempUnitPos = checkAddMissionHierarchyObjReturnPos(missionHierarchy.children[tempZonePos].children[tempDistrictPos].children[tempAreaPos].children, tempUnitName, "unit");
    }


  }

  // This output is toggelable in the settings section at the begining of the program
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

// This is so he is automaticly emailed with the KI report every week
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

// You can use this for debugging purpeses if you want, but I would recomend just logging the whole thing out to the Google Doc, "Long Logs"
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


