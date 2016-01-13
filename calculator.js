$(document).ready(function() {

	var stringArray;
	var stringArray1;
	var stringArray2;
	var temp;
	var output = "";
	var usedIndex = [];
	operationsArray = ["*", "/", "%", "+", "-"];

	var counter = 0;
	$("button").on("click", function(){
		if (counter === 0 && !$(this).hasClass("number")) {
			return;
		} else if ($(this).hasClass("number") || $(this).hasClass("operation")){
			output += this.value;
			$("#result").val(output);
			counter++;
		} else if (this.value === "clearEverything") {
			output = "";
			counter = 0;
			indexUsed = [];
			$("#result").val(output);
		}
		//when equal sign is clicked
		if (this.value === " = ") {
			stringArray = output.split(" ");
			for (var i = 0; i < stringArray.length; i++) {
				if (stringArray[i] === "*") {
					if (i === 1) {
						temp = parseFloat(stringArray[i-1]) * parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(i+2) + temp;
					} else {
						temp = parseFloat(stringArray[i-1]) * parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(0, i-2) + temp + stringArray.splice(i+2);
					}
				} else if (stringArray[i] === "/") {
					if (i === 1) {
						temp = parseFloat(stringArray[i-1]) / parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(i+2) + temp;
					} else {
						temp = parseFloat(stringArray[i-1]) / parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(0, i-2) + temp + stringArray.splice(i+2);
					}
				} else if (stringArray[i] === "%") {
					if (i === 1) {
						temp = parseFloat(stringArray[i-1]) % parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(i+2) + temp;
					} else {
						temp = parseFloat(stringArray[i-1]) % parseFloat(stringArray[i+1]);
						stringArray = stringArray.splice(0, i-2) + temp + stringArray.splice(i+2);
					}
				}
			}
			for (var j = 0; j < stringArray.length; j++) {
				if (stringArray[j] === "+") {
					if (j === 1) {
						temp = parseFloat(stringArray[j-1]) + parseFloat(stringArray[j+1]);
						stringArray = stringArray.splice(j+2) + temp;
					} else {
						temp = parseFloat(stringArray[j-1]) + parseFloat(stringArray[j+1]);
						stringArray = stringArray.splice(0, j-2) + temp + stringArray.splice(j+2);
					}
				} else if (stringArray[j] === "-") {
					if (j === 1) {
						temp = parseFloat(stringArray[j-1]) - parseFloat(stringArray[j+1]);
						stringArray = stringArray.splice(j+2) + temp;
					} else {
						temp = parseFloat(stringArray[j-1]) - parseFloat(stringArray[j+1]);
						stringArray = stringArray.splice(0, j-2) + temp + stringArray.splice(j+2);
					}
				}
			}
			output = stringArray;
			$("#result").val(output);
		}
	});
});