var ranges = {
	"newCarCost" : null,
	"totLifeTime" : null,
	"shelfLife" : null,
	"dep" : null,
	"oldCar" : null,
};


function initRanges () {
	for (var k in ranges) {
		//console.log ("Trying to get " + k + ".");
		ranges[k] = document.getElementById(k);
		try {
			if (k == "newCarCost") {
				ranges[k].addEventListener("input", sanitize, false);
			} else {
				//ranges[k].addEventListener("input", updateOutputs, false);//
				ranges[k].addEventListener("input", updateOutputs, false);
			}
		}
		catch (ex) {
			//console.log("Problem: " + ex.toString() + ".");
		}
	}
}

function updateOutputs (e) {
	var control = e.originalTarget.getAttribute("id");
	//console.log("Updating element " + control + ".");
	//for (var k in ranges) {
	var out = null;
	out = document.getElementById(control + "Out");
	if (out) {
		removeChildren(out);
		out.appendChild(document.createTextNode(ranges[control].value));
		//out.innerHTML = ranges[k].value;
	}
	//}
	updateStuff();
}
function sanitize () {
	var oldCarCost = ranges["newCarCost"].value;
	var output =["Typed oldCarCost: " + oldCarCost + "."];
	oldCarCost = oldCarCost.replace(/[^\d\.\-]/g, "");
	
	output.push("And now oldCarCost is " + oldCarCost + ".");
	//console.log(output.join("\n"));
	ranges["newCarCost"].value = oldCarCost;
	updateStuff();
}
function updateStuff() {
	if (ranges["oldCar"].value > ranges["shelfLife"].value - 1) ranges["oldCar"].value = ranges["shelfLife"].value-1;
	ranges["oldCar"].setAttribute("max", ranges["shelfLife"].value - 1);
	//updateOutputs(e);
	
	var totalCostNew = 0;
	var totalCostUsed = 0;
	var newCarsBought = 0;
	var usedCarsBought = 0;

	var resultsList = null;
	resultsList = document.getElementById("resultList");


	var tableBody = null;
	tableBody = document.getElementById("tableBody");
	removeChildren(tableBody);

	var tableFooter = null;
	tableFooter = document.getElementById("tableFooter");
	//removeChildren(tableFooter);
	var totalBoughtNewTD = document.getElementById("totalBoughtNewTD");
	var totalBoughtUsedTD = document.getElementById("totalBoughtUsedTD");
	var totalCostNewTD = document.getElementById("totalCostNewTD");
	var totalCostUsedTD = document.getElementById("totalCostUsedTD");

	var years = totLifeTime.value;
	// To calculate purchase cost of used car use: V = P(1-R)^n
	var usedCarCost = Math.round(ranges["newCarCost"].value * Math.pow((1 - (parseInt(ranges["dep"].value) / 100)), ranges["oldCar"].value));
	var usedShelfLife = ranges["shelfLife"].value - ranges["oldCar"].value;
	//console.log("used car cost: $" + usedCarCost + ".\nused shelf life: " + usedShelfLife + ".");
	for (var i = 0; i < years; i++) {
		var newTR = document.createElement("tr");
		var newYearTD = document.createElement("td");
		newYearTD.innerHTML = parseInt(i) + 1;
		var newNewTD = document.createElement("td");
		var newUsedTD = document.createElement("td");
		var toAttach = false;
		if (i % ranges["shelfLife"].value == 0) {
			totalCostNew = totalCostNew + parseInt(ranges["newCarCost"].value);
			newNewTD.innerHTML = totalCostNew;
			newCarsBought++;
			toAttach = true;
		} else {
			//newNewTD.innerHTML = "(" + i + ": " + parseInt(i) % 5 + ")";
		}
		if (i % usedShelfLife == 0) {
			totalCostUsed = totalCostUsed + usedCarCost;
			newUsedTD.innerHTML = totalCostUsed;
			usedCarsBought++;
			toAttach = true;
		} else {
			//newNewTD.innerHTML = "(" + i + ": " + parseInt(i) % 5 + ")";
		}
		if (toAttach) {
			newTR.appendChild(newYearTD);
			newTR.appendChild(newNewTD);
			newTR.appendChild(newUsedTD);
			tableBody.appendChild(newTR);
		}
	}
	totalBoughtNewTD.innerHTML = newCarsBought;
	totalBoughtUsedTD.innerHTML = usedCarsBought;
	totalCostNewTD.innerHTML = totalCostNew;
	totalCostUsedTD.innerHTML = totalCostUsed;
}
function removeChildren (el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}
