// Seat selection functionality

// Select the necessary DOM elements
const container = document.querySelector('.seat-grid');
const seats = document.querySelectorAll('.row .seat:not(.unavailable)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// Function to update selected seat count and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  // Get total price of selected seats based on their data-price attribute
  const totalPrice = Array.from(selectedSeats).reduce((total, seat) => {
    return total + parseInt(seat.getAttribute('data-price'));
  }, 0);

  // Update the count and total in the UI
  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}

// Seat click event listener
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('unavailable')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Slideshow functionality

let currentIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function showNextImage() {
  images[currentIndex].style.opacity = 0; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  images[currentIndex].style.opacity = 1; // Show the next image
}

// Set the slideshow interval
setInterval(showNextImage, 3000); // Change image every 3 seconds
