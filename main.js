// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//make error message hidden using exising css for class .hidden 
const modalMes = document.getElementById('modal')
modalMes.classList.add('hidden')

 
//add event listener to heart
document.addEventListener('click', (e) => {
 if (e.target.classList.value === 'like-glyph'){
 mimicServerCall()
 .then((resp) => {
   e.target.classList.add('activated-heart')
 })
 .catch((error) => {
   console.log('error')
   modalMes.remove('hidden')
 }
 )}
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
