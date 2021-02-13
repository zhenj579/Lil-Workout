function onLoad() {
	const data = localStorage.getItem("selected");
	var text="";
	for(var index in data)
	{
		text+=data[index];
	}
	const choices = text.split(",");
	var workout = [];
	for(var index in choices)
	{
		if(choices[index] == "abs")
		{
			workout.push(new Abs(null,null));
		}
		if(choices[index] == "chest")
		{
			workout.push(new Chest(null,null));
		}
		if(choices[index] == "cardio")
		{
			workout.push(new Cardio(null,null));
		}
		if(choices[index] == "legs")
		{
			workout.push(new Legs(null,null));
		}
	}
	var table = document.getElementById("table");
	var i;
	var glbSz = 0;
	var glbCounter = 1;
	for(i = 0; i < workout.length; i++)
	{
		var j;
		var c = 1;
		var sz = workout[i].getMax();
		for(j = sz-1; j >= 0; j--)
		{
			var row = table.insertRow(i+1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			cell0.innerHTML = c;
			cell1.innerHTML = workout[i].getExercise(j).getName();
			cell2.innerHTML = "20 seconds";
			var img = document.createElement("img");
			img.id = "exampleBtn";
			img.src = "exampleBtn.png";
			cell3.appendChild(img);
			c++;
		}
	}
	// var row = table.insertRow(4);
	// var cell0 = row.insertCell(0);
	// var cell1 = row.insertCell(1);
	// var cell2 = row.insertCell(2);
	// var cell3 = row.insertCell(3);

	// cell0.innerHTML = "69";
	// cell1.innerHTML = "Pull ups";
	// cell2.innerHTML = "69test"
	// ;
	// var image = document.createElement("img");
	// image.id = "exampleBtn";
	// image.src = "exampleBtn.png";

	// cell3.appendChild(image);
}