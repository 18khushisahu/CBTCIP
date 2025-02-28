document.getElementById("event-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let eventName = document.getElementById("event-name").value;
    let eventDate = document.getElementById("event-date").value;
    let eventTime = document.getElementById("event-time").value;
    let eventLocation = document.getElementById("event-location").value;

    let eventList = document.getElementById("event-list");

    let eventItem = document.createElement("div");
    eventItem.classList.add("event");
    eventItem.innerHTML = `<strong>${eventName}</strong> - ${eventDate} at ${eventTime} | ${eventLocation}`;
    
    eventList.appendChild(eventItem);

    this.reset();
});