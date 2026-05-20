const ageForm = document.getElementById("ageForm");
const dobInput = document.getElementById("dob");
const errorMessage = document.getElementById("errorMessage");
const resultBox = document.getElementById("result");

const yearsOutput = document.getElementById("years");
const monthsOutput = document.getElementById("months");
const daysOutput = document.getElementById("days");

// Set today's date as the maximum selectable date
const todayDate = new Date().toISOString().split("T")[0];
dobInput.setAttribute("max", todayDate);

ageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dobValue = dobInput.value;

    errorMessage.textContent = "";
    resultBox.style.display = "none";

    if (dobValue === "") {
        errorMessage.textContent = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    if (birthDate > today) {
        errorMessage.textContent = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    yearsOutput.textContent = years;
    monthsOutput.textContent = months;
    daysOutput.textContent = days;

    resultBox.style.display = "block";
});