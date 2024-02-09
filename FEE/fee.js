document.getElementById("aboutBtn").addEventListener("click", function() {
    var aboutText = document.getElementById("aboutText");
    if (aboutText.style.display === "none") {
      aboutText.style.display = "block";
      document.getElementById("aboutBtn").textContent = "Show Less";
    } else {
      aboutText.style.display = "none";
      document.getElementById("aboutBtn").textContent = "Show More";
    }
  });
  
  document.getElementById("servicesBtn").addEventListener("click", function() {
    var servicesInfo = document.getElementById("servicesInfo");
    if (servicesInfo.style.display === "none") {
      servicesInfo.style.display = "block";
      document.getElementById("servicesBtn").textContent = "Show Less";
    } else {
      servicesInfo.style.display = "none";
      document.getElementById("servicesBtn").textContent = "Learn More";
    }
  });