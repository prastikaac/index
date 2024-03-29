
// Variable to track whether the popup is currently displayed
var popupDisplayed = false;

// Function to show a popup
function showPopup(message) {
    // Creating a container for the popup
    var container = document.createElement('div');
    container.classList.add('popup-container');

    // Creating the popup div
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = message;

    // Appending the popup to the container
    container.appendChild(popup);

    // Appending the container to the document body
    document.body.appendChild(container);

    // Set popupDisplayed to true to indicate that the popup is displayed
    popupDisplayed = true;

    // Removing the popup and container after 2 seconds
    setTimeout(function () {
        container.parentNode.removeChild(container);
        // Set popupDisplayed to false after the popup disappears
        popupDisplayed = false;
    }, 2000);
}

// Function to show a popup when copying content
function preventCopy(event) {
    event.preventDefault();
    if (!popupDisplayed) {
        showPopup('Well, well, look who\'s the copycat today!');
    }
}

// Function to limit selection to 50 characters
function limitSelection(event) {
    var selection = window.getSelection().toString();
    if (selection.length > 50) {
        window.getSelection().removeAllRanges();
        showPopup("Well, well, look who\'s the copycat today!");
        event.preventDefault();
    }
}

// Function to handle Ctrl+A (select all)
function handleSelectAll(event) {
    if (event.ctrlKey && event.key === 'a') {
        var content = document.body.textContent;
        if (content.length > 50) {
            showPopup("Well, well, look who\'s the copycat today!");
            event.preventDefault();
        }
    }
}

// Adding event listener to disable copying
document.addEventListener("copy", preventCopy);

// Adding event listener to limit selection
document.addEventListener("mouseup", limitSelection);

// Adding event listener to handle Ctrl+A
document.addEventListener("keydown", handleSelectAll);

// Function to show a popup when right-clicking
function preventRightClick(event) {
    event.preventDefault();
    if (!popupDisplayed) {
        // Creating a container for the popup
        var container = document.createElement('div');
        container.classList.add('popup-container');

        // Creating the popup div
        var popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = 'Arey arey, Not this way!';

        // Appending the popup to the container
        container.appendChild(popup);

        // Appending the container to the document body
        document.body.appendChild(container);

        // Set popupDisplayed to true to indicate that the popup is displayed
        popupDisplayed = true;

        // Removing the popup and container after 2 seconds
        setTimeout(function () {
            container.parentNode.removeChild(container);
            // Set popupDisplayed to false after the popup disappears
            popupDisplayed = false;
        }, 2000);
    }
}

// Adding event listener to disable right-clicking
document.addEventListener("contextmenu", preventRightClick);




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

