// JavaScript for detecting internet connection status and displaying the "No Internet" page

// Function to check internet connection status
function checkInternetConnection() {
    return navigator.onLine; // Returns true if online, false if offline
}

// Function to display the "No Internet" page
function showNoInternetPage() {
    // Load the "No Internet" page content into the current page
    fetch('no_internet.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        });
}

// Function to initialize the internet connection check
function initInternetConnectionCheck() {
    // Check internet connection status when the page loads
    if (!checkInternetConnection()) {
        showNoInternetPage();
    }

    // Check internet connection status whenever the connection changes
    window.addEventListener('online', function () {
        document.location.reload(); // Reload the page when internet connection is restored
    });

    window.addEventListener('offline', function () {
        showNoInternetPage(); // Display the "No Internet" page when connection is lost
    });
}

// Initialize internet connection check
initInternetConnectionCheck();
