const form = document.getElementById("instrumentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "conditions.html";
});

const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.addEventListener("click", function() {
    window.location.href = "dashboard.html";
});

const unit = document.getElementById("unit");

unit.addEventListener("change", function() {
    const selectedUnit = this.value || "kg";

    document.getElementById("maxUnit").textContent = selectedUnit;
    document.getElementById("minUnit").textContent = selectedUnit;
    document.getElementById("eUnit").textContent = selectedUnit;
    document.getElementById("dUnit").textContent = selectedUnit;
});