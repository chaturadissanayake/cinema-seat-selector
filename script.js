const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');

let selectedSeatsCount = 0;
let ticketPrice = 0;  // Dynamic ticket price

// Update seat selection and total based on seat pricing
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('unavailable')) {
      seat.classList.toggle('selected');
      updateSelectedSeats();
    }
  });
});

function updateSelectedSeats() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  selectedSeatsCount = selectedSeats.length;

  let totalPrice = 0;
  selectedSeats.forEach(seat => {
    totalPrice += parseInt(seat.getAttribute('data-price'), 10);
  });

  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}
