class Legs {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=_hIFF8G-BG0";
	 	this.exercises = [
	 		new Exercise("Side Lunges", this.url, "158"),
	 		new Exercise("Side to Side Jump Squats", this.url, "230"),
	 		new Exercise("Hip Thrusters", this.url, "290"),
	 		new Exercise("Elevated Hamstring", this.url, "350"),
	 		new Exercise("Lateral Marches", this.url, "410"),
	 		new Exercise("Elevated Single Leg Glute Bridge", this.url, "470"),
	 		new Exercise("Calf Raises", this.url, "530"),
	 	];
	 }

	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 7;
	 }

}