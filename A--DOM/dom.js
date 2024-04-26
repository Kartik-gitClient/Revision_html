//DOM IN JS IS A VERY IMPORTANT TOPIC 
//DOM IS DOCUMENT OBJECT MODEL
//THERE IS A OBJECT WINDOW IN A WEBPAGE
//WINDOW OBJECT  IS A GLOBAL OBJECT
//****TO ACCESS HTML ELEMENT IN JS WE USE */
/*document.getElementById("#mydiv");
//we can also store it in a variable
let heading=document.getElementById("mydiv");
console.log("THE HEADING IS" , heading);
let text=document.getElementsByClassName("myparagraph");
console.log("MY PARAGRAPH IS" , text);
console.dir(text);
///by tags
let para=document.getElementsByTagName("p");
console.log("MY PARAGRAPHS ARE:-" , para)
console.dir(para);
//query selectors are better 
let element=document.querySelector("p");//returns first element of the tags
console.dir(element);
//TO GET ALL ELEMENTS BY QUERY SELECTOR WE USE :-
let ALLele=document.querySelectorAll("p");
console.dir(ALLele);
//BY SELECTING CLASS
let ALLclass=document.querySelectorAll(".myintroduction");
console.dir(ALLclass);
//properties of elements
//TAG NAME:- RETURN TAG FOR ELEMENT NODES
//INNERtEXT:RETURNS THE TEXT OF THE ELEMENT AND ALL ITS CHILDREN//
//INNERtEXT- RETURNS THE PLAIN TEXT OR HTML CONTENTS IN THE ELEMENTWITH HTML TAG INFO
//we can mutate HTML TAG INFO by these properties
//TEXTCONTENT :-RETURNS TEXTUAL CONTENT EVEN FOR HIDDEN ELEMENTS , can mutate hidden elements
// BY TEXT CONTENT YOU CAN MUTATE HTML TAGS AND INFO
//ADDING TEXT IN RUNTIME
//ADD MORE INFO BY PROPERTIES
let Myinfo=document.querySelector("div");
console.dir(Myinfo);
Myinfo.innertext= Myinfo.innerText+"TODAY, I M LEARNING DOM IN JS";
//ACCESSING SAME DIVS BUT MUTATING DIFFERENTLY
let DivText=document.querySelectorAll(".box");
console.log(DivText)
//now if we want to edit different divs with same id or class we use indexing like array and strings
DivText[0].innerText=DivText+"THIS IS MY DIV BOX 1 AND THIS IS UNIQUE";
DivText[1].innerText=DivText+"THIS IS MY 2ND DIV AND THIS IS UNIQUE #2";
DivText[2].innerText=DivText+"THIS IS MY 3RD DIV AND THIS IS UNIQUE #3";
//BY FOR LOOP
let idx=1;
for(let text of DivText){
    idx++
    text.innerText="THIS IS MY DIV BOX 1 AND THIS IS UNIQUE"+ idx;
}
    
    
//DOM MANUPULATION
//ATTRIBUTES
//getAttribute( attri )//tve reload enabled.
4
Newform.js:9 form submitted....
﻿
WE USE:-
let BTN=document.createElement("button");
BTN.innerText="THIS IS A BUTTON ";
console.log("new button");
//NOW WE HAVE SUCCESSFULLY MADE A BUTTON  IN JS BUT TO DISPLAY THIS IN HTML
//WE HAVE DIFFERENT METHODS 
//-->node.appen(el)adds at the end of node(inside)
//-->node.prepend(el)adds at the start of node(inside)
//-->node.before( el)adds before the  node(outside);
//-->node.after( el )adds afterthe node
//NOW TO ADD THE Above button  , WE FIRST ACCES  DIV
let Btndiv=document.querySelector("div")
Btndiv.append(BTN); 
Btndiv.prepend(BTN);
Btndiv.before(BTN);
Btndiv.after(BTN);
//ADDING MORE THINGS
let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>HII  THIS IS MY NWE HAEDING";
document.querySelector("body").prepend(newHeading);
//SO TO DELETE ANY ELEMENT IN THIS WE USE 
//node.remove 
//FOR EG:- IF WE WANT TO DELETE HEADING 
//-->newHeading.remove()   */
//*****question :- CREATE A BUTTON ELEMENT AND GIVE IT STYLE */
let newBTN=document.createElement("button");
newBTN.innerText="HII I AM A BUTTOM";
newBTN.style.backgroundColor="royalBlue";
newBTN.style.color="white";
newBTN.style.borderRadius="10px";
newBTN.style.height="50px";
newBTN.style.width="100px";
let body=document.querySelector("body");
body.prepend(newBTN);
//now IN JS WE CAN GIVE DIFFEERENT CLASSES TO JS TO 
//AND THIS IS DONE BY CLASS LIST
//now if we want tostyle this btn by css and if we forget
//its class we use classlist.add or remove
//newBTN.classList.append
//THIS IS DONE BECAUSE THE STYLE IS OVERWRITTEN IF WE GIVE STYLE
//TO SAME ELEMENT BY CSS THE NEW STYLE OVERWRITES THE PREVIOUS ONE
//SO, THATS WHY WQE USE CLASS LIST 