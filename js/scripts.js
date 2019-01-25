var start = 0;
var number1 = "1";
var number2 = "2";
var number3 = "3";

function range(start,end) {
  var rangeNumbers = [];
  for (let i = start; i <= end; i++) {
    rangeNumbers.push(i);
  }
  return rangeNumbers;
}
console.log(range(start,5));

  var numbers = range(start,5);
    console.log(numbers)
  var numString = numbers.toString();
    console.log(numString)
  var numSplit = numString.split("");
    console.log(numSplit)

  numString.map(function(number1) {
    return number1.replace(/[1]/gi, "Beep!");
  });



function string() {
  var str = rangeNumbers.toString();
  var replaceThese = [1,2,3]
  var number1 = replaceThese.includes(1);

  if (number1 === true) {
  var x =  rangeNumbers.replace(1,6);
  alert(x);
  }

}









var start = 0;
var rangeNumbers = [];

function range(start,end) {

  for (let i = start; i <= end; i++) {
    rangeNumbers.push(i);
  }
  return range;
}
console.log(range(0,5))
// document.write(range(start,5));

  function string() {
    var string = rangeNumbers.toString();
    var replaceThese = [1,2,3]
    var number1 = replaceThese.includes(1);

    if (number1 === true) {
    var x =  rangeNumbers.replace(1,6);
    alert(x);
    }

}





$(document).ready(function() {
 var start= 0;
 var range = (start,end);

 $("#form").submit(function(event) {
 event.preventDefault();
 var userInput = $("#userInput").val();

  function range() {
  for (let i = start; i <= end; i++) {
    userInput.push(i);
  }
}
// document.write(range(start,5));


   $("#count").append(userInput);


 });
});













//  REFERENCE
//
// $(document).ready(function() {
//   var multiples = [];
//   var factorial = 1;
//
//
//   $("#factor-form").submit(function(event) {
//   event.preventDefault();
//   var userInput = parseInt($("#factorial").val());
//
//   for (var i = userInput; i > 0; i--) {
//     factorial *= i;
//   }
//
//   $("#result").append(factorial);
//   $("#result").show();
//   $("#factor-form").fadeToggle();
//
//   console.log(userInput)
//   console.log(factorial)
//
//   });
// });
