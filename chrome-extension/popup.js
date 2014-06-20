//

var duolingo = {
  regex: /"streak_extended_today"\s*:\s*(\w+)\s*,/,
  check: function(result) {
    var check = duolingo.regex.exec(result);
    if (check == null)
      $("#duolingo").text("Duoling: logged in?");
    else if (check[1] == 'true')
      $("#duolingo").text("Duolingo: Good!");
    else if (check[1] == 'false')
      $("#duolingo").text("Duolingo: Practice today!");
    else
      $("#duolingo").text("Duolingo: Unknown value '" + check[1] + "'");
  }
};

var github = {
  today: function() {
    var now = new Date(Date.now());
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var result = now.getFullYear() + "/";
    if (month < 10)
      result += "0";
    result += month + "/";
    if (day < 10)
      result += "0";
    result += day;
    return result;
  },

  check: function(result) {
    var today = github.today();
    var last = result.length - 1;
    var correctDay = true;
    if (result[last][0] != today)
      correctDay = false;
    if (result[last].length != 2 || typeof result[last][1] != "number")
      $("#github").text("GitHub: Unexpected latest data format");
    else if (result[last][1] > 0 && correctDay)
      $("#github").text("GitHub: Good!");
    else
      $("#github").text("GitHub: Code today!");
  }
};

document.addEventListener('DOMContentLoaded', function() {
  $.get("https://www.duolingo.com/", duolingo.check);
  $.get("https://github.com/users/sirnuke/contributions_calendar_data", github.check);
});

