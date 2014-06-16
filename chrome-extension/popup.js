//

var duolingo = {
  check: function(result) {
    alert(result);
    $("#duolingo").html("got duolingo!");
  }
};

//window.onload = function() {
document.addEventListener('DOMContentLoaded', function() {
  $.get("https://www.duolingo.com/", duolingo.check);

  console.log("onload " + Date());
});

