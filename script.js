// Select DOM elements
const container = document.querySelector('.seat-grid');
const seats = document.querySelectorAll('.row .seat:not(.unavailable)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// Prices for seats (you can modify as needed)
const ticketPrice = {
  'A': 800,
  'B': 1200,
  'C': 1200,
  'D': 1500
};

// Update total count and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Get the selected seat count
  const selectedSeatsCount = selectedSeats.length;

  // Get the total price based on the selected seats' data-price attributes
  const totalPrice = Array.from(selectedSeats).reduce((total, seat) => {
    return total + parseInt(seat.getAttribute('data-price'));
  }, 0);

  // Update the displayed count and total
  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}

// Seat click event listener
container.addEventListener('click', (e) => {
  // Check if clicked seat is not unavailable
  if (e.target.classList.contains('seat') && !e.target.classList.contains('unavailable')) {
    // Toggle selected class
    e.target.classList.toggle('selected');

    // Update the count and total
    updateSelectedCount();
  }
});

// Initial count and total set to 0 when the page loads
updateSelectedCount();
