class Abs {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=ofTiKY3hYdE";
	 	this.exercises = [
	 		new Exercise("High Knee Taps", this.url, "90"),
	 		new Exercise("Russian Twists", this.url, "82"),
	 		new Exercise("Leg Raises", this.url, "109"),
	 		new Exercise("Hip Raises", this.url, "260"),
	 		new Exercise("Flutter Kicks", this.url, "323"),
	 		new Exercise("Plank Knees to Elbow", this.url, "378"),
	 		new Exercise("Chair Sit Ups", this.url, "442"),
	 		new Exercise("Seated In and Outs", this.url, "497"),
	 		new Exercise("Jumping Jacks", this.url, "560")
	 	];
	 }
   
	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 9;
	 }
}