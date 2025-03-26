document.addEventListener('DOMContentLoaded', () => {  // it ensure the javascript runs only after the HTML document is fully loaded
  const form = document.getElementById('bmiForm'); // selects the form element to listen for the submit even
  const heightInput = document.getElementById('height'); //select the input fields for user input.
  const weightInput = document.getElementById('weight');
  const bmiValueElement = document.getElementById('bmiValue');
  const bmiCategoryElement = document.getElementById('bmiCategory');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
          alert('Please enter valid height and weight'); // If invalid, an alert appears, and the function stops execution (return).
          return;
      }

      const bmi = calculateBMI(weight, height); //Calls the calculateBMI() function to compute the BMI.
      const category = getBMICategory(bmi); //Calls getBMICategory() to determine if the user is Underweight, Normal, or Overweight.

      bmiValueElement.textContent = bmi.toFixed(2); // Rounds BMI to 2 decimal places.
      bmiCategoryElement.textContent = category; // Updates the respective HTML elements to show the result.
  });

  function calculateBMI(weight, height) {
      return weight / (height * height);
  }

  function getBMICategory(bmi) {
      if (bmi < 18.6) return 'Underweight';
      if (bmi >= 18.6 && bmi <= 24.9) return 'Normal Range';
      return 'Overweight';
  }
});

