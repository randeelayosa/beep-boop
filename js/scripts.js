function range(start,userInput) {
  var rangeNumbers = [];
  for (let i = 0; i <= userInput; i++) {
    rangeNumbers.push(i.toString());
  }
  return rangeNumbers;
};

function beepBoop(userInput){
  var numbers = range(0, parseInt(userInput));
  var hasThree = numbers.map(function(replaceNumberThree) {
    return replaceNumberThree.replace(/[3]/g, "I'm sorry, Dave. I'm afraid I can't do that.");
  });
  var hasTwo = hasThree.map(function(replaceNumberTwo) {
    return replaceNumberTwo.replace(/[2]/g, "Boop!");
  });
  var hasOne = hasTwo.map(function(replaceNumberOne) {
    return replaceNumberOne.replace(/[1]/g, "Beep!");
  });
  console.log(hasOne)
  return hasOne;
};

$(document).ready(function() {
  console.log("inside doc ready")
  $("form#robot").submit(function(event){
    $("form#robot").toggle();
    event.preventDefault();
    console.log("inside of form")
    var userInput = $("input#userInput").val();
    var robotOutput = beepBoop(userInput);
    robotOutput.forEach(function(num) {
      $(".count").append(" " + num + ",    ");
      $("h3").show();
      $(".robot").show();
    });
  });
});
