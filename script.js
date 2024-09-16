// Selectors
const container = document.querySelector('.seat-grid');
const seats = document.querySelectorAll('.row .seat:not(.unavailable)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = 0;

// Update total price and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  // Get total price of selected seats based on their data-price attribute
  const totalPrice = Array.from(selectedSeats).reduce((total, seat) => {
    return total + parseInt(seat.getAttribute('data-price'));
  }, 0);

  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('unavailable')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Update movie ticket price if needed (if you have dynamic movie pricing)
movieSelect.addEventListener('change', (e) => {
  ticketPrice = parseInt(e.target.value);
  updateSelectedCount();
});
