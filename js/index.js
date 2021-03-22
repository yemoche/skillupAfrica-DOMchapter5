// DOM manipulation of name and using of reset
const form = document.querySelector('#updateName')
 
const nameInputField= document.querySelector('.name-input');
const outputDisplay = document.querySelector('.Display');

 const welcomeUser = ()=>{
     event.preventDefault()
     outputDisplay.innerText = ('Welcome ' + nameInputField.value);
     console.log ('Welcome ' + nameInputField.value)
}
form.addEventListener('submit', welcomeUser)

function resetForm(event) {
     reset.textContent = `form reset! Time stamp:${event.timeStamp}`;
}
form.addEventListener('reset', resetForm);


function myMove() {
    let el = document.getElementById("animate");
    let locationPosition = 0;
    let frameSetting = setInterval(frame, 9);
    function frame() {
        if (locationPosition == 1500) {
            clearInterval(frameSetting);
        } else {
            locationPosition++;
            el.style.bottom.centre = locationPosition + 'px';
            el.style.left= locationPosition + 'px';
        }
    }
}

//Applying mouseoverEvent on the search objeect


// let test = document.getElementsByClassName("test");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener("Search", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "yellow";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

// test.addEventListener("Search", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);

