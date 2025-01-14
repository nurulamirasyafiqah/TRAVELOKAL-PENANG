function toggleDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling; 

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show the details
        button.textContent = "Read Less"; // Change button text to 'Read Less'
    } else {
        details.style.display = "none"; // Hide the details
        button.textContent = "Read More"; // Change button text back to 'Read More'
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeItems = document.querySelectorAll(".fade-item");
  fadeItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 500); 
  });
});

const updateDateTime = () => {
  const date = new Date();

  // Get day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];

  // Format date
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  // Format time
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Combine date, day, and time
  const formattedDateTime = `${dayName}, ${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
  document.getElementById('date-time').innerText = formattedDateTime;
};

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); 

