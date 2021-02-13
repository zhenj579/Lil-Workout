class Chest {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=BkS1-El_WlE";
	 	this.exercises = [
	 	     new Exercise("Push Ups", this.url, "2m04s"),
             new Exercise("90 Degree Hold", this.url, "2m52s"),
             new Exercise("Push Ups In A Circle", this.url, "3m49s"),
             new Exercise("Archer Push Ups", this.url, "4m47s"),
             new Exercise("Explosive Neg. Push Ups", this.url, "6m02s"),
             new Exercise("Incline Diamond Push Ups", this.url, "7m20s"),
             new Exercise("Elevated Push Ups", this.url, "8m39s"),
             new Exercise("Push Up", this.url, "9m19s")
	 	];
	 }

	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 8;
	 }

}