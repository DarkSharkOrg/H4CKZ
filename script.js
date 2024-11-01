// Access control with keys stored in local storage
let validKeys = ["sampleKey123"]; // Initial key for testing (admin can add more)

// Validate key for user panel
function validateKey() {
    const inputKey = document.getElementById("accessKey").value;
    if (validKeys.includes(inputKey)) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("prediction-section").style.display = "block";
        loadPrediction();
    } else {
        alert("Invalid key. Please try again.");
    }
}

// Load the latest prediction
function loadPrediction() {
    const predictionText = localStorage.getItem("predictionText") || "No prediction available.";
    const predictionTime = localStorage.getItem("predictionTime") || "No time set.";
    document.getElementById("predictionText").innerText = predictionText;
    document.getElementById("predictionTime").innerText = "Prediction Time: " + predictionTime;
}

// Admin functions
function updatePrediction() {
    const periodNumber = document.getElementById("periodNumber").value;
    const predictionText = document.getElementById("predictionTextAdmin").value;
    const predictionTime = document.getElementById("predictionTimeAdmin").value;
    // Set the admin password
const adminPassword = "secureAdmin123"; // Change this to a strong password

// Validate admin login
function validateAdmin() {
    const enteredPassword = document.getElementById("adminPassword").value;
    if (enteredPassword === adminPassword) {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Other functions (updatePrediction, addKey, etc.) remain the same
    localStorage.setItem("periodNumber", periodNumber);
    localStorage.setItem("predictionText", predictionText);
    localStorage.setItem("predictionTime", predictionTime);

    alert("Prediction updated successfully.");
}

function addKey() {
    const newKey = document.getElementById("newKey").value;
    validKeys.push(newKey);
    alert("New key added successfully.");
}