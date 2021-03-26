// Display number in History Display
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
// Display number in Main Display
function getOutput(num) {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

//Manage number with COMMA
function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

// Remove COMMA for operating
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

//Numbers and Operator response
var operator = document.querySelectorAll("[data-operator]");
operator.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output != "") {
        output = reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
});

var number = document.querySelectorAll("[data-number]");
number.forEach((item) => {
  item.addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
});
