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
	var nameArray = [];
	var vidArray = [];

	var max = 0;
	for(var i = 0; i < workout.length; i++) {
		max += workout[i].getMax();
	}

	for(var work = 0; work < max; work++)  {
			var row = table.insertRow(work+1);
			var cell0 = row.insertCell(0);
			cell0.innerHTML = work + 1;
			var cell1 = row.insertCell(1);
			cell1.innerHTML = "test";
			var cell2 = row.insertCell(2);
			cell2.innerHTML = "30 Seconds";
			var cell3 = row.insertCell(3);
			nameArray.push(cell1);
			vidArray.push(cell3);
	}

	var threshhold = 0;
	for(var i = 0; i < workout.length; i++) {
		for(var j = 0; j < workout[i].getMax(); j++) {
			nameArray[j + threshhold].innerHTML = workout[i].getExercise(j).getName();
			var img = document.createElement("img");
			img.id = "exampleBtn";
			img.src = "exampleBtn.png";
			img.alt = j + " " + threshhold + " " + workout[i].getExercise(j).getLink();
			img.addEventListener('click', function() {
				this.remove();
				var vid = document.createElement("iframe");
				vid.width = 300;
				vid.height = 200;
				vid.frameborder = "0";
				var arr = this.alt.split(" ");
				vid.src = arr[2];
				vid.allowFullscreen = true;
				vid.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
				vidArray[parseInt(arr[0]) + parseInt(arr[1])].appendChild(vid);
			});
			vidArray[j + threshhold].appendChild(img);	
		}
		threshhold += workout[i].getMax();
	}
}