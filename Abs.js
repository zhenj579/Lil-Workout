class Abs {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=ofTiKY3hYdE";
	 	this.exercises = [
	 		new Exercise("High Knee Taps", this.url, "1m30s"),
	 		new Exercise("Russian Twists", this.url, "2m22s"),
	 		new Exercise("Leg Raises", this.url, "3m19s"),
	 		new Exercise("Hip Raises", this.url, "4m20s"),
	 		new Exercise("Flutter Kicks", this.url, "5m23s"),
	 		new Exercise("Plank Knees to Elbow", this.url, "6m18s"),
	 		new Exercise("Chair Sit Ups", this.url, "7m22s"),
	 		new Exercise("Seated In and Outs", this.url, "8m17s"),
	 		new Exercise("Jumping Jacks", this.url, "9m20s")
	 	];
	 }
   
	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 9;
	 }
}