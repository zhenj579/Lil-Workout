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
	for(i = 0; i < workout.length; i++)
	{
		var j;
		var sz = workout[i].getMax();
		for(j = sz-1; j >= 0; j--)
		{
			var row = table.insertRow(i+1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			cell0.innerHTML = "";
			cell1.innerHTML = workout[i].getExercise(j).getName();
			cell2.innerHTML = "30 seconds";
			var img = document.createElement("img");
			img.id = "exampleBtn";
			img.src = "exampleBtn.png";
			img.alt = j + i * workout[i].getMax();


			var video = document.createElement("iframe");
			video.width = "300";
			video.height = "200";
			video.src = workout[i].getExercise(j).getLink();
			video.frameborder = "0";
			video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
			video.allowFullscreen = true;
			img.onclick = function() {
				this.remove();
				cell3.appendChild(video);
			}
			cell3.appendChild(video);
		}
	}

	var number = 1;
	for(var index in table.rows) {
		var row = table.rows[number];
		var cell = row.cells[0];
		cell.innerHTML = number;
		number++;
	}

}