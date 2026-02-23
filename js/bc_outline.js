"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Michael Santos
   Date:   

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

/* Generate an outline based on h1 on through h6 headings in the source document */

window.addEventListener("load", makeOutline);

function makeOutline() {
   // Location of the document outline
   var outline = document.getElementById("outline");

   // Source document for the outline
   var source = document.getElementById("doc");

   var mainHeading = document.createElement("h1");
   var outlineList = document.createElement("ol");
   var headingText = document.createTextNode("Outline");

   mainHeading.appendChild(headingText);
   outline.appendChild(mainHeading);
   outline.appendChild(outlineList);
}

function createList(source, outlineList) {
   // Headings for the outline
   var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

   // Previous Level of the heading
   var prevLevel = 0;

   /* Loop through all of the child nodes of source article until no child nodes are left */

   for (var n = source.firstChild; n !== null; n = n.nextSibling) {
      //Examine only article headings
      var headLevel = headings.indexOf(n.nodeName);

      if (headLevel !== -1) {
         var listElem = document.createElement("li");
         listElem.innerHTML = n.firstChild.nodeValue;
        if (headLevel === prevLevel) {
         // Append the list item to the current list
         outlineList.appendChild(listElem);
        } else if (headLevel > prevLevel) {
         // Start a new nested list
         var nestedList = document.createElement("ol");
         nestedList.appendChild(listElem);
         // Append nested list to last item in the current list
         outlineList.lastChild.appendChild(nestedList);
         // Change the current list to the nested list
         outlineList = nestedList;
         // Start a new nested list
        } else {
         // Append the list item to a higher list
        }

         //Update the value of PrevLevel
         prevLevel = headLevel;
      }
   }
}


