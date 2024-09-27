// Selectors
const container = document.querySelector('.seat-grid');
const seats = document.querySelectorAll('.row .seat:not(.unavailable)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// Update total price and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Get selected seat indices and save them in localStorage for persistence
  const selectedSeatIndices = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatIndices));

  const selectedSeatsCount = selectedSeats.length;

  // Calculate total price based on data-price attributes of the selected seats
  const totalPrice = Array.from(selectedSeats).reduce((total, seat) => {
    return total + parseInt(seat.getAttribute('data-price'), 10);
  }, 0);

  // Update seat count and total price in the DOM
  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}

// Load saved seat selection from localStorage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
}

// Seat click event listener
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('unavailable')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Initial population of seat selection (on page load)
populateUI();

// Update count and total on initial load
updateSelectedCount();
