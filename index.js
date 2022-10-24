const notes = document.querySelectorAll(".rating-value");
const storage = localStorage;
const submit = document.querySelector(".submit-btn");
const elements = document.getElementsByTagName("article");
const ratingValue = document.querySelector(".storage-value");

/**
 * @function activeRating : Active the value rating for the submitting
 * @param notes : List all rating selector
 * @param storage : Use for store the rating-value in the localStorage
 * @author Jérémy Thonon <jeremythonon96@hotmail.com>
 */
function activeRating() {
  for(let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', (e) => {
      e.preventDefault();
      notes.forEach(note => {
        note.classList.remove("active");
      })
      notes[i].classList.add("active");
      storage.setItem('rating', notes[i].textContent);
      return storage;
    })
  }
}
activeRating();

/**
 * @function submitRating : Submit the rating and return the thank-you card
 * @param ratingValue : Get the value of rating in the localStorage
 * @param elements : Get the articles elements, rating-bloc and thanks
 * @author Jérémy Thonon <jeremythonon96@hotmail.com>
 */
function submitRating() {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    ratingValue.innerHTML = storage.getItem("rating");
    elements[0].style.display="none";
    elements[1].style.display="flex";
    storage.clear();
  })
}
submitRating();








