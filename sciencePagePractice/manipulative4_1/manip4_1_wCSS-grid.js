var cardArray = [
  $("#adapt1"),
  $("#adapt2"),
  $("#adapt3"),
  $("#natSel1"),
  $("#natSel2"),
  $("#natSel3"),
  $("#selBr1"),
  $("#selBr2"),
  $("#selBr3"),
  $("#gills1"),
  $("#gills2"),
  $("#gills3"),
  $("#xylem1"),
  $("#xylem2"),
  $("#xylem3")
];

$.each(cardArray, function(index, value) {
  var rand = Math.floor(Math.random() * cardArray.length);
  var zIndexVal = rand;
  cardArray[index].css('z-index', "" + zIndexVal);
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
  ev.target.style.opacity = 0.5;
}
function mouseOut(ev) {
  ev.target.style.opacity = 1.0;
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



//////////////////////////////////////////////////////////////////////////
////  SECTION 1 ////
//////////////////////////////////////////////////////////////////////////


function checkDropZone(targetId, elId) {
  var targetEl = document.getElementById(targetId);
  var movingEl = document.getElementById(elId);
  if (targetEl.classList.contains("fillGreen")) {
    return true;
  } else if (checkForAdaptMatch(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        targetEl.classList.remove("fillRed");
        targetEl.classList.add("fillGreen");
        targetEl.setAttribute("ondragover", false);
        movingEl.setAttribute("draggable", false);
        return true;
      } else {
        targetEl.classList.add("fillGreen");
        targetEl.setAttribute("ondragover", false);
        movingEl.setAttribute("draggable", false);
        return true;
      }
    } else if (checkForNatSelMatch(targetId, elId)) {
      if (targetEl.classList.contains("fillRed")) {
        targetEl.classList.remove("fillRed");
        targetEl.classList.add("fillGreen");
        targetEl.setAttribute("ondragover", false);
        movingEl.setAttribute("draggable", false);
        return true;
      } else {
        targetEl.classList.add("fillGreen");
        targetEl.setAttribute("ondragover", false);
        movingEl.setAttribute("draggable", false);
        return true;
      }
      } else if (checkForSelBrMatch(targetId, elId)) {
        if (targetEl.classList.contains("fillRed")) {
          targetEl.classList.remove("fillRed");
          targetEl.classList.add("fillGreen");
          targetEl.setAttribute("ondragover", false);
          movingEl.setAttribute("draggable", false);
          return true;
        } else {
          targetEl.classList.add("fillGreen");
          targetEl.setAttribute("ondragover", false);
          movingEl.setAttribute("draggable", false);
          return true;
        }
        } else if (checkForGillsMatch(targetId, elId)) {
          if (targetEl.classList.contains("fillRed")) {
            targetEl.classList.remove("fillRed");
            targetEl.classList.add("fillGreen");
            targetEl.setAttribute("ondragover", false);
            movingEl.setAttribute("draggable", false);
            return true;
          } else {
            targetEl.classList.add("fillGreen");
            targetEl.setAttribute("ondragover", false);
            movingEl.setAttribute("draggable", false);
            return true;
          }
          } else if (checkForXylemMatch(targetId, elId)) {
            if (targetEl.classList.contains("fillRed")) {
              targetEl.classList.remove("fillRed");
              targetEl.classList.add("fillGreen");
              targetEl.setAttribute("ondragover", false);
              movingEl.setAttribute("draggable", false);
              return true;
            } else {
              targetEl.classList.add("fillGreen");
              targetEl.setAttribute("ondragover", false);
              movingEl.setAttribute("draggable", false);
              return true;
            }
            } else if (targetEl.classList.contains("fillRed")) {
              return false;
            } else {
              targetEl.classList.add("fillRed");
              return false;
            }

}

function checkForAdaptMatch(targetId, elId) {
  if (targetId === "adaptTarget1" || targetId === "adaptTarget2" || targetId === "adaptTarget3") {
    if (elId === "adapt1" || elId === "adapt2" || elId === "adapt3") {
      return true;
    }
  }
  return false;
}

function checkForNatSelMatch(targetId, elId) {
  if (targetId === "natSelTarget1" || targetId === "natSelTarget2" || targetId === "natSelTarget3") {
    if (elId === "natSel1" || elId === "natSel2" || elId === "natSel3") {
      return true;
    }
  }
  return false;
}

function checkForSelBrMatch(targetId, elId) {
  if (targetId === "selBrTarget1" || targetId === "selBrTarget2" || targetId === "selBrTarget3") {
    if (elId === "selBr1" || elId === "selBr2" || elId === "selBr3") {
      return true;
    }
  }
  return false;
}

function checkForGillsMatch(targetId, elId) {
  if (targetId === "gillsTarget1" || targetId === "gillsTarget2" || targetId === "gillsTarget3") {
    if (elId === "gills1" || elId === "gills2" || elId === "gills3") {
      return true;
    }
  }
  return false;
}

function checkForXylemMatch(targetId, elId) {
  if (targetId === "xylemTarget1" || targetId === "xylemTarget2" || targetId === "xylemTarget3") {
    if (elId === "xylem1" || elId === "xylem2" || elId === "xylem3") {
      return true;
    }
  }
  return false;
}
