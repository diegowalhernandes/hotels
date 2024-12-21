document.getElementById('searchBtn').addEventListener('click', () => {
    const hotelName = document.getElementById('hotelName').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    const message = `
        Hotel: ${hotelName || "Any"}
        Check-in: ${checkIn}
        Check-out: ${checkOut}
        Adults: ${adults}
        Children: ${children}
    `;

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = message;
});
