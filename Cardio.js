class Cardio {

	 constructor(url, exercises) {
	 	this.url = "https://www.youtube.com/watch?v=13ggcvTHETw";
	 	this.exercises = [
	 	     new Exercise("Jumping Jacks", this.url, "1m28s"),
             new Exercise("Burpees", this.url, "2m05s"),
             new Exercise("Bicycles", this.url, "2m55s"),
             new Exercise("In & Outs, Open & Close", this.url, "3m37s"),
             new Exercise("Side to Side Jump Squats", this.url, "4m14s"),
             new Exercise("Shoulder to Shoulder", this.url, "4m53s"),
             new Exercise("Switching Lunges", this.url, "5m41s"),
             new Exercise("High Knee Runs", this.url, "6m27s")
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