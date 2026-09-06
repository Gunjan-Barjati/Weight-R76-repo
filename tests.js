const testsForm = document.getElementById("testsForm");


// Back button

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", function() {
    window.location.href = "conditions.html";
});


// Add Load Point

const addLoadBtn = document.getElementById("addLoadBtn");
const weighingTable = document.querySelector("#weighingTable tbody");

addLoadBtn.addEventListener("click", function() {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>Additional Load</td>

        <td>
            <input type="number"
                   class="reference"
                   step="any"
                   placeholder="Reference">
        </td>

        <td>
            <input type="number"
                   class="observed"
                   step="any"
                   placeholder="Observed">
        </td>

        <td>
            <input type="text"
                   class="error"
                   readonly>
        </td>

        <td>
            <span class="result pending">Pending</span>
        </td>
    `;

    weighingTable.appendChild(row);

    addCalculationListeners(row);
});


// Weighing calculation

function calculateWeighing(row) {

    const referenceInput = row.querySelector(".reference");
    const observedInput = row.querySelector(".observed");
    const errorInput = row.querySelector(".error");
    const result = row.querySelector(".result");

    const reference = parseFloat(referenceInput.value);
    const observed = parseFloat(observedInput.value);

    if (Number.isNaN(reference) || Number.isNaN(observed)) {
        errorInput.value = "";
        result.textContent = "Pending";
        result.className = "result pending";
        return;
    }

    const error = observed - reference;

    errorInput.value = error.toFixed(3);

    result.textContent = "Calculated";
    result.className = "result pass";
}


function addCalculationListeners(row) {

    const referenceInput = row.querySelector(".reference");
    const observedInput = row.querySelector(".observed");

    referenceInput.addEventListener("input", function() {
        calculateWeighing(row);
    });

    observedInput.addEventListener("input", function() {
        calculateWeighing(row);
    });
}


const weighingRows = document.querySelectorAll("#weighingTable tbody tr");

weighingRows.forEach(function(row) {
    addCalculationListeners(row);
});


// Repeatability calculation

const repeatInputs = document.querySelectorAll(".repeatObs");

repeatInputs.forEach(function(input) {

    input.addEventListener("input", function() {
        calculateRepeatability();
    });

});


function calculateRepeatability() {

    const values = [];

    repeatInputs.forEach(function(input) {

        const value = parseFloat(input.value);

        if (!Number.isNaN(value)) {
            values.push(value);
        }

    });


    const maximum = document.getElementById("maximum");
    const minimum = document.getElementById("minimum");
    const difference = document.getElementById("difference");
    const repeatabilityError =
        document.getElementById("repeatabilityError");


    if (values.length === 0) {

        maximum.textContent = "—";
        minimum.textContent = "—";
        difference.textContent = "—";
        repeatabilityError.textContent = "—";

        return;
    }


    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const differenceValue = maxValue - minValue;


    maximum.textContent = maxValue.toFixed(3);
    minimum.textContent = minValue.toFixed(3);
    difference.textContent = differenceValue.toFixed(3);

    repeatabilityError.textContent =
        differenceValue.toFixed(3);
}


// Eccentricity calculation

function calculateEccentricity(row) {

    const referenceInput = row.querySelector(".eccReference");
    const observedInput = row.querySelector(".eccObserved");
    const errorInput = row.querySelector(".eccError");
    const result = row.querySelector(".result");

    const reference = parseFloat(referenceInput.value);
    const observed = parseFloat(observedInput.value);

    if (Number.isNaN(reference) || Number.isNaN(observed)) {

        errorInput.value = "";
        result.textContent = "Pending";
        result.className = "result pending";

        return;
    }

    const error = observed - reference;

    errorInput.value = error.toFixed(3);

    result.textContent = "Calculated";
    result.className = "result pass";
}


const eccentricityRows =
    document.querySelectorAll("#eccentricityTable tbody tr");


eccentricityRows.forEach(function(row) {

    const referenceInput =
        row.querySelector(".eccReference");

    const observedInput =
        row.querySelector(".eccObserved");


    referenceInput.addEventListener("input", function() {
        calculateEccentricity(row);
    });


    observedInput.addEventListener("input", function() {
        calculateEccentricity(row);
    });

});


// Submit

testsForm.addEventListener("submit", function(event) {

    event.preventDefault();

    window.location.href = "review.html";
});