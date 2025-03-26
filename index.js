document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmiForm');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bmiValueElement = document.getElementById('bmiValue');
  const bmiCategoryElement = document.getElementById('bmiCategory');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
          alert('Please enter valid height and weight');
          return;
      }

      const bmi = calculateBMI(weight, height);
      const category = getBMICategory(bmi);

      bmiValueElement.textContent = bmi.toFixed(2);
      bmiCategoryElement.textContent = category;
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

