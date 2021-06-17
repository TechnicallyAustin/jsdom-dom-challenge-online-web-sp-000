document.addEventListener("DOMContentLoaded", () => {
    
const form = document.getElementById("comment-form");

form.addEventListener("submit", addComment);
});
// need to take user input and submit a document
// let input = document.querySelector("input#comment-input").innerText;
let input = document.getElementById("comment-input");
let comments = document.querySelector('h3')


// Creates a blank paragrah item under comments 
let addComment = document.createElement('p')

// assigns the user input to the innertext of the newly created p
addComment.innerText = input;

// need to insert under the comments h3 and <p> user input
comments.appendChild(addComment)
// need to take  the document submission and append it to Comments Ul
// in a <p> tag


// Need to make the heart button clickable and  display
// current second has  been liked # of likes time(s)

// button that moves the time up or down by 1 second

// a button that pauses the timer 
}