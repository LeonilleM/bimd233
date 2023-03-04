const flight1 = {
    airline_number: "ASA1077",
    aircraft_type: "A319",
    departure_airport : "Washington Dulles Intl (KIAD)",
    aarival_airport :"San Francisco Intl (KSFO)",
    departed : "Wed 07:32PM EST",
    arrival : "Wed 10:10PM PST",
    duration: function() {
        const departureTime = new Date('2023-03-04T19:32:00-05:00');
        const arrivalTime = new Date('2023-03-04T22:10:00-08:00');
        const durationInMinutes = (arrivalTime - departureTime) / 1000 / 60;
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = Math.floor(durationInMinutes % 60);
        return `${hours} hours ${minutes} minutes`;
    }
}

const flight2 = {
    airline_number: "ASA1088",
    aircraft_type: "A320",
    departure_airport : "San Francisco Intl (KSFO)",
    aarival_airport :"Washington Dulles Intl (KIAD)",
    departed : "Wed 03:58PM PST",
    arrival : "Wed 11:28PM EST",
    duration: function() {
        const departureTime = new Date('2023-03-02T15:58:00-08:00');
        const arrivalTime = new Date('2023-03-02T23:28:00-05:00');
        const durationInMinutes = (arrivalTime - departureTime) / 1000 / 60;
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = Math.floor(durationInMinutes % 60);
        return `${hours} hours ${minutes} minutes`;
    }
}

const flight3 = {
    airline_number: "ASA1097",
    aircraft_type: "A320",
    departure_airport : "Washington Dulles Intl (KIAD)",
    aarival_airport :"Los Angeles Intl (KLAX)",
    departed : "Wed 05:06PM EST",
    arrival : "Wed 07:24PM PST",
    duration: function() {
        const departureTime = new Date('2023-03-02T18:06:00-05:00');
        const arrivalTime = new Date('2023-03-02T19:24:00-08:00');
        const durationInMinutes = (arrivalTime - departureTime) / 1000 / 60;
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = Math.floor(durationInMinutes % 60);
        return `${hours} hours ${minutes} minutes`;
    }
}

const flight4 = {
    airline_number: "ASA11",
    aircraft_type: "B739",
    departure_airport : "Newark Liberty Intl (KEWR)",
    aarival_airport :"Seattle-Tacoma Intl (KSEA)",
    departed : "Wed 05:00PM EST",
    arrival : "Wed 07:27PM PST",
    duration: function() {
        const departureTime = new Date('2023-03-02T17:00:00-05:00');
        const arrivalTime = new Date('2023-03-02T19:27:00-08:00');
        const durationInMinutes = (arrivalTime - departureTime) / 1000 / 60;
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = Math.floor(durationInMinutes % 60);
        return `${hours} hours ${minutes} minutes`;
    }
}

const flight5 = {
    airline_number: "ASA1113",
    aircraft_type: "A320",
    departure_airport : "Will Rogers World (KOKC)",
    aarival_airport :"Seattle-Tacoma Intl (KSEA)",
    departed : "Wed 05:40PM CST",
    arrival : "Wed 07:11PM PST",
    duration: function() {
        const departureTime = new Date('2023-03-02T17:40:00-06:00');
        const arrivalTime = new Date('2023-03-02T19:11:00-08:00');
        const durationInMinutes = (arrivalTime - departureTime) / 1000 / 60;
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = Math.floor(durationInMinutes % 60);
        return `${hours} hours ${minutes} minutes`;
    }
}

// Array of flight objects
const flights = [flight1, flight2, flight3, flight4, flight5];

// Get the flights container
const flightsContainer = document.getElementById("flights");

// Loop through the flights array
for (let i = 0; i < flights.length; i++) {
  // Create a new flight card
  const card = document.createElement("div");
  card.className = "col-md-6 col-lg-4 mb-4";

  // Create the card content
  const content = `
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Airline number: ${flights[i].airline_number}</h5>
        <p class="card-text">Aircraft: ${flights[i].aircraft_type}</p>
        <p class="card-text">${flights[i].departure_airport} to ${flights[i].aarival_airport}</p>
        <p class="card-text">Departed: ${flights[i].departed}</p>
        <p class="card-text">Arrival: ${flights[i].arrival}</p>
        <p class="card-text">Duration: ${flights[i].duration()}</p>
      </div>
    </div>
  `;

  // Set the card content
  card.innerHTML = content;

  // Add the card to the flights container
  flightsContainer.appendChild(card);
}


