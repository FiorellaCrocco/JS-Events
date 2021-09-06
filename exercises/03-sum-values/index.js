let button = document.getElementById("btn");
// adding the function to the window makes it globally available
//Return the value of the input #firstNumber
//Return the value of the input #secondNumber
//your code goes here
button.addEventListener("click", function () {
    var stringA = document.getElementById("firstNumber").value;
    var stringB = document.getElementById("secondNumber").value;
    let resultadoA = parseInt(stringA);
    let resultadoB = parseInt(stringB);
    let total = resultadoA + resultadoB;
    document.getElementById("resultNumber").innerHTML = total;
});