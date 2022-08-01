const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// To check if the user shared the screen or not;
let play = false;
// Prompt user to select a media stram and
// pass to video element and play
async function passMediaStream() {
     
     try {
          const videoStream = await navigator.mediaDevices.getDisplayMedia();
          videoElement.srcObject = videoStream;
          videoElement.onloadedmetadata = () => {
               videoElement.play();
               play = true;
               console.log(play)
          }
     } catch(error) {
     console.log("oops, video fetch error", error)
     }
} 

button.addEventListener('click', async function() {
     if (play) {
          // Disable Button
          button.disabled = true;
          // Start Picture in Picture
          await videoElement.requestPictureInPicture();
          // Reset Button
          button.disabled = false
     }else if (!play) {
          passMediaStream();
     }
})
console.log("outside", play)

// On Load
passMediaStream();