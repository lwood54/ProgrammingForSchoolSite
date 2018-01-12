var cardArray = [];
function addToCardArray(collectionObj) {
  for(var i = 0; i < collectionObj.length; i++) {
    cardArray.push(collectionObj[i]);
  }
}

// collecting all the cards for the stack
var col1CardCollection = document.getElementsByClassName("forCol1");
addToCardArray(col1CardCollection);

var col2CardCollection = document.getElementsByClassName("forCol2");
addToCardArray(col2CardCollection);

var col3CardCollection = document.getElementsByClassName("forCol3");
addToCardArray(col3CardCollection);

var col4CardCollection = document.getElementsByClassName("forCol4");
addToCardArray(col4CardCollection);

var col5CardCollection = document.getElementsByClassName("forCol5");
addToCardArray(col5CardCollection);

console.log(cardArray);

var greenCount = 0;
var redCount = 0;

cardArray.forEach(function(element) {
  var rand = Math.floor(Math.random() * cardArray.length);
    var zIndexVal = rand;
    var index = cardArray.indexOf(element);
    cardArray[index].style.zIndex = zIndexVal;
});

// collect all items to be draggable and droppable and put them in an array
var collectionOfDroppables = document.getElementsByClassName("section1Choices");
for(var i = 0; i < collectionOfDroppables.length; i++) {
   collectionOfDroppables[i].draggable = true;
   collectionOfDroppables[i].onmouseover = mouseOver;
   collectionOfDroppables[i].onmouseout = mouseOut;
   collectionOfDroppables[i].ondragstart = drag;
 }

var collectionOfDropZones = document.getElementsByClassName("dropZone");
for(var i = 0; i < collectionOfDropZones.length; i++) {
  collectionOfDropZones[i].ondrop = drop;
  collectionOfDropZones[i].ondragover = allowDrop;
}

function mouseOver(ev) {
  ev.target.style.opacity = 0.75;
}
function mouseOut(ev) {
  ev.target.style.opacity = 1.0;
}


function updateScore() {
  scoreNumberEl = document.getElementById("number");
  scoreWordEl = document.getElementById("scoreWord");
  scoreNumberEl.innerHTML = redCount;
  document.getElementById("score").innerHTML;
  var percentRight = Math.ceil((15 - redCount)/15 * 100);
  if(greenCount === 15) {
    scoreWordEl.innerHTML = "Score";
    scoreNumberEl.innerHTML = percentRight + "%";
    scoreNumberEl.style.paddingLeft = "15%";
    var button = document.createElement("button");
    var section1Div = document.getElementById("section1ChoicesContainer");
    if (percentRight >= 70) {
      alert("link in div to next challenge")
      // button.innerHTML = "NEXT CHALLENGE";
      // section1Div.appendChild(button);
      // button.addEventListener ("click", function() {
      //   alert("went to next challenge");
    } else {
      alert("link in div to refresh page")
      // button.innerHTML = "TRY AGAIN";
      // section1Div.appendChild(button);
      // button.addEventListener ("click", function() {
      //   alert("refreshed the page");
    }
  }
}

// on drag event, make droppable
// NOTE: with .setData("text", data) we are choosing what to label our data as, we are setting the "text",
// then later, we are "getting" that "text" which is the id in this case...then using that id to append it
// to the event.target
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// on drop event, place element in new location, appending as a child element
function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var elId = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(elId));
  checkDropZone(ev.target.id, elId);
}

////////////////////////////////////////////////////////////////////////
//  SECTION 1 ////
////////////////////////////////////////////////////////////////////////

function checkDropZone(targetId, elId) {
  var targetEl = document.getElementById(targetId);
  var movingEl = document.getElementById(elId);
  if (targetEl.classList.contains("fillGreen")) {
    return true;
  } else if (checkForCol1(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        whenRedToTrue(targetEl, movingEl);
      } else {
        whenBlankToTrue(targetEl, movingEl);
      }
    } else if (checkForCol2(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        whenRedToTrue(targetEl, movingEl);
      } else {
        whenBlankToTrue(targetEl, movingEl);
      }
    } else if (checkForCol3(targetId, elId)) {
        if (targetEl.classList.contains("fillRed")) {
          whenRedToTrue(targetEl, movingEl);
        } else {
          whenBlankToTrue(targetEl, movingEl);
        }
      } else if (checkForCol4(targetId, elId)) {
          if (targetEl.classList.contains("fillRed")) {
            whenRedToTrue(targetEl, movingEl);
          } else {
            whenBlankToTrue(targetEl, movingEl);
          }
        } else if (checkForCol5(targetId, elId)) {
            if (targetEl.classList.contains("fillRed")) {
              whenRedToTrue(targetEl, movingEl);
            } else {
              whenBlankToTrue(targetEl, movingEl);
            }
            } else if (targetEl.classList.contains("fillRed")) {
              redCount++;
              updateScore();
              return false;
            } else {
              targetEl.classList.add("fillRed");
              redCount++;
              updateScore();
              return false;
            }
}

function whenRedToTrue(targetEl, movingEl) {
  targetEl.classList.remove("fillRed");
  targetEl.classList.add("fillGreen");
  greenCount++;
  updateScore();
  targetEl.setAttribute("ondragover", false);
  movingEl.setAttribute("draggable", false);
  return true;
}

function whenBlankToTrue(targetEl, movingEl) {
  targetEl.classList.add("fillGreen");
  greenCount++;
  updateScore();
  targetEl.setAttribute("ondragover", false);
  movingEl.setAttribute("draggable", false);
  return true;
}

function checkForCol1(targetId, elId) {
  var targetClasses = document.getElementById(targetId);
  var choiceEl = document.getElementById(elId);
  if (targetClasses.classList.contains("targetCol1")) {
    if (choiceEl.classList.contains("forCol1")) {
      return true;
    }
  }
  return false;
}

function checkForCol2(targetId, elId) {
  var targetClasses = document.getElementById(targetId);
  var choiceEl = document.getElementById(elId);
  if (targetClasses.classList.contains("targetCol2")) {
    if (choiceEl.classList.contains("forCol2")) {
      return true;
    }
  }
  return false;
}

function checkForCol3(targetId, elId) {
  var targetClasses = document.getElementById(targetId);
  var choiceEl = document.getElementById(elId);
  if (targetClasses.classList.contains("targetCol3")) {
    if (choiceEl.classList.contains("forCol3")) {
      return true;
    }
  }
  return false;
}

function checkForCol4(targetId, elId) {
  var targetClasses = document.getElementById(targetId);
  var choiceEl = document.getElementById(elId);
  if (targetClasses.classList.contains("targetCol4")) {
    if (choiceEl.classList.contains("forCol4")) {
      return true;
    }
  }
  return false;
}

function checkForCol5(targetId, elId) {
  var targetClasses = document.getElementById(targetId);
  var choiceEl = document.getElementById(elId);
  if (targetClasses.classList.contains("targetCol5")) {
    if (choiceEl.classList.contains("forCol5")) {
      return true;
    }
  }
  return false;
}
