//

var duolingo = {
  check: function(result) {
    $("#duolingo") = result;
  }
};

//window.onload = function() {
document.addEventListener('DOMContentLoaded', function() {
  $.get("https://www.duolingo.com/", function(data) {
    duolingo(data);
  });

  console.log("onload " + Date());
});

