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

// Listen for realtime updates
dataRef.on("value", function(snapshot) {
  var data = snapshot.val();

  // Clear the previous data
  var dataList = document.getElementById("Unique_id");
  dataList.innerHTML = "";

  // Iterate over the data and display it on the webpage
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var item = document.createElement("li");
      item.innerText = key + ": " + data[key];
      dataList.appendChild(item);
    }
  }
});
