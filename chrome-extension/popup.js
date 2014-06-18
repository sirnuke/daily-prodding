//

var duolingo = {
  regex: /"streak_extended_today"\s*:\s*(\w+)\s*,/,
  check: function(result) {
    var check = duolingo.regex.exec(result);
    if (check == null)
      $("#duolingo").html("Duoling: logged in?");
    else if (check[1] == 'true')
      $("#duolingo").html("Duolingo: Good!");
    else if (check[1] == 'false')
      $("#duolingo").html("Duolingo: Practice today!");
    else
      $("#duolingo").html("Duolingo: Unknown value '" + check[1] + "'");
  }
};

//window.onload = function() {
document.addEventListener('DOMContentLoaded', function() {
  $.get("https://www.duolingo.com/", duolingo.check);

  console.log("onload " + Date());
});

