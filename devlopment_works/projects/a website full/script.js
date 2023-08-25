// get input from user
const origin = document.getElementById("origin-input").value;
const destination = document.getElementById("destination-input").value;
const departureDate = document.getElementById("departure-date-input").value;

// call API to get bus search results
const url = `https://example.com/api/bus-search?origin=${origin}&destination=${destination}&departureDate=${departureDate}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // render search results to UI
    const resultsContainer = document.getElementById("search-results");
    data.forEach((bus) => {
      const busCard = document.createElement("div");
      busCard.classList.add("bus-card");

      const busImage = document.createElement("img");
      busImage.src = bus.image;
      busImage.alt = bus.name;

      const busName = document.createElement("h4");
      busName.textContent = bus.name;

      const busPrice = document.createElement("p");
      busPrice.textContent = `Price: ${bus.price}`;

      busCard.appendChild(busImage);
      busCard.appendChild(busName);
      busCard.appendChild(busPrice);
      resultsContainer.appendChild(busCard);
    });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to get search results. Please try again later.");
  });

const paymentButton = document.getElementById("payment-button");
const paymentAmount = 50; // replace with actual payment amount

paymentButton.addEventListener("click", () => {
  // create payment link and redirect user to payment page
  const paymentLink = `https://example.com/payments?amount=${paymentAmount}`;
  window.location.href = paymentLink;
});
