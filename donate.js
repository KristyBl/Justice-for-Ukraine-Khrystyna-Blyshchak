document.addEventListener("DOMContentLoaded", function () {
  var generateBtn = document.getElementById("generateBtn");

  if (generateBtn) {
    generateBtn.addEventListener("click", generateScript);
  }

  function generateScript() {
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;

    var script = "Hello, my name is " + name + " and I'm sending you warm greetings and a message of hope from " + country + ". Although we have not met, I believe in your strength and resilience. Life may be challenging right now, but I know you have the power to overcome any obstacles. Each day brings new opportunities for positive change and growth. You are not alone on this journey. There are many who care about you and wish you well. Embrace hope, and remember that you matter. Wishing you a future filled with joy and peace. Sincerely, " + name;


    var displayScript = document.getElementById("scriptReturned");
    displayScript.innerHTML = script;
  }
});