function func1() {
  num1 = document.getElementById("num1").value;
  y = num1 * 100;
  response = `${num1} times 100 is ` + y;
  document.getElementById("output").value = response;
}

function func2() {
  const resultsList = document.getElementById("results");
  new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`);
    resultsList.append(document.createElement("br"));
    document.getElementById("results").value = response;
  });
}
