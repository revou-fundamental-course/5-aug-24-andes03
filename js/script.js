// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and result elements
    const form = document.getElementById('bmiForm');
    const result = document.getElementById('result');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');

    // Add submit event listener to the form
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting

        // Get input values
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Calculate BMI
        const bmi = calculateBMI(weight, height);

        // Display result
        displayResult(bmi, gender);
    });

    // Function to calculate BMI
    function calculateBMI(weight, height) {
        // Convert height from cm to m
        const heightInMeters = height / 100;
        // Calculate BMI
        return weight / (heightInMeters * heightInMeters);
    }

    // Function to display the result
    function displayResult(bmi, gender) {
        bmiValue.textContent = `BMI Anda: ${bmi.toFixed(2)}`;

        let category;
        if (bmi < 18.5) {
            category = "Berat badan kurang";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Berat badan normal";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Berat badan berlebih";
        } else {
            category = "Obesitas";
        }

        bmiCategory.textContent = `Kategori: ${category} (${gender})`;

        // Show the result div
        result.classList.remove('hidden');
    }
});