var elem = document.getElementById('click-cat');
var addUp = (function() {
  var count = 0;

  return function () {
    var element = document.getElementById("counter");
    if (element) element.innerHTML = ++count;
    document.getElementById("counter").innerHTML = "This has been clicked " + count + " times.";
  }
}());


// Attach as a listener
document.addEventListener("click", addUp, false);
