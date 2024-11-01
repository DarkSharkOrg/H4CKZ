// Admin password (set this to your desired password)
const adminPassword = "secureAdmin123";

// Validate admin password
function validateAdmin() {
    const enteredPassword = document.getElementById("adminPassword").value;
    if (enteredPassword === adminPassword) {
        // Hide login section and show admin panel
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Update prediction in local storage
function updatePrediction() {
    const periodNumber = document.getElementById("periodNumber").value;
    const predictionText = document.getElementById("predictionTextAdmin").value;
    const predictionTime = document.getElementById("predictionTimeAdmin").value;
    
    if (periodNumber && predictionText && predictionTime) {
        localStorage.setItem("periodNumber", periodNumber);
        localStorage.setItem("predictionText", predictionText);
        localStorage.setItem("predictionTime", predictionTime);
        alert("Prediction updated successfully.");
    } else {
        alert("Please fill in all fields.");
    }
}

// Add new key for user access
let validKeys = ["sampleKey123"]; // Initial test key

function addKey() {
    const newKey = document.getElementById("newKey").value;
    if (newKey) {
        validKeys.push(newKey);
        alert("New key added successfully.");
    } else {
        alert("Please enter a key.");
    }
}
