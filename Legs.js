class Legs {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=_hIFF8G-BG0";
	 	this.exercises = [
	 		new Exercise("Side Lunges", this.url, "2m38s"),
	 		new Exercise("Side to Side Jump Squats", this.url, "3m50s"),
	 		new Exercise("Hip Thrusters", this.url, "4m50s"),
	 		new Exercise("Elevated Hamstring", this.url, "5m50s"),
	 		new Exercise("Lateral Marches", this.url, "6m50s"),
	 		new Exercise("Elevated Single Leg Glute Bridge", this.url, "7m50s"),
	 		new Exercise("Calf Raises", this.url, "8m50s"),
	 	];
	 }

	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 7;
	 }

}