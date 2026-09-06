const form = document.getElementById("conditionsForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "tests.html";
});


const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", function() {
    window.location.href = "register.html";
});