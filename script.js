const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stram
// Pass to video element and play
async function passMediaStream() {
     try {
          const videoStream = await navigator.mediaDevices.getDisplayMedia();
          videoElement.srcObject = videoStream;
          videoElement.onloadedmetadata = () => {
               videoElement.play();
          }
     } catch(error) {
     console.log("oops, video fetch error", error)
     }
} 

button.addEventListener('click', async function() {
     // Disable Button
     button.disabled = true;
     // Start Picture in Picture
     await videoElement.requestPictureInPicture();
     // Reset Button
     button.disabled = false
})

// On Load
passMediaStream();