function showCandyEffect() {
    // Код для создания эффекта конфеты
    document.getElementById("myButton").innerHTML = "2023";
  }

  document.getElementById("myButton").addEventListener("click", showCandyEffect);

  function showRandomText() {
    var texts = ["example1", "example2"];
    var randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById("myButton").innerHTML = texts[randomIndex];
  }  

  document.getElementById("acceptPolicyButton").addEventListener("click", onAcceptPolicyButtonClick);
  document.getElementById("declinePolicyButton").addEventListener("click", onDeclinePolicyButtonClick);

// Проверяем, установлено ли куки "policyAccepted"
if (document.cookie.indexOf("policyAccepted=true") >= 0) {
  // Скрываем элемент "policyDialog"
  document.getElementById("policyDialog").style.display = "none";
}

document.getElementById("myButton").addEventListener("click", onmyButtonClick);

if (document.cookie.indexOf("freePremiumCodeActive") >= 0) {
  document.getElementById("myButton").innerHTML = "2023";
}