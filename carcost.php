<?php

?>
<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Car Costs</title>
		<script src="carcost.js" type="text/javascript"></script>
		<link rel="Stylesheet" type="text/css" href="carcost.css">
	</head>
	<body>
		<h1>Car Costs</h1>
		<h2>Compare new vs. used</h2>

		<div id="formDiv">
			<div class="formHolder">
				<label for="totLifeTime">Total Lifetime: (years)</label>
				<input type="range" min="1" max="100" step="1" value="30" id="totLifeTime">
				<output for="totLifeTime" id="totLifeTimeOut" role="status">30</output>
			</div>
			<div class="formHolder">
				<label for="newCarCost">Cost of new car: $</label>
				<!-- <input type="range" min="0" max="100000" step="1000" value="25000" id="newCarCost"> -->
				<!-- <input type="number" min="0" value="25000" step="500" id="newCarCost"> -->
				<input type="text" value="25000" id="newCarCost">
				<!-- <output for="newCarCost" id="newCarCostOut" ></output> -->
			</div>
			<div class="formHolder">
				<label for="dep">Percentage of depreciation per year:</label>
				<input type="range" min="0" max="100" step="5" value="20" id="dep">
				<output for="dep" id="depOut" role="status">20</output>
			</div>
			<div class="formHolder">
				<label for="shelfLife">Life of a car: (years)</label>
				<input type="range" min="1" max="20" step="1" value="8" id="shelfLife">
				<output for="shelfLife" id="shelfLifeOut" role="status">8</output>
			</div>
			<div class="formHolder">
				<label for="oldCar">How old should a purchased used car be: (years)</label>
				<input type="range" min="0" max="8" step="1" value="2" id="oldCar">
				<output for="shelfLife" id="oldCarOut" role="status">2</output>
			</div>
		</div>
		<div id="resultsDiv">
			<!--
			<dl id="resultsList">
			</dl>
			-->
			<table id="resultsTable">
				<thead id="tableHeader">
					<tr>
						<th scope="col">Year</th>
						<th scope="col">New Car</th>
						<th scope="col">Used Car</th>
					</tr>
				</thead>
				<tbody id="tableBody">
				</tbody>
				<tfoot id="tableFooter">
					<tr>
						<th scope="row">Total</th>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
		<script type="text/javascript">
initRanges ();
updateStuff();
		</script>
	</body>
</html>
