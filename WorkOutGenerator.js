function onLoad() {
	var table = document.getElementById("table");
	var row = table.insertRow(4);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);

	cell0.innerHTML = "69";
	cell1.innerHTML = "Pull ups";
	cell2.innerHTML = "69test"
	;
	var image = document.createElement("img");
	image.id = "exampleBtn";
	image.src = "exampleBtn.png";

	cell3.appendChild(image);
}