//MAKING A NON-PRIMITIVE DATATYPE (OBJECT)//

//ALL DATA TYPES IN JAVA SCRIPT//
console.log("PRIMITIVE DATA TYPES");
console.log("JUST LIKE:- NUMBER, STRING, BOOLEAN, NULL UNDEFINED,SYMBOL,BIGINT 1ST");
const profile = {
  name: "kartik",
  followers: 500,
  followings: 600,
  posts: 0,
};
console.log(profile);
const loginPage={
  name:"kartik",
  age: 21,
  qualification: "BCA",
  email_id:"xyz@gmail.com",
  password:12345678,
}
console.log(loginPage);
//all opreators in javascript//
const opreatorinJS={
  addition:"+",
  substraction:"-",
  multiplication:"*",
  division:"/",
}
console.log(opreatorinJS);

/*there are unary opreators too in js they are
increment: which ,means a++, which states a+1
decrement:which ,means a--, which states a-1*/
const unaryopreator={
  incrementop:"a++",
  decrementop:"a--",
} 

let a = 9;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("comparision oprteators:-");
console.log("a==b" , a==b);
console.log("a>b" , a>b);
console.log("a<b" , a<b);
console.log("a<b" , a<b);
console.log("a!=b" , a!=b);
//increment on a a++
console.log("a++ this is post decrement", a++ );
//if we print a now the output will be 11//
//this is post increment//
//increment on a ++a
console.log("++a , this is pre increment" , ++a);
//here, a will directly be assigned as 11
//this is pre increment//
//it is same in decrement too!
//assignment opreators
console.log("assignment opreators");
console.log("modulus,a%=4 " , a%=4);
console.log("multiplication,a%=4 " , a*=4);
console.log("division,a%=4 " , a/=4);
console.log("addition,a%=4 " , a+=4);
console.log("substraction", a-=4);
//logical opreators
console.log("logical opreators are of three types" , "&&" , "||" , "!");
//cases for logical &&
console.log("logical && cases");
//false cases, ek bhi false hua toh false//
let x=5;
let y=7;
con1=a>b;
con2=a==b;
console.log("con1&&con2" , con1&&con2);
//true cases
let x2= 5;
let y2= 5;
con1= x2===y2;
con2= x2===y2;
console.log("con1&&con2", con1 && con2);
//all cases for logical ||
//false case , if both of them will be false then, the result will be false//
console.log("cases for logical ||" )
let p=7;
let q=5;
con1= p<q;
con2=p===q;
console.log("con1||con2" , con1||con2);
//true cases , if any one will be true it will be true//
/*let p2=7;
let q2=8;
con1=p2===q2;
con2=p2<q2;
console.log("con1||con2" , con1||con2);
//ternary opreators
//it works on 3 opreands
let age=prompt("Enter age");
let Agee=parseInt(age);
let result= age>= 18?"adult" : "not adult";
console.log(result);
//loops in js
//for, while//
/*for( let i=1; i<=10; i++){
  console.log("flashdev");
}*/
/*for( let a=1 ; a<=10 ; a+=100){
  console.log("aukaat me rehna");
}*/

/*let sum=prompt("Enter no.a:");
let Sum=parseInt(sum);
let range=prompt("enter no.b:");
let Range=parseInt(range);
ans=0
for( let i=Sum; i<=Range ; i++){
  ans=ans+i
  
}
console.log("the sum of no. between " );
console.log(sum ,"and" ,range, "is=",ans );
//ex1*/

/*let fnum = prompt("Enter no.a:");
let Fnum = parseInt(fnum);
let lnum = prompt("enter no.b:");
let Lnum = parseInt(lnum);
ans = 0
for (let i=Fnum; i<=Lnum; i++) {
  ans = ans + i;
}
console.log("the sum of no. between ");
console.log(Fnum, "and", Lnum, "is=", ans);*/
//While loop
/*let  No_a=prompt("Enter no.a:");
let No_A= parseInt(No_a);
let No_b= prompt("enter no.b:");
let No_B= parseInt(No_b);
let i = No_A
Sol=0
while(i<=No_B){
  Sol=Sol+i;
  i++
}
console.log("SUM OF NO. BETWEEN", No_A , "and", No_B , "is =", Sol);*/
//leap year ot not
/*let year=prompt("ENTER YEAR=");
let Year=parseInt();
if( Year%4==0){
  console.log("ITS A LEAP YEAR");
}else{
  console.log("ITS NOT A LEAP YEAR");
}*/
//NOW, FOR OF LOOP , USED FOR MANY PURPOSES

//a number ganme in practice.js

/*let word=prompt("ENTER WORD OR PARAGRAPH");
let nospace=word.replace(/\s/g , '');
let len=0;
for(let length of nospace ){
  console.log("Length=", length);
  len++
}if(len<=25){
console.log( word );
console.log("WORD HAS " , len , "LETTERS.");
}else{
  console.log( word);
console.log("PARAGRAPH HAS", len ,"LETTERS.");
}*/
// functions in java script
//FUNCTIONS ARE CALLABLE BLOCK OF CODE  THAT PERFORMS SPECIFIC TASKS
function myFunction(){
console.log("my name is kartik khandelwal");
console.log("I want to be a web developer");
}
//calling function by name or invoking a function
myFunction();
myFunction();
function func(MSG){
console.log(MSG);
}
//invoking a function
func("my name is kartik");
//function for calculating sum of 2 numbers
function sumFunction(a , b){
  console.log(a+b);
}
//return keyword , returns the value
//***a and b are local variables and functions are block scope
function minusFunction(a , b){
  diff=x-y;
  return diff;
}
//ARROW FUNCTIONS
const sumof=(a , b)=>{
  console.log(a+b);
};
//for multiplication
const product=(a , b)=>{
  return a * b; 
}
//we can also do
const printHello=()=>{
  console.log("hello")
}
//making a js program to find if any string has vowels in it
function vowelCount(str){
  let count=0;
  for(let vowel of str){
    if( vowel === "a" || vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel==="u"){
      count++;
    }
  }return count;
}
//BY USING ARROW FUNCTION 
const numofVowels = (str) => {
  let vCount=0;
  for( const vowels of str){
    if( vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
      vCount++;
    }
  }return vCount;
}
//now for each loop
// a call back is a function , which is passed as an argument in another function
// for each by using array
let arrPrice=[2 , 4 , 7 , 9 , 6 , 1 , 8 ];

arrPrice.forEach(function printVal(val) {
  console.log(val);

});
//passing strings
let arrPlaces=["delhi" , "mumbai" , "goa" , "chennai"];

arrPlaces.forEach((val) => {
  console.log(val);

});
//passing strings and doing opreations
let arrcity=["delhi" , "mumbai" , "goa" , "chennai"];

arrcity.forEach((val) => {
  console.log(val.toUpperCase());

});
//for each has 3 parameters  , value , index , array 
let arrCars=["pagani" , "ferrari" , "lambo" , "buggati"];

arrCars.forEach((val , index , arr) => {
  console.log(val.toUpperCase() , index  , arr);

});
//**** very very important */
//high order functions are fn. which take other fn. as a parameter or return a fn.
let numtoSquare=[2 , 5 , 6 , 7 , 12 , 24  , 14 , 9 , 11];
numtoSquare.forEach((val , index)=>{
  console.log("squares of the values of the array:-")
  console.log("square of" , val  , "=>", val * val ,"index=" , index);
})
//**more important array methods */
//maps in array methods 
let arrSeries=[23 , 34 , 45 , 56 , 67 , 78 , 89 , 90];
arrSeries.map((val , index) => {
  console.log("the array has:-" , val , "at" , index , "index")
})
// cloning array with map** type 1
let arrNum=[23 , 34 , 45 , 56 , 67 , 78 , 89 , 90];
 let newNum=arrNum.map((val) => {
  return val;
 })
 //filter method in arrays
 let newArray=[23 , 34 , 45 , 56 , 67 , 78 , 89 , 90];
 let evenArray = newArray.filter((val) => {
    return val % 2 === 0;
 })

 let oddArray = newArray.filter((val) => {
  return val % 2 != 0
 })
 //reduce method in arrays
 //reduce function reduces the value of array into a single value by opreations
 let oriArray=[1 , 4 , 5 , 7 , 8 , 3 , 9 ];
 let reducedOutput= oriArray.reduce((x , y) => {
  return x + y;
 })
 console.log("Reduced value of an array by reduce method " , reducedOutput);
 //how to find largest element
 let seriesofNum=[23 , 43 , 78 , 90 , 12 , 4 , 7 , 34 , 89 , 46];
 //reduce to lowest of biggest term
 let newSeries= seriesofNum.reduce( (n1 , n2) => {
  return  n1>n2 ? n1: n2;
 })
 console.log("the greater number by reducing form is" , newSeries);
 //prompting an array
/*let A=prompt("ENTER  LAST NO. OF THE ARRAY");
let NumA=parseInt(A);
let PromptArray=[];
 for(let i = 1; i<=NumA ; i++){
  PromptArray[i-1]=i;
 }
 console.log("THE ARRAY PROMPTED IS:-" , PromptArray );*/

let SumofPrompt=PromptArray.reduce((sum1 , sum2)=>{
  return sum1 + sum2;
})
console.log("SUM OF THE ARRAY :-" , SumofPrompt)
let productofPrompt=PromptArray.reduce((product1 , product2)=>{
  return product1*product2;
})
console.log("PRODUCT OF THE ARRAY :-" , productofPrompt);
let infinityarray=productofPrompt*2

console.log("THE INFINITY ARRAY" , infinityarray);
//