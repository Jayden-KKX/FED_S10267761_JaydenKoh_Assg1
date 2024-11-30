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
