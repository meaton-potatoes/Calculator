var stringArray;
var stringArray1;
var stringArray2;
var temp;
var output = "";
var usedIndex = [];
operationsArray = [" * ", " / ", " % ", " + ", " - "];


var counter = 0;
var output = "";
var tempValue;
var tempOperator1;
var tempOperator2;

$("button").on("click", function(){
	var number = $(this).hasClass("number");
	var operator = $(this).hasClass("operator");
	if (number) {
		output += this.value;
		$("#result").val(output);
		counter++;
	} else if (operator) {
		if (counter === 0) {
			return;
		} else if (isNaN(parseFloat(output))) {
			tempOperator2 = this.value;
			$("#result").val(tempOperator2);
			tempOperator1 = tempOperator2;
		} else {
			// console.log("tempValue: " + tempValue + ", tempOperator1: " + tempOperator1 + ", tempOperator2: " + tempOperator2);
			tempOperator2 = this.value;
			if (isNaN(tempValue)) {
				//if there is a tempOperator and NOT a tempValue = not ready to evalue
				tempValue = parseFloat(output);
				output = "";
				tempOperator = this.value;
				$("#result").val(tempOperator);
				tempOperator1 = tempOperator2;
			} else {
				tempOperator2 = this.value;
				//if there is a tempOperator AND a tempValue = ready to evaluate
				tempValue = evaluateAll(tempValue, tempOperator1, output);
				output = "";
				$("#result").val(tempValue);
				tempOperator1 = tempOperator2;
			}
			counter++;
		}
	} else if (this.value === "clearEverything") {
		output = "", tempValue = undefined, tempOperator = undefined, counter = 0;
		$("#result").val(output);
	} else if (this.value === " = ") {
		// console.log(tempValue + ", " + tempOperator1 + ", "+ tempOperator2 + "," + output);
		if (tempValue === undefined) {
			return;
		} else {
			tempValue = evaluateAll(tempValue, tempOperator2, output);
			output = tempValue;
			$("#result").val(output);
			tempValue = undefined, tempOperator1 = undefined, tempOperator2 = undefined;
		}
	}
});

function evaluateAll(tempValue, tempOperator, output) {
	var num1 = tempValue;
	var num2 = parseFloat(output);
	// console.log(num1 + tempOperator + num2);
	if (tempOperator === " + ") {
		return num1+num2;
	} else if (tempOperator === " - ") {
		return num1-num2;
	} else if (tempOperator === " * ") {
		return num1*num2;
	} else if (tempOperator === " / ") {
		return num1/num2;
	} else if (tempOperator === " % ") {
		return num1%num2;
	}
}