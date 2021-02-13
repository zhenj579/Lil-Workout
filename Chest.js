class Chest {

	 constructor(url, exercises) {
	 	//https://www.youtube.com/embed/13ggcvTHETw
	 	this.url = "https://www.youtube.com/embed/BkS1-El_WlE";
	 	this.exercises = [
	 	     new Exercise("Push Ups", this.url, "124"),
             new Exercise("90 Degree Hold", this.url, "172"),
             new Exercise("Push Ups In A Circle", this.url, "229"),
             new Exercise("Archer Push Ups", this.url, "287"),
             new Exercise("Explosive Neg. Push Ups", this.url, "362"),
             new Exercise("Incline Diamond Push Ups", this.url, "440"),
             new Exercise("Elevated Push Ups", this.url, "519"),
             new Exercise("Single Push Up", this.url, "559")
	 	];
	 }

	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 8;
	 }

}