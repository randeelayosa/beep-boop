//furthest I could manage to get // in console
var start = 0;
var replaceNumberOne = ["1"];
var replaceNumberTwo = ["2"];
var replaceNumberThree = ["3"];
var containsOne = [1,10,11,12,13,14,15,16,17,18,19,100];
var singles = [1,2,3];


function range(start,end) {
  var rangeNumbers = [];
  for (let i = start; i <= end; i++) {
    rangeNumbers.push(i);
  }
  return rangeNumbers;
}
console.log(range(start,9));

  var numbers = range(start,9);
    console.log(numbers)
  var numString = numbers.toString();
    console.log(numString)
  var numSplit = numString.split();
    console.log(numSplit)


    var hasOne = numSplit.map(function(replaceNumberOne) {
      return replaceNumberOne.replace(/[1]/g, "Beep!");
    });
    console.log(hasOne)
    document.write(hasOne);
    var hasTwo = numSplit.map(function(replaceNumberTwo) {
      return replaceNumberTwo.replace(/[2]/g, "Boop!");
    });
    console.log(hasTwo)
    document.write(hasTwo);
    var hasThree = numSplit.map(function(replaceNumberThree) {
      return replaceNumberThree.replace(/[3]/g, "I'm sorry, Dave. I'm afraid I can't do that.");
    });
    console.log(hasThree)
    document.write(hasTwo);







//trying out if statements to try and solve the problem by breaking up the numbers by how many digits are in each.
    if (numSplit.length <= 9) {
    numSplit.map(function(replaceNumberOne) {
      return replaceNumberOne.replace(/[1]/g, "Beep!");
    });
    });
    if (numSplit.length <= 9) {
    numSplit.map(function(replaceNumberTwo) {
      return replaceNumberTwo.replace(/[2]/g, "Boop!");
    });

    if (numSplit.length <= 9) {
    numSplit.map(function(replaceNumberThree) {
      return replaceNumberThree.replace(/[3]/g, "I'm sorry, Dave. I'm afraid I can't do that.");
    });



//trying to see what happens if I address the indexes directly
    singles.forEach(function(item, index) {
      console.log(this[index]);
    }, ["Beep!", "Boop!", "Sorry"]);



//trying to incorporte a boolean like Lina had mentioned in class during a ticket
    var isThereA1 = numSplit.includes("1");
    if (isThereA1 === true) {
      numSplit.map(function(two) {
          var new2 = two.replace(/[2]/g, "Boop!");
        });
    }
    console.log(new2)

function string() {
  var rangeNumbers = [1,2,3,4,5]
  var str = rangeNumbers.toString();
  var replaceThese = [1,2,3]
  var number1 = replaceThese.includes(1);

  if (number1 === true) {
    return "YES";
  }
  console.log(rangeNumbers)
}
rangeNumbers.replace(1,6)


    //******************
  function string() {
    var string = rangeNumbers.toString();
    var replaceThese = [1,2,3]
    var number1 = replaceThese.includes(1);

    if (number1 === true) {
    var x =  rangeNumbers.replace(1,6);
    alert(x);
    }
  }




//trying a different approach to if statements by putting it in the interface logic portion
$(document).ready(function() {
  var count = parseInt($(#userInput));

  if (count <= 9) {
    single.forEach(function(item, index) {
      console.log(this[index]);
    }, ["Beep!", "Boop!", "Sorry"]);
  }

});
