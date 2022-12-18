//PROJECT TITLE: CAN WE EAT NOW?
//OBJECTIVE: USE PHONE CAMERA TO SCAN THE FRUIT(LEMON) AND VALIDATE RIPENESS  
//PLAN: 1. TAKE PICTURE OF THE FRUIT ON THE TREE.
//      2. RECORD THE TASTE OF THE FRUIT.
//      3. COLLECT THE DATA FOR 2 WEEKS.
//      4. USE TECHABLEMACHINE(https://teachablemachine.withgoogle.com/) TO COMPILE THE DATA.
//      5. INTEGRATE THE LINK TO THE JS.
//      6. USE JS TO CREATE GRAPHIC INTERFACE THAT SHOWS "FRUIT IS NOT READY YET. WAIT __MORE DAYS" OR
//         "FRUIT IS RIPEN. READY TO EAT"

//      7. AT LEAST 100 IMAGES PER CATEGORY.
//      8. ADD NEUTRAL-NO LEMON AT ALL.
//      9. TAKE PICTURE OF LEMONS IN DIFFERENT BACKGROUND. GROUND, KITCHEN TOP, ON DESK.
//      10.[STRETCH] https://huggingface.co/models?pipeline_tag=image-segmentation&sort=downloads
//      11.TRY WITH SMARTPHONE AND SNAPSHOT.

//      12. ADDED 255 IMAGES FOR EACH CLASS
//

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/4MJnGjUzP/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let processOutcome = [];

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  //console.log(results);
  processOutcome = results
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}