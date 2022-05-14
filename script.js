// const btn = document.querySelector("#btn");

// btn.addEventListener("click", showResults)

var resultCard = document.getElementById("resultCard");
var resName = document.getElementById("nameResult");
var resLastName = document.getElementById("lastNameResult");
var resBornDate = document.getElementById("bornDateResult");

function showResults() {
    // Input Values
    var name = document.getElementById("inputName") .value;
    var lastName = document.getElementById("inputLastName") .value;
    var bornDate = document.getElementById("inputBornDate") .value;

    resName.innerHTML = name;
    resLastName.innerHTML = lastName;
    resBornDate.innerHTML = bornDate;

    // Alert
    alert("20%");
    alert("40%");
    alert("97%");
    alert("99%");
    alert("100% ! Press OK to see the result");

    resultCard.style.visibility = "visible";

}