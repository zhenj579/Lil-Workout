class Abs {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/embed/ofTiKY3hYdE";
	 	this.exercises = [
	 		new Exercise("Jumping Jacks", this.url, "120"),
	 		new Exercise("Bicycles", this.url, "172"),
	 		new Exercise("High Knee Taps", this.url, "236"),
	 		new Exercise("Russian twists", this.url, "294"),
	 		new Exercise("Mountain Climbers", this.url, "356"),
	 		new Exercise("Laying leg raises", this.url, "411"),
	 		new Exercise("In and outs", this.url, "470"),
	 		new Exercise("Plank side to side", this.url, "533"),
	 		new Exercise("Star crunches", this.url, "594"),
			new Exercise("High Knee Runs", this.url, "653")
	 	];
	 }
   
	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 9;
	 }
}