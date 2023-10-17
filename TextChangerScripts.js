//Get the place that you want to change Frome the HTMLDoc
const chengingText = document.querySelector(/*put The element here*/);
//Arry of words
const arrOfWords = ["Enjoy","And Discover Anthor World","and live Happy"];
//index number for the arry of words
var indexN = -1;
//the indexN update Function  
function indexNUpdate() {
indexN++
if(indexN == 3){indexN = 0};
changeTextFunction();
return setTimeout(indexNUpdate,1500);
};
//update the words function
function changeTextFunction(){
chengingText.textContent = arrOfWords[indexN];
};
//the strat of all functions
setTimeout(indexNUpdate,2000);
/* 
   Note:
   if you want to make the words change faster or slower 
   just change the time in setTimeout functions.
   Happy coding Brothers and sisters
*/

//Developet and created By alio20051
