// sports survey
document.getElementById('submitSurvey').addEventListener('click', function () {
    const fitnessLevel = document.getElementById('fitnessLevel').value;
    const preference = document.getElementById('preference').value;
    const intensity = document.getElementById('intensity').value;
    const environment = document.getElementById('environment').value;

    if (!fitnessLevel || !preference || !intensity || !environment) {
      document.getElementById('suggestion').textContent = 'Please answer all questions.';
      return;
    }

    let sportSuggestion = '';

    if (fitnessLevel === 'beginner' && preference === 'team') {
      sportSuggestion = intensity === 'low' ? 'Volleyball' : 'Basketball';
    } else if (fitnessLevel === 'intermediate' && preference === 'individual') {
      sportSuggestion = environment === 'indoors' ? 'Badminton' : 'Cycling';
    } else if (fitnessLevel === 'advanced') {
      sportSuggestion = intensity === 'high' ? 'Tennis' : 'Swimming';
    } else {
      sportSuggestion = 'Running';
    }

    // Display the result
    document.getElementById('suggestion').textContent = `We recommend you to try: ${sportSuggestion}`;
  });



// story section (carousell)
// Carousel JavaScript
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});
// Show the initial slide
showSlide(currentIndex);
// button linking


//   facilities (booking)
// Function to handle the change of start time
function updateEndTimeOptions() {
    const startTime = document.getElementById('start-time').value;
    const endTimeSelect = document.getElementById('end-time');
    
    // Clear previous options
    endTimeSelect.innerHTML = '';
    
    if (startTime) {
      const startHour = parseInt(startTime.split(':')[0]);
      const startMinute = parseInt(startTime.split(':')[1]);
      const startTimeInMinutes = startHour * 60 + startMinute;
  
      // Generate available end times (maximum of 2 hours from the start time)
      for (let i = 30; i <= 120; i += 30) { // 30-minute intervals
        const newEndTimeInMinutes = startTimeInMinutes + i;
        const newEndHour = Math.floor(newEndTimeInMinutes / 60);
        const newEndMinute = newEndTimeInMinutes % 60;
        const newEndTime = `${newEndHour}:${newEndMinute < 10 ? '0' + newEndMinute : newEndMinute}`;
  
        // If the new end time exceeds 2 hours, stop adding times
        if (newEndTimeInMinutes <= startTimeInMinutes + 120) {
          const option = document.createElement('option');
          option.value = newEndTime;
          option.text = newEndTime;
          endTimeSelect.appendChild(option);
        }
      }
    }
  }
  
  // Function to calculate and display the duration
  function updateDuration() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const durationDisplay = document.getElementById('duration');
  
    if (startTime && endTime) {
      const startTimeArray = startTime.split(':');
      const endTimeArray = endTime.split(':');
  
      const startTotalMinutes = parseInt(startTimeArray[0]) * 60 + parseInt(startTimeArray[1]);
      const endTotalMinutes = parseInt(endTimeArray[0]) * 60 + parseInt(endTimeArray[1]);
  
      const durationInMinutes = endTotalMinutes - startTotalMinutes;
  
      if (durationInMinutes > 0 && durationInMinutes <= 120) {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        durationDisplay.textContent = `Duration: ${hours} hours ${minutes} minutes`;
      } else {
        durationDisplay.textContent = "Please select a time duration within 2 hours.";
      }
    }
  }
  
  // Function to handle the booking
  function handleBooking() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const court = document.getElementById('court').value;
    const bookingList = document.getElementById('booking-list');
    const durationDisplay = document.getElementById('duration');
  
    if (!startTime || !endTime || !court) {
      alert("Please fill all the fields to complete your booking.");
      return;
    }
  
    // Create a new list item for the booking
    const li = document.createElement('li');
    li.textContent = `Court: ${court} | Start Time: ${startTime} | End Time: ${endTime} | Duration: ${durationDisplay.textContent}`;
    
    // Append the booking to the list
    bookingList.appendChild(li);
  
    // Clear the form after booking
    document.getElementById('start-time').value = '';
    document.getElementById('end-time').innerHTML = '<option value="">Select End Time...</option>';
    document.getElementById('court').value = '';
    durationDisplay.textContent = '';
  }
  
  // Event listeners for start and end time changes
  document.getElementById('start-time').addEventListener('change', function() {
    updateEndTimeOptions();
    updateDuration();
  });
  
  document.getElementById('end-time').addEventListener('change', function() {
    updateDuration();
  });
  
  // Event listener for the booking button
  document.getElementById('book-button').addEventListener('click', handleBooking);




