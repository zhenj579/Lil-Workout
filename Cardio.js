class Cardio {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/embed/13ggcvTHETw";
	 	this.exercises = [
	 	     new Exercise("Jumping Jacks", this.url, "88"),
             new Exercise("Burpees", this.url, "125"),
             new Exercise("Bicycles", this.url, "175"),
             new Exercise("In & Outs, Open & Close", this.url, "217"),
             new Exercise("Side to Side Jump Squats", this.url, "240"),
             new Exercise("Shoulder to Shoulder", this.url, "293"),
             new Exercise("Switching Lunges", this.url, "341"),
             new Exercise("High Knee Runs", this.url, "387")
	 	];
	 }

// 1:28 Jumping Jacks
// 2:05 Burpees 
// 2:55 Bicycles 
// 3:37 In & Outs, Open & Close
// 4:14 Side to Side Jump Squats
// 4:53 Shoulder to Shoulder 
// 5:41 Switching lunges
// 6:27 High Knee Runs
	 getExercise(index) {
	 	return this.exercises[index];
	 }

	 getMax() {
	 	return 8;
	 }

}