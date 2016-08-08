# React Weather App Plugin

![ScreenShot](https://github.com/ekingan/weatherApp/blob/master/assets/codeChallenge.png)

## What I did: 

* There are 5 images on the left side that relate to the video in the center
* The player is to drag and drop the images into the yellow boxes below the video
* Once the player has completed their task, they click the "submit" button to see their score (I realize this deviates from the instructions but I thought it would be a better user experience)
* The correct answers will show a green border
* The incorrect answers will show a red border
* If all of the answers are correct, the placeholders will dim to 50% (after a 1 second time delay) and the video will play.
* If the player gets 80% of the answers correct, the lesson is marked completed. Otherwise, it is marked incompelete and the player is prompted to retake the test.

### Additional functionality:

* Mousing over a clip changes the static image to an animated gif
* When dragging the clip, the image becomes static. 

##localStorage vs. API

Instead of using the LMS API, I used localStorage to save the user's high score.
The current score and the high score will be displayed on the screen each time the user plays the game. 
The status of the game is saved to localStorage and is displayed in the DOM as complete or incomplete.
I tried to model my own methods after the methods described in the LMS API documentation. 

## Known Issues

As it stands, the code allows the user to drag and drop multiple images on the same placeholder.
I fussed with this issue a lot and could not find a way around it other than creating a separate handleDrop(e) function
for each placeholder. I think there must be a better way though since the resuling code would not be
DRY. 

### Here is an example:

```
function handleDropOnAnswer1(e) {
    var data = e.dataTransfer.getData("text");
    var element = document.getElementById(data);
    var target = document.getElementById("answer1");
    var image = target.innerHTML;
  	if (!image) {
  		e.target.appendChild(element);
      e.preventDefault();
  	}
}
```
##Thanks! This was really fun!