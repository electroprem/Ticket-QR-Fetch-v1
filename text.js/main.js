// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCKvGUZiIhsigi-SEOsGK6-vUmcA5qcJu0",
    authDomain: "esp32-demo-test-600f6.firebaseapp.com",
    databaseURL: "https://esp32-demo-test-600f6-default-rtdb.firebaseio.com",
    projectId: "esp32-demo-test-600f6",
    storageBucket: "esp32-demo-test-600f6.appspot.com",
    messagingSenderId: "1015960027724",
    appId: "1:1015960027724:web:379b00131438edf17c6ae9",
    measurementId: "G-5WSL062SV2"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database
  var database = firebase.database();
  
  // Get a reference to the data you want to listen to
  var dataRef = database.ref("Unique_id");
  
  // Create a counter for Sr No
  var count = 1;
  
  // Listen for realtime updates
  dataRef.on("child_added", function(snapshot) {
    var uniqueId = snapshot.key;
    var data = snapshot.val();
  
    // Create a new table row for each unique ID
    var row = document.createElement("tr");
  
    // Create cells for Sr No, Unique ID, ID, and Order Number
    var srNoCell = document.createElement("td");
    var uniqueIdCell = document.createElement("td");
    var idCell = document.createElement("td");
    var orderNumberCell = document.createElement("td");
  
    // Set the values for each cell
    srNoCell.textContent = count++;
    uniqueIdCell.textContent = uniqueId;
    idCell.textContent = data.id;
    orderNumberCell.textContent = data.order_number;
  
    // Append the cells to the table row
    row.appendChild(srNoCell);
    row.appendChild(uniqueIdCell);
    row.appendChild(idCell);
    row.appendChild(orderNumberCell);
  
    // Append the new row to the table body
    var tableBody = document.getElementById("table-body");
    tableBody.appendChild(row);

    // ...
// ...

// Function to search for data based on selected option and search value
function searchData() {
    var input = document.getElementById("search-input");
    var searchValue = input.value.trim().toLowerCase();
  
    var select = document.getElementById("search-option");
    var searchOption = select.value;
  
    var tableBody = document.getElementById("table-body");
    var rows = tableBody.getElementsByTagName("tr");
    var noDataMessage = document.getElementById("no-data-message");
    var searchResultMessage = document.getElementById("search-result-message");
  
    var dataFound = 0;
  
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var cellValue = "";
  
      if (searchOption === "unique-id") {
        cellValue = cells[1].textContent.toLowerCase();
      } else if (searchOption === "id") {
        cellValue = cells[2].textContent.toLowerCase();
      } else if (searchOption === "order-number") {
        cellValue = cells[3].textContent.toLowerCase();
      }
  
      if (cellValue.includes(searchValue)) {
        rows[i].style.display = "";
        dataFound++;
      } else {
        rows[i].style.display = "none";
      }
    }
  
    if (dataFound > 0) {
      noDataMessage.classList.add("hidden");
      searchResultMessage.textContent = "Data found: " + dataFound;
    } else {
      noDataMessage.classList.remove("hidden");
      searchResultMessage.textContent = "No data found.";
    }
  }
  

  // Get the search button and attach a click event listener
  var searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchData);
  
  
  });